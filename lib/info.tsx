import { ProjectType } from '@lib/types';

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

export const skills = () => {
  return <>{`React, Next.js, Node.js....`}</>;
};

export const items: ProjectType[] = [
  {
    projectName: 'My Youtube Collection',
    previewImage: 'https://picsum.photos/640/400',
    description: 'Youtube Playlist App',
    githubLink: 'https://github.com/PeriYumYum/youtube-playlist-next-app',
    liveDemoLink: 'https://youtube-playlist-next-app.vercel.app/',
    tools: ['Next.js', 'Chakra UI'],
  },
  {
    projectName: 'ToDoList',
    previewImage: 'https://picsum.photos/640/400',
    description: 'A simple todolist',
    githubLink: 'https://github.com/PeriYumYum/ToDoList',
    tools: ['Node.js', 'express', 'MongoDB'],
  },
  {
    projectName: 'Keeper',
    previewImage: 'https://picsum.photos/640/400',
    description: 'A simple notes app',
    githubLink: 'https://github.com/PeriYumYum/Keeper-app',
    tools: ['React', 'Node.js'],
  },
];
