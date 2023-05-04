import Link from 'next/link';
import { PostType } from '@lib/types';

export const Post = ({ postTitle, description, postLink, tools }: PostType) => {
  return (
    <div className='card shadow-xl duration-300 hover:shadow-none px-8 py-10'>
      <h2 className='card-title text-start p-0'>{postTitle}</h2>
      <p>{description}</p>
      <div className='flex flex-wrap flex-row gap-1.5'>
        {tools.map((tech: string, index: number) => {
          return (
            <div key={index} className='badge badge-outline'>
              {tech}
            </div>
          );
        })}
      </div>
      <Link href={postLink} target='_blank' title='post'></Link>
    </div>
  );
};
