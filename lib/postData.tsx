import { PostType } from './types';

export const posts: PostType[] = [
  {
    postTitle: 'Hello Post! Lorem ipsum dolor',
    description:
      'Consectetur adipiscing elit. Nunc finibus sapien eget quam posuere, vitae consequat tortor eleifend. Proin imperdiet fringilla tempus. Integer eget vulputate ante. Etiam fermentum diam a velit tempor',
    postLink: 'https://hackmd.io/@pericode/rk-Z-puNn',
    tools: ['Next.js', 'React', 'Tailwind CSS'],
    postDate: 'May 10, 2023',
  },
  {
    postTitle: 'Title 1',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    postLink: ' ',
    tools: ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'TypeScript'],
    postDate: 'Mar 20, 2023',
  },
  {
    postTitle: 'Title 2',
    description:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
    postLink: ' ',
    tools: ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'TypeScript'],
    postDate: 'Jan 14, 2023',
  },
  {
    postTitle:
      '我是如何在 Next.js 13 with appDir 設定深色模式按鈕 Dark Mode Switch with Tailwind CSS and Daisy UI',
    description:
      '隨著深色模式(Dark Mode)在現代網頁中越來越受歡迎，在網頁中提供Dark Mode切換功能好像是一種越來越常見的設計趨勢。而Next.js是非常受歡迎的的React網頁框架，在最新版Next.js 13提供appDir作為beta版的功能，其特色是打造更少客戶端(Client)的JS程式碼，建構...',
    postLink: ' ',
    tools: ['Next.js', 'React', 'Tailwind CSS', 'daisyUI'],
    postDate: 'May 12, 2023',
  },
];
