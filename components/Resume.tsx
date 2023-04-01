import Link from 'next/link';
import { FiLink } from 'react-icons/fi';
export const Resume = () => {
  return (
    <div className='flex justify-center py-2'>
      <Link
        href=' '
        target='_blank'
        rel='noreferrer noopener'
        className='flex align-center items-center gap-2 px-5 py-2 border-2 border-gray-500 rounded-lg select-none  dark:border-gray-400 hover:bg-white dark:hover:bg-zinc-800'
      >
        <FiLink />
        <p className='text-xl text-center'>Resume</p>
      </Link>
    </div>
  );
};
