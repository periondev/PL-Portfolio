import { IconType } from 'react-icons';

export type ProjectType = {
  projectName: string;
  previewImage: string;
  description: string;
  githubLink: string;
  liveDemoLink?: string;
  tools?: string[];
};

export type SkillType = {
  name: string;
  icon: IconType;
};
