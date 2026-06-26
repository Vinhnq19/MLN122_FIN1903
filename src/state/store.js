import { ENDINGS } from '../data/scenarios.js';

export function createGameStore() {
  return {
    playerName: '',
    role: 'Bộ trưởng Bộ Năng lượng',
    gameStarted: false,
    budget: 50,
    satisfaction: 50,
    stability: 50,
    currentStep: 0,
    gameOver: false,
    ending: null,
    showPopup: false,
    currentFeedback: '',

    get formattedFeedback() {
      if (!this.currentFeedback) return '';
      const prefix = this.currentStep % 2 === 0 
        ? `Báo cáo ${this.role} ${this.playerName}:\n\n` 
        : `Kính thưa ${this.role} ${this.playerName},\n\n`;
      return prefix + this.currentFeedback;
    },

    init() {
      // Gọi reset nội bộ các chỉ số
      this.reset();
    },

    startGame(name, role) {
      if (!name.trim()) return;
      this.playerName = name.trim();
      this.role = role;
      this.gameStarted = true;
      this.reset(); // Đảm bảo các chỉ số reset khi bắt đầu mới
    },

    reset() {
      this.budget = 50;
      this.satisfaction = 50;
      this.stability = 50;
      this.currentStep = 0;
      this.gameOver = false;
      this.ending = null;
      this.showPopup = false;
      this.currentFeedback = '';
    },

    makeChoice(option) {
      // Cập nhật điểm và khống chế trong khoảng 0-100
      this.budget = Math.max(0, Math.min(100, this.budget + option.budget));
      this.satisfaction = Math.max(0, Math.min(100, this.satisfaction + option.satisfaction));
      this.stability = Math.max(0, Math.min(100, this.stability + option.stability));

      // Lưu trữ giải thích để hiện popup
      this.currentFeedback = option.feedback;
      this.showPopup = true;
    },

    nextStep() {
      this.showPopup = false;

      // 1. Kiểm tra điều kiện Game Over lập tức (Nhóm 1)
      if (this.budget <= 0) { this.triggerEnding(ENDINGS.BUDGET_CRASH); return; }
      if (this.satisfaction <= 0) { this.triggerEnding(ENDINGS.TRUST_CRASH); return; }
      if (this.stability <= 0) { this.triggerEnding(ENDINGS.SYSTEM_CRASH); return; }

      this.currentStep++;

      // 2. Nếu đi hết 10 tình huống, đánh giá kết cục chung cuộc
      if (this.currentStep >= 10) {
        this.evaluateFinalEnding();
      }
    },

    triggerEnding(endingObj) {
      this.gameOver = true;
      this.ending = endingObj;
    },

    evaluateFinalEnding() {
      this.gameOver = true;
      
      // Nhóm 4: Huyền thoại (Tất cả > 60)
      if (this.budget >= 60 && this.satisfaction >= 60 && this.stability >= 60) {
        this.ending = ENDINGS.LEGEND;
      } 
      // Nhóm 2: Cực đoan lệch chuẩn
      else if (this.budget > 70 && this.satisfaction < 30) {
        this.ending = ENDINGS.CAPITALIST;
      } else if (this.satisfaction > 70 && this.budget < 30) {
        this.ending = ENDINGS.POPULIST;
      } else if (this.stability > 70 && this.budget < 40 && this.satisfaction < 40) {
        this.ending = ENDINGS.CONSERVATIVE;
      } 
      // Nhóm 3: Kẻ giữ đền nhẫn nại (Thực tế phổ biến)
      else {
        this.ending = ENDINGS.REALIST;
      }
    }
  };
}
