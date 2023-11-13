import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
import { resumeLink } from '@lib/info';
export const Resume = () => {
  return (
    <div className='flex justify-center py-2'>
      <Link
        href={resumeLink}
        target='_blank'
        className='btn rounded-lg gap-2 px-5 py-2 w-40 shadow-lg border-none text-base text-white bg-teal-700 hover:bg-teal-800'
      >
        <FiExternalLink />
        Resume
      </Link>
    </div>
  );
};
