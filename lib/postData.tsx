import { PostType } from './types';

export const posts: PostType[] = [
  {
    postTitle: `我是如何在 Next.js 13 with appDir 設定深色模式按鈕 Dark Mode Switch with Tailwind CSS and Daisy UI`,
    description: `隨著深色模式(Dark Mode)在現代網頁中越來越受歡迎，在網頁中提供Dark Mode切換功能好像是一種越來越常見的設計趨勢。
    而Next.js是非常受歡迎的的React網頁框架，在最新版Next.js 13提供appDir作為beta版的功能，其特色是打造更少客戶端(Client)的JS程式碼，建構可重用的Layouts，以目錄作為Routes切換…等等。
    由於beta版本的實驗性質，目前在next dev開發網頁深色模式功能時，經常會出現Hydration過程相關的錯誤, 本文將用簡化的例子講解我是如何在`,
    postLink: 'https://hackmd.io/@pericode/HJjDwOE43',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'daisyUI'],
    postDate: 'May 26, 2023',
  },
  {
    postTitle: '快速了解Next.js中的網頁渲染技術重點: SSR、SSG、ISR與CSR',
    description: `前言
    Next.js 是 React 的網頁框架。在學習使用 Next.js 開發的時候，我們會接觸到四種常見的網頁渲染技術。我們需要考量該選擇使用哪些網頁渲染技術，較為適合開發中的網站或應用程式。
    先解釋一下這四種技術的英文縮寫：
    SSR：Server Side Rendering，伺服器端渲染
    SSG：Static Site Generation，靜態網站生成
    ISR：Incremental Site Rendering，增量式的網站渲染
    CSR：Client Side Rendering，客戶端（通常是瀏覽器）渲染
    Next.js pre-rendering 預渲染
    Next.js 有一個特點是支援預渲染，預設會預渲染每個頁面，目的是可以帶來更好的性能以及 SEO。`,
    postLink: 'https://hackmd.io/@pericode/HyRJHvAsj',
    tags: ['Next.js', 'SEO', '網頁技術'],
    postDate: 'Apr 07, 2023',
  },
  {
    postTitle: `紀錄從 yarn 改為 pnpm Node package manager`,
    description: `前言
     本篇文章簡單紀錄既有開發中的專案原先使用yarn套件管理器，改為使用pnpm做為套件管理器的設定過程。
     Migration
     用npm安裝pnpm
     安裝指令
     npm install -g pnpm
     確認安裝版本
     pnpm --version 
     刪除 node_modules
     npx npkill
     編輯package.json
     新增一個腳本
     "scripts": {
       "preinstall": "npx only-allow pnpm", 
       ...
     }`,
    postLink: 'https://hackmd.io/@pericode/SJWYAHrxn',
    tags: ['Node.js', 'yarn', 'npm', 'pnpm'],
    postDate: 'Mar 20, 2023',
  },
  {
    postTitle: `金魚腦的tailwindcss安裝指南`,
    description: `首先看官網安裝介紹
    https://tailwindcss.com/docs/installation
    基本上若有搭配框架使用開發app,例如Next.js
    就請移駕至[Framework Guides](https://tailwindcss.com/docs/installation/framework-guides)
    選擇搭配使用的Framework，參考安裝說明步驟進行。
    在不搭配框架下進行開發的話，可以執行安裝命令:
    npm install -D tailwindcss postcss autoprefixer
    目的是安裝 tailwindcss 及相關套件 postcss、autoprefixer
    安裝完後在 devDependencies 可以見到。`,
    postLink: 'https://hackmd.io/@pericode/HyBfThFYs',
    tags: ['Tailwind CSS', 'Next.js', 'npm'],
    postDate: 'Jan 14, 2023',
  },
];
