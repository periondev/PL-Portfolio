import Link from 'next/link';
import Image from 'next/image';
import { ProjectType } from '@lib/types';

export const ProjectCard = ({
  projectName,
  previewImage,
  description,
  githubLink,
  liveDemoLink,
  tools,
}: ProjectType) => {
  return (
    <div className='my-5'>
      <div className='card lg:card-side bg-base-100 shadow-xl'>
        <figure>
          <Image src={previewImage} width={600} height={400} alt='Preview Image' />
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
              <button className='btn btn-primary'>
                <Link href={liveDemoLink} target='_blank'>
                  Demo
                </Link>
              </button>
            )}
            <button className='btn btn-primary'>
              <Link href={githubLink} target='_blank'>
                GitHub
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
