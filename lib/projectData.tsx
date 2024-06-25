import { ProjectType } from './types';

export const items: ProjectType[] = [
  {
    projectName: '天氣預報',
    previewImage: '/project-images/vue-weather.webp',
    description: `天氣預報網頁，提供台灣各縣市和鄉鎮市區的即時天氣及一週天氣預報，連接至中央氣象署開放資料平台之資料擷取API，使用者可以查詢任意地區的最新天氣狀況，也能儲存自訂地區以便日後快速查看。`,
    githubLink: 'https://github.com/periondev/vue-weather/',
    tools: [
      'Vue.js',
      'Node.js',
      'TypeScript',
      'Tailwind CSS',
      'Pinia',
      'Opendata API',
    ],
    liveDemoLink: 'https://periondev.github.io/vue-weather/',
  },
  {
    projectName: 'Peri Portfolio',
    previewImage: '/project-images/pl-portfolio.webp',
    description:
      '你正在瀏覽我的個人網站，這個網站主要使用的構建工具如下方標籤所示，感興趣的話歡迎點擊右下方 GitHub 圖示查看原始碼！',
    githubLink: 'https://github.com/periondev/PL-Portfolio',
    tools: [
      'Next.js',
      'React',
      'Node.js',
      'Tailwind CSS',
      'daisyUI',
      'TypeScript',
    ],
  },
  {
    projectName: 'My Youtube Collection',
    previewImage: '/project-images/My-Youtube-Collection.webp',
    description:
      '以 Youtube Data API 擷取播放清單資料庫作為 YouTube 播放清單的簡約替代，是一個美觀且極簡的播放器與播放清單網頁。使用者可以直觀地在卡片上播放視聽內容。',
    githubLink: 'https://github.com/periondev/youtube-playlist-next-app',
    liveDemoLink: 'https://my-youtube-collection.vercel.app/',
    tools: ['Next.js', 'React', 'Node.js', 'Chakra UI', 'Youtube Data API'],
  },
  {
    projectName: 'ToDoList',
    previewImage: '/project-images/ToDoList.webp',
    description:
      '一個簡單的待辦事項列表，可以於日常使用。它允許使用者新增新的待辦任務、編輯任務、刪除任務，以及讀取在 MongoDB Atlas 上保存的所有任務。',
    githubLink: 'https://github.com/periondev/ToDoList',
    tools: ['EJS', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    projectName: 'Keeper App',
    previewImage: '/project-images/Keeper.webp',
    description:
      '這是以 React 建構的筆記應用程式，能夠快速且輕鬆地在本地創建和保存筆記，為使用者提供便利的方式隨時記錄想法、任務或其他所需的訊息。',
    githubLink: 'https://github.com/periondev/React-Notes-Keeper',
    liveDemoLink: 'https://pl-keeper.netlify.app/',
    tools: ['React', 'Node.js', 'MUI'],
  },
];
