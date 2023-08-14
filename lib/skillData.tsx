// https://react-icons.github.io/react-icons

import { SkillType } from './types';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiChakraui,
  SiBootstrap,
  SiGit,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from 'react-icons/si';

export const languages: SkillType[] = [
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
];

export const jsAndCssTools: SkillType[] = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React', icon: SiReact },
  { name: 'Vue.js', icon: SiVuedotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Chakra UI', icon: SiChakraui },
  { name: 'Bootstrap', icon: SiBootstrap },
];

export const backendAndGit: SkillType[] = [
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Git', icon: SiGit },
];
