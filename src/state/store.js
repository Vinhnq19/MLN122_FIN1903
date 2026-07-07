import { ENDINGS } from '../data/scenarios.js';
import { saveToLeaderboard } from '../firebase.js';

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
    choiceHistory: [],
    lastEnding: null,
    lastChoiceHistory: [],
    viewingHistory: false,
    reviewMode: false,
    reviewStep: 0,
    leaderboard: [],
    showLeaderboard: false,

    get displayEnding() {
      const e = this.viewingHistory ? this.lastEnding : this.ending;
      // Fallback để tránh crash khi chưa có ending
      return e || { rank: 0, title: '', description: '', reason: '' };
    },

    get displayHistory() {
      return this.viewingHistory ? this.lastChoiceHistory : this.choiceHistory;
    },

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

    goHome() {
      this.gameStarted = false;
      this.reset();
    },

    startGame(name, role) {
      if (!name.trim()) return;
      this.playerName = name.trim();
      this.role = role;
      this.gameStarted = true;
      this.viewingHistory = false;
      this.reviewMode = false;
      this.reset(); // Đảm bảo các chỉ số reset khi bắt đầu mới
    },

    reset() {
      // Lưu lại kết quả lần trước nếu vừa chơi xong
      if (this.gameOver && this.ending) {
        this.lastEnding = this.ending;
        this.lastChoiceHistory = [...this.choiceHistory];
      }

      this.budget = 50;
      this.satisfaction = 50;
      this.stability = 50;
      this.currentStep = 0;
      this.gameOver = false;
      this.ending = null;
      this.showPopup = false;
      this.currentFeedback = '';
      this.choiceHistory = [];
      this.viewingHistory = false;
      this.reviewMode = false;
      this.reviewStep = 0;
    },

    startReview() {
      // Chỉ cho phép xem lại nếu có choiceHistory của game vừa xong, hoặc lastChoiceHistory
      this.reviewMode = true;
      this.reviewStep = 0;
      this.viewingHistory = false;
      this.gameOver = false; // Tạm ẩn màn hình game over để hiện màn hình thẻ bài
    },

    nextReviewStep() {
      // Lấy danh sách lịch sử đang xem (nếu đang xem lại game vừa chơi thì dùng choiceHistory)
      // Wait, khi gameOver = true, thì choiceHistory vẫn còn đó.
      // Nếu là lastChoiceHistory thì startReview phải được gọi từ đâu?
      // Xem lại màn hình GameOver: nếu xem viewingHistory thì lấy displayHistory.
      const historyToReview = this.displayHistory;
      if (this.reviewStep < historyToReview.length - 1) {
        this.reviewStep++;
      } else {
        // Đã xem hết, quay lại màn hình Kết cục
        this.reviewMode = false;
        this.gameOver = true;
      }
    },

    viewLastResult() {
      this.viewingHistory = true;
    },

    closeHistory() {
      this.viewingHistory = false;
    },

    makeChoice(option, index, scenarioTitle) {
      // Cập nhật điểm và khống chế trong khoảng 0-100
      this.budget = Math.max(0, Math.min(100, this.budget + option.effects.budget));
      this.satisfaction = Math.max(0, Math.min(100, this.satisfaction + option.effects.satisfaction));
      this.stability = Math.max(0, Math.min(100, this.stability + option.effects.stability));

      // Lưu trữ lịch sử lựa chọn
      const letters = ['A', 'B', 'C'];
      this.choiceHistory.push({
        step: this.currentStep + 1,
        situation: scenarioTitle,
        choiceLetter: letters[index] || '?',
        choiceText: option.text,
        consequence: option.feedback
      });

      // Lưu trữ giải thích để hiện popup
      this.currentFeedback = option.feedback;
      this.showPopup = true;
    },

    nextStep() {
      this.showPopup = false;

      // 1. Kiểm tra điều kiện Game Over lập tức (Hạng 6, 7, 8)
      // Những hạng này là chết ngay lập tức nếu chỉ số chạm 0
      const instantEnding = ENDINGS.find(e => [6, 7, 8].includes(e.rank) && e.condition(this));
      if (instantEnding) {
        this.triggerEnding(instantEnding);
        return;
      }

      this.currentStep++;

      // 2. Nếu đi hết 15 tình huống, đánh giá kết cục chung cuộc
      if (this.currentStep >= 15) {
        this.evaluateFinalEnding();
      }
    },

    triggerEnding(endingObj) {
      this.gameOver = true;
      this.ending = endingObj;

      // Lưu kết quả lên Firebase
      saveToLeaderboard({
        playerName: this.playerName,
        role: this.role,
        rank: this.ending.rank,
        title: this.ending.title
      });
    },

    evaluateFinalEnding() {
      this.gameOver = true;
      
      // Tìm các kết cục không thuộc nhóm chết ngay (1, 2, 3, 4, 5)
      // Sắp xếp theo rank tăng dần (1 tốt nhất) để ưu tiên
      const possibleEndings = ENDINGS
        .filter(e => ![6, 7, 8].includes(e.rank))
        .sort((a, b) => a.rank - b.rank);

      for (let ending of possibleEndings) {
        if (ending.condition(this)) {
          this.ending = ending;
          // Lưu kết quả lên Firebase (giống triggerEnding)
          saveToLeaderboard({
            playerName: this.playerName,
            role: this.role,
            rank: this.ending.rank,
            title: this.ending.title
          });
          return;
        }
      }
    }
  };
}
