import { ProjectType } from './types';

export const name = 'Peri Lin';
export const intro = () => {
  return (
    <>
      {`Hello, I'm Peri, a Developer providing sevices for programming needs. Contact me down below and let's get
              cracking!`}
    </>
  );
};
export const about = () => {
  return (
    <>
      {`I'm passionate about frontend development and have created projects on React, Next.js, and web app development.`}
    </>
  );
};

export const items: ProjectType[] = [
  {
    projectName: 'My Youtube Collection',
    previewImage: 'https://picsum.photos/640/400',
    description:
      "Youtube Playlist App (It's providing a convenient way for users to note down ideas, tasks.)",
    githubLink: 'https://github.com/PeriYumYum/youtube-playlist-next-app',
    liveDemoLink: 'https://youtube-playlist-next-app.vercel.app/',
    tools: ['Next.js', 'Chakra UI'],
  },
  {
    projectName: 'ToDoList',
    previewImage: 'https://picsum.photos/640/400',
    description:
      "A simple todolist (It's designed for use on a daily basis, providing a convenient way for users to note down ideas, tasks, or other information as needed.)",
    githubLink: 'https://github.com/PeriYumYum/ToDoList',
    tools: ['Node.js', 'express', 'MongoDB'],
  },
  {
    projectName: 'Keeper',
    previewImage: 'https://picsum.photos/640/400',
    description:
      "The notes app that allows users to quickly and easily create and save notes. It's designed for use on a daily basis, providing a convenient way for users to note down ideas, tasks, or other information as needed.",
    githubLink: 'https://github.com/PeriYumYum/Keeper-app',
    tools: ['React', 'Node.js'],
  },
];
