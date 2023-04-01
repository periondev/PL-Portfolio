import { FiLink } from 'react-icons/fi';
export const Resume = () => {
  return (
    <div className='flex justify-center py-2'>
      <a
        href=' '
        target='_blank'
        rel='noreferrer noopener'
        className='flex align-center items-center gap-2 px-5 py-2 border-2 rounded-lg select-none  border-zinc-500 hover:bg-zinc-200 dark:border-zinc-400 dark:hover:bg-zinc-800'
      >
        <FiLink />
        <p className='text-xl text-center'>Resume</p>
      </a>
    </div>
  );
};
