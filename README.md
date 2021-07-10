# 老爸的私房錢 Expense Tracker
一個用 Express 和 MongoDB 所建立簡單的網路記帳工具應用程式。

## 特色 Features
- 在首頁瀏覽所有支出清單與它們的總金額
- 可以根據收支類別來計算特定支出分類的總金額
- 可以新增、修改、刪除任何一筆收支的細節資訊


## 環境建置 Environment Setup

1. nvm & Node.js
2. nodemon
3. MongoDB

## 安裝 Installing

1. 在終端機輸入指令 Clone 此專案至本機電腦
```
git clone https://github.com/Whaleep/expense-tracker
```
2. 進入專案目錄
```
cd expense-tracker
```
3. 安裝相關套件
```
npm install
```
4. 新增種子資料
```
npm run seed
```
5. 啟動專案
```
npm run dev
```
6. 出現以下訊息後，即可在 http://localhost:3000 開始使用
```
Express is listening on localhost:3000
```
