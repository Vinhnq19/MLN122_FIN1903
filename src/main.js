import Alpine from 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/module.esm.js';
import { createGameStore } from './state/store.js';
import { SCENARIOS } from './data/scenarios.js';
import { initFirebase } from './firebase.js';

window.Alpine = Alpine;

// Đăng ký global store với tên 'game'
const gameStore = createGameStore();
Alpine.store('game', gameStore);

// Khởi tạo Firebase và kết nối với store (phải truyền proxy của Alpine để có reactivity)
initFirebase(Alpine.store('game'));

// Đăng ký dữ liệu kịch bản để gọi trực tiếp ngoài HTML
Alpine.data('gameData', () => ({
  scenarios: SCENARIOS,
  isAnimating: false,
  swipeDirection: null,
  get currentScenario() {
    const isReview = this.$store.game.reviewMode;
    const step = isReview ? this.$store.game.reviewStep : this.$store.game.currentStep;
    return this.scenarios[step] || null;
  },
  handleChoice(option, index) {
    if (this.isAnimating) return;
    
    // index === 0 là A (trái), index === 1 là B (phải)
    this.swipeDirection = index === 0 ? 'left' : 'right';
    this.isAnimating = true;
    
    setTimeout(() => {
      // Cập nhật dữ liệu sau khi thẻ bài bay ra (200ms)
      Alpine.store('game').makeChoice(option, index, this.currentScenario.title);
      
      // Reset trạng thái swipe để khi popup đóng thẻ bài mới sẽ sẵn sàng bay vào
      this.swipeDirection = null;
      this.isAnimating = false;
    }, 200);
  },
  
  continueNext() {
    if (this.isAnimating) return;
    this.isAnimating = true;

    // Tắt popup và chuyển qua câu mới
    Alpine.store('game').nextStep();

    if (Alpine.store('game').gameOver) {
      this.isAnimating = false;
      return;
    }

    // Đổi class để thẻ bài bay từ dưới lên
    this.swipeDirection = 'enter';
    
    setTimeout(() => {
      // Hoàn tất hiệu ứng vào (300ms)
      this.isAnimating = false;
      this.swipeDirection = null;
    }, 300);
  }
}));

Alpine.start();
