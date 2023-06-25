import Link from 'next/link';
import { FiLink } from 'react-icons/fi';
import { resumeLink } from '@lib/info';
export const Resume = () => {
  return (
    <div className='flex justify-center py-2'>
      <Link
        href={resumeLink}
        target='_blank'
        className='btn rounded-lg gap-2 px-10 w-40 shadow-lg border-none text-white bg-teal-700 hover:bg-teal-800'
      >
        <FiLink />
        Resume
      </Link>
    </div>
  );
};
