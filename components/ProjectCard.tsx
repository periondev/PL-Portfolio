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
    <div className='mt-5 mb-8'>
      <div className='card card-compact lg:card-side shadow-xl bg-neutral-300 dark:bg-zinc-700'>
        <figure>
          <Image src={previewImage} width={300} height={200} alt='Preview Image' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{projectName}</h2>
          <p>{description}</p>
          <div className='flex flex-row'>
            {tools?.map((tech: string, index: number) => {
              return (
                <div key={index} className='badge badge-outline mr-1'>
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
    </div>
  );
};
