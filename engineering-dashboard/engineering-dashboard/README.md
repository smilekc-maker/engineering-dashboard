# 工程整合週報儀表板

互動式工程週報儀表板，涵蓋 6 大專案即時進度。

## 本地執行

```bash
npm install
npm run dev
```

瀏覽器開啟 http://localhost:5173

---

## 部署到 Vercel（推薦，最簡單）

### 方法一：拖曳上傳
1. 前往 https://vercel.com，登入（免費）
2. 點 **Add New → Project**
3. 將整個專案資料夾拖曳上傳，或連接 GitHub repo
4. Framework Preset 選 **Vite**
5. 點 **Deploy** → 約 1 分鐘完成
6. 取得網址，分享給所有人

### 方法二：GitHub + Vercel 自動部署
1. 在 GitHub 建立新 repo，上傳此專案
2. 前往 https://vercel.com → Import Git Repository
3. 選擇該 repo → Deploy
4. 每次 push GitHub，Vercel 自動更新

---

## 部署到 GitHub Pages

```bash
# 1. 修改 vite.config.js，加入 base 路徑
#    base: '/your-repo-name/'

# 2. 安裝 gh-pages
npm install --save-dev gh-pages

# 3. package.json 加入
#    "deploy": "vite build && gh-pages -d dist"

# 4. 執行部署
npm run deploy
```

網址：https://your-username.github.io/your-repo-name/

---

## 專案結構

```
engineering-dashboard/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    └── App.jsx       ← 主要儀表板程式碼
```

## 更新資料

所有專案資料都在 `src/App.jsx` 最上方的 `projects` 陣列中，
直接修改對應欄位即可更新週報內容。
