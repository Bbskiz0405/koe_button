# Firebase 設定指南

## 🚀 快速設定步驟

### 1. 建立 Firebase 專案
1. 前往 [Firebase Console](https://console.firebase.google.com/)
2. 點擊「新增專案」
3. 輸入專案名稱（例如：koe-button）
4. 完成專案建立

### 2. 設定 Firestore 資料庫
1. 在 Firebase Console 中選擇「Firestore Database」
2. 點擊「建立資料庫」
3. 選擇「以正式版模式啟動」（推薦使用正式版，安全性更佳）
4. 選擇資料庫位置（建議選擇亞洲區域）

### 3. 設定 Firebase Storage
1. 在 Firebase Console 中選擇「Storage」
2. 點擊「開始使用」
3. 選擇「以正式版模式啟動」（推薦使用正式版，安全性更佳）
4. 選擇儲存位置（建議選擇亞洲區域）

### 4. 設定 Web 應用程式
1. 在 Firebase Console 專案總覽頁面，點擊「Web」圖示（</>）
2. 輸入應用程式暱稱（例如：koe-button-web）
3. **不要**勾選「Firebase Hosting」（我們已經有設定）
4. 點擊「註冊應用程式」
5. 複製 Firebase 配置物件

### 5. 更新配置檔案
將步驟 4 獲得的配置資訊更新到 `firebase-config.js`：

```javascript
const firebaseConfig = {
  apiKey: "你的-api-key",
  authDomain: "你的專案id.firebaseapp.com",
  projectId: "你的專案id",
  storageBucket: "你的專案id.appspot.com",
  messagingSenderId: "你的sender-id",
  appId: "你的app-id"
};
```

### 6. 設定安全規則

#### Firestore 規則 （正式版推薦設定）
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // sounds 集合：允許讀取，禁止寫入
    match /sounds/{document} {
      allow read: if true;
      allow write: if false; // 只允許透過後台管理
    }
  }
}
```

#### Storage 規則 （正式版推薦設定）
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // sounds 資料夾：允許讀取，禁止寫入
    match /sounds/{fileName} {
      allow read: if true;
      allow write: if false; // 只允許透過後台管理
    }
  }
}
```

### 7. 部署安全規則
在 Firebase Console 中：
1. **Firestore**：進入 Firestore → 規則，貼上上方的 Firestore 規則
2. **Storage**：進入 Storage → 規則，貼上上方的 Storage 規則
3. 點擊「發布」

## 📁 資料結構

### Firestore 集合：`sounds`
```javascript
{
  id: "auto-generated-id",
  description: "哈姆",                    // 按鈕顯示文字
  recordingTime: "2025-01-23T10:30:00Z", // 錄製時間
  fileName: "sound_1706012200000.mp3",   // 檔案名稱
  downloadUrl: "https://storage...",      // 下載連結
  createdAt: serverTimestamp(),          // 建立時間
  isActive: true                         // 是否啟用
}
```

### Storage 結構
```
your-project.appspot.com/
└── sounds/
    ├── sound_1706012200000.mp3
    ├── sound_1706012260000.wav
    └── ...
```

## 🔧 測試步驟

1. **測試讀取**：開啟 `index.html`，檢查是否正常載入（應該會顯示「尚未上傳任何音檔」）
2. **測試上傳**：開啟 `admin.html`，嘗試上傳一個音檔
3. **測試播放**：返回 `index.html`，檢查是否出現新按鈕並可正常播放

## 🚨 常見問題

### 問題 1：CORS 錯誤
**解決方案**：確保在 Firebase Console 中正確設定了 Web 應用程式

### 問題 2：權限被拒絕
**解決方案**：檢查 Firestore 和 Storage 的安全規則是否正確設定

### 問題 3：音檔無法播放
**解決方案**：檢查 Storage 的安全規則是否允許讀取

## 💰 費用預估

Firebase 免費方案額度：
- **Firestore**：每日 50,000 次讀取，20,000 次寫入
- **Storage**：5GB 儲存空間，每日 1GB 下載
- **Hosting**：10GB 儲存空間，每月 10GB 傳輸

對於個人專案來說，免費額度通常足夠使用。

## 📞 需要協助？

如果設定過程中遇到問題，可以：
1. 檢查瀏覽器開發者工具的 Console 是否有錯誤訊息
2. 確認 Firebase 專案的計費狀態
3. 檢查網路連線是否正常