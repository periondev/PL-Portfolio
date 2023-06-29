import Link from 'next/link';
import { PostType } from '@lib/types';

export const Post = ({ postTitle, description, postLink, tools, postDate }: PostType) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    } else {
      return text;
    }
  };
  const truncatedText = truncateText(description, 140);

  return (
    <div className='card card-compact shadow-lg border-4 border-gray-300 dark:border-zinc-600'>
      <div className='card-body'>
        <Link href={postLink} target='_blank' title='See full post'>
          <h2 className='card-title text-start p-0 hover:underline'>{postTitle}</h2>
        </Link>
        <p>{truncatedText}</p>
        <div className='flex flex-wrap flex-row gap-1.5'>
          {tools.map((tech: string, index: number) => {
            return (
              <div key={index} className='badge badge-outline'>
                {tech}
              </div>
            );
          })}
        </div>
        <p>{postDate}</p>
      </div>
    </div>
  );
};
