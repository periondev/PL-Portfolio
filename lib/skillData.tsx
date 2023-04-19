import { SkillType } from './types';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiChakraui,
  SiGit,
  SiNodedotjs,
  SiMongodb,
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
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Chakra UI', icon: SiChakraui },
];

export const backendAndGit: SkillType[] = [
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Git', icon: SiGit },
];
