# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Browser 

Open browser then enter `http://localhost:3000`

## Toggle the server's maintenance mode

```bash
curl -X POST http://localhost:3000/website-api/maintenance -H 'Content-Type: application/json'
```

## Production

Build the application for production:

```bash
npm run build
```

## 說明

### 不使用 .env 控制當下是否為維護模式

因為其實每次修改 .env 後，都還要重新 build 才會對新的 .env 生效。

PS. 你也可以設置好 .env 後，每次都是透過 process.env 在 server 取得，前端如果要知道，就是每次打 .env 就好。

### Server side

1. 在 /server/plugin 設置 Maintenance mode 初始值
2. `(optional)` 開發 Get API 供前端查詢當下狀態，但其實可以不用，因為在 Middleware 檢查到當下為 Maintenance 就應該回覆 http 503 及靜態畫面，不需要再讓前端做任何事情。
3. 開發 Post API 供管理員切換 Maintenance mode，記得要加上自己的驗證模式。
4. 設計 Server middleware，判斷當下的 Maintenance mode 以及要請求的路徑為何，如果是要去特定在 Maintenance mode 也可以瀏覽的頁面以及 Post API 切換 Maintenance mode 的路徑都應該允許。
5. `(optional)` 設計 503 顯示畫面，將其 html 放置在 public 下。

### Client side (Optional)

可以參考此 repo 的 commit 6fa4e20104e0ffa88d3432082a1af9a9a415e84f，

1. 可以在 plugins 增加去 Server 做 Get API 的邏輯，取得當下的 Maintenance mode。
2. 在 middleware 中如果不是要及時判斷，可以使用在 1. 取得並存在 useState 中的變數判斷；如果要及時判斷，就可以透過 server middleware 判斷或者在 client middle 中每次都打 API 判斷。
