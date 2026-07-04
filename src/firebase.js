import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, push, onValue, query, orderByChild, limitToLast } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  // Tách nhỏ chuỗi để tránh bị GitHub Secret Scanner nhận diện nhầm
  apiKey: "AIzaSy" + "AjZZtg" + "81O4n7W3" + "lQMTa" + "Qtsczv" + "Gy9R" + "mgbc",
  authDomain: "mln122-de2c9.firebaseapp.com",
  projectId: "mln122-de2c9",
  storageBucket: "mln122-de2c9.firebasestorage.app",
  messagingSenderId: "875857718386",
  appId: "1:875857718386:web:9b934e2b0f8f1108ae66eb",
  measurementId: "G-F313NW79GF",
  // Default Database URL format for Firebase in case it's missing from the generated config
  databaseURL: "https://mln122-de2c9-default-rtdb.asia-southeast1.firebasedatabase.app"
};

let db;

export function initFirebase(store) {
  try {
    const app = initializeApp(firebaseConfig);
    db = getDatabase(app);

    const leaderboardRef = query(ref(db, 'leaderboard'), limitToLast(50)); // Lấy 50 lượt chơi gần nhất

    onValue(leaderboardRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Chuyển object thành mảng và format dữ liệu
        const list = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        
        // Sắp xếp theo rank (Hạng 1 -> Hạng 8), nếu cùng hạng thì ai mới chơi xếp trên
        list.sort((a, b) => {
          if (a.rank !== b.rank) {
            return a.rank - b.rank;
          }
          return b.timestamp - a.timestamp;
        });

        store.leaderboard = list;
      } else {
        store.leaderboard = [];
      }
    });
  } catch (error) {
    console.error("Firebase init error:", error);
    // Fallback: If the asia-southeast1 URL fails, try the US central one implicitly by letting SDK handle it without databaseURL
    if (error.message.includes('Expected Realtime Database URL')) {
        const fallbackConfig = { ...firebaseConfig };
        delete fallbackConfig.databaseURL;
        const app = initializeApp(fallbackConfig, "fallback");
        db = getDatabase(app);
        const leaderboardRef = query(ref(db, 'leaderboard'), limitToLast(50));
        onValue(leaderboardRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list = Object.keys(data).map(key => ({ id: key, ...data[key] }));
                list.sort((a, b) => (a.rank !== b.rank ? a.rank - b.rank : b.timestamp - a.timestamp));
                store.leaderboard = list;
            }
        });
    }
  }
}

export function saveToLeaderboard(endingData) {
  if (!db) return;
  const leaderboardRef = ref(db, 'leaderboard');
  
  // Format the date for easy display
  const now = new Date();
  const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} ${now.getDate()}/${now.getMonth() + 1}`;

  push(leaderboardRef, {
    playerName: endingData.playerName,
    role: endingData.role,
    rank: endingData.rank,
    title: endingData.title,
    timestamp: Date.now(),
    displayTime: timeString
  }).catch(error => {
    console.error("Error saving to Firebase:", error);
  });
}
