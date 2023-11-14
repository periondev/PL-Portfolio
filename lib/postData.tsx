import { PostType } from './types';

export const posts: PostType[] = [
  {
    postTitle:
      'GitHub Actions 實現自動化部署流程 (Deploy Workflow for GitHub Pages)',
    description: `前言
  承上一篇文章手動部署 GitHub Pages，專案在 GitHub 遠端儲存庫已有main、gh-pages兩個分支，其中 main 作為開發更新的主要分支，gh-pages作為遠端部署 github pages 的來源，那麼我在本地更新程式碼並遞交程式碼，然後執行推送到遠端部署分支的命令:git subtree push --prefix dist origin gh-pages，每次部署都要重複同樣的瑣碎命令和流程，能不能將這個部署流程自動化? 當然可以! 只要撰寫腳本就行了。`,
    postLink: 'https://hackmd.io/@pericode/S16N_jjlT',
    tags: ['GitHub Actions', 'GitHub Pages', 'Deploy'],
    postDate: 'Oct 7, 2023',
  },
  {
    postTitle: 'Vite 部署靜態網頁 Github Pages',
    description: `使用工具和前置作業
  Vite
  pnpm
  已經建立好的 GitHub Repository 遠端庫
  
  修改vite.config.ts
  根據官方文件說明，若預期部署在https://<USERNAME>.github.io/<REPONAME>/ 網址上，首先需要在本地專案中的vite.config.ts新增或修改base屬性。
  例如我的遠端庫名稱<REPONAME>為vue-weather-app，那麼就設定base 為'/vue-weather-app/':`,
    postLink: 'https://hackmd.io/@pericode/BkcNtoPl6',
    tags: ['Vite', 'GitHub Pages', 'Deploy'],
    postDate: 'Oct 3, 2023',
  },
  {
    postTitle: 'Vue 的響應式基礎',
    description: `Vue 是一個前端框架，它可以讓我們用簡單的方式開發出動態的網頁。學習使用 Vue 的一大重點就是它的響應式，也就是說當使用者在網頁改變了資料，網頁畫面也會自動更新。這篇文章將介紹什麼是響應式，以及如何使用 Vue 提供的 ref() 和 reactive() 函數來定義響應式的數據。
  什麼是響應式的值? 與一般數值的不同?
  在 JavaScript 中，我們可以用各種類型的值來儲存資料，例如數字、字串、陣列、物件等。這些值都是可變的，也就是說，我們可以隨時修改它們的內容。例如：`,
    postLink: 'https://hackmd.io/@pericode/H1m-tMCWa',
    tags: ['Vue', 'Reactivity'],
    postDate: 'Aug 11, 2023',
  },
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
    postTitle: '快速了解 Next.js 中的網頁渲染技術重點: SSR、SSG、ISR 與 CSR',
    description: `前言
    Next.js 是 React 的網頁框架。在學習使用 Next.js 開發的時候，我們會接觸到四種常見的網頁渲染技術。我們需要考量該選擇使用哪些網頁渲染技術，較為適合開發中的網站或應用程式。
    先解釋一下這四種技術的英文縮寫：`,
    postLink: 'https://hackmd.io/@pericode/HyRJHvAsj',
    tags: ['Next.js', 'SEO', '網頁技術'],
    postDate: 'Apr 7, 2023',
  },
  {
    postTitle: `紀錄從 Yarn 改為 pnpm Node Package Manager`,
    description: `前言
     本篇文章簡單紀錄既有開發中的專案原先使用yarn套件管理器，改為使用pnpm做為套件管理器的設定過程。
     Migration
     用npm安裝pnpm
     安裝指令
     npm install -g pnpm
     確認安裝版本
     pnpm --version `,
    postLink: 'https://hackmd.io/@pericode/SJWYAHrxn',
    tags: ['Node.js', 'yarn', 'npm', 'pnpm'],
    postDate: 'Mar 20, 2023',
  },
  {
    postTitle: `金魚腦的 Tailwind CSS 安裝指南`,
    description: `首先看官網安裝介紹
    https://tailwindcss.com/docs/installation
    基本上若有搭配框架使用開發app,例如Next.js
    就請移駕至[Framework Guides](https://tailwindcss.com/docs/installation/framework-guides)
    選擇搭配使用的Framework，參考安裝說明步驟進行。`,
    postLink: 'https://hackmd.io/@pericode/HyBfThFYs',
    tags: ['Tailwind CSS', 'Next.js', 'npm'],
    postDate: 'Jan 14, 2023',
  },
];
