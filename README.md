# 老爸的私房錢 Expense Tracker
一個用 Express 和 MongoDB 所建立簡單的網路記帳工具應用程式。

## 特色 Features
- 使用者可以註冊帳號或是用 Facebook Login 直接登入，建立並管理專屬他的一個支出記錄
- 在首頁瀏覽所有支出清單與它們的總金額
- 可以根據月份或收支類別來計算特定支出分類的總金額
- 可以新增、修改、刪除任何一筆收支的細節資訊


## 環境建置 Environment Setup

1. nvm & Node.js
2. nodemon
3. MongoDB

## 安裝 Installing

1. 在終端機輸入指令 Clone 此專案至本機電腦，並安裝相關套件
```
git clone https://github.com/Whaleep/expense-tracker
cd expense-tracker
npm install
```
2. 設定環境變數檔案，將檔案 .env.example 檔名改為 .env。  
若要使用 facebook login ，則需要先在 [Facebook for Developers](https://developers.facebook.com/) 中建立應用程式，將應用程式編號和密鑰填入 .env，即可使用 facebook login 功能。

3. 新增種子資料
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

## 預設使用者 Seed User
>* email: root@example.com
>* password: 12345678

## 版本階段 Version

在終端機輸入指令切換到對應進度
- v1 學期2-3(2020) A12進度
- v2 學期3後 A2進度
```
git checkout v1
git checkout v2
```
