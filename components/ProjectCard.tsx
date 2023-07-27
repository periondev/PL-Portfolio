import Link from 'next/link';
import Image from 'next/image';
import { ProjectType } from '@lib/types';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export const ProjectCard = ({
  projectName,
  previewImage,
  description,
  githubLink,
  liveDemoLink,
  tools,
}: ProjectType) => {
  return (
    <div className='card card-compact shadow-2xl'>
      <figure className='relative aspect-video w-full overflow-hidden'>
        <Image src={previewImage} fill={true} sizes='100' alt='Preview Image' priority={true} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-start p-0'>{projectName}</h2>
        <p>{description}</p>
        <div className='flex flex-wrap flex-row gap-1.5'>
          {tools?.map((tech: string, index: number) => {
            return (
              <div key={index} className='badge badge-outline dark:text-zinc-300'>
                {tech}
              </div>
            );
          })}
        </div>
        <div className='card-actions justify-end'>
          {liveDemoLink && (
            <Link href={liveDemoLink} target='_blank' title='Live Demo' prefetch={false}>
              <FiExternalLink className='text-3xl transition-all hover:scale-125 ease-in-out delay-100 dark:text-white' />
            </Link>
          )}
          <Link href={githubLink} target='_blank' title='Source Code on GitHub' prefetch={false}>
            <FiGithub className='text-3xl transition-all hover:scale-125 ease-in-out delay-100 dark:text-white' />
          </Link>
        </div>
      </div>
    </div>
  );
};
