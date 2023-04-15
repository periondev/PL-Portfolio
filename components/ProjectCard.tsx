import Link from 'next/link';
import Image from 'next/image';
import { ProjectType } from '@lib/types';
import { FiGithub } from 'react-icons/fi';

export const ProjectCard = ({
  projectName,
  previewImage,
  description,
  githubLink,
  liveDemoLink,
  tools,
}: ProjectType) => {
  return (
    <div className='card card-compact shadow-xl bg-neutral-300 dark:bg-zinc-700'>
      <figure>
        <Image src={previewImage} width={300} height={200} alt='Preview Image' className='w-full' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-start'>{projectName}</h2>
        <p>{description}</p>
        <div className='flex flex-wrap flex-row gap-1.5'>
          {tools?.map((tech: string, index: number) => {
            return (
              <div key={index} className='badge badge-outline'>
                {tech}
              </div>
            );
          })}
        </div>
        <div className='card-actions justify-end'>
          {liveDemoLink && (
            <button className='btn btn-sm btn-primary'>
              <Link href={liveDemoLink} target='_blank'>
                Demo
              </Link>
            </button>
          )}
          <button className='btn btn-circle btn-sm btn-neutral'>
            <Link href={githubLink} target='_blank'>
              <FiGithub />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
