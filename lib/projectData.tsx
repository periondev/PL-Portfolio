import { ProjectType } from './types';

export const items: ProjectType[] = [
  {
    projectName: 'My Youtube Collection',
    previewImage: '/project-images/My-Youtube-Collection.webp',
    description:
      'Beautiful and minimal player as an abstraction of Youtube Playlist. It allows users to play audiovisual content on the card intuitively.',
    githubLink: 'https://github.com/PeriYumYum/youtube-playlist-next-app',
    liveDemoLink: 'https://youtube-playlist-next-app.vercel.app/',
    tools: ['Next.js', 'React', 'Node.js', 'Chakra UI', 'Youtube Data API'],
  },
  {
    projectName: 'ToDoList',
    previewImage: '/project-images/ToDoList.webp',
    description:
      'A simple todolist designed for use on a daily basis. It allows user to add new todo task, edit task, delete task and read all tasks saved on MongoDB Atlas.',
    githubLink: 'https://github.com/PeriYumYum/ToDoList',
    tools: ['EJS', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    projectName: 'Keeper App',
    previewImage: '/project-images/Keeper.webp',
    description:
      'The notes app that allows users to quickly and easily create and save notes, providing a convenient way for users to note down ideas, tasks, or other information as needed.',
    githubLink: 'https://github.com/PeriYumYum/Keeper-app',
    liveDemoLink: 'https://pl-keeper.netlify.app/',
    tools: ['React', 'Node.js', 'MUI'],
  },
  {
    projectName: 'Peri Portfolio',
    previewImage: 'https://picsum.photos/640/400',
    description:
      'My personal portfolio website you are viewing now, is built with Next.js 13, Tailwindcss and TypeScript.',
    githubLink: 'https://github.com/PeriYumYum/Next-Tailwind-Portfolio',
    tools: ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'TypeScript'],
  },
];
