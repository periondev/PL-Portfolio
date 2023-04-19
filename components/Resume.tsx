import Link from 'next/link';
import { FiLink } from 'react-icons/fi';
export const Resume = () => {
  return (
    <div className='flex justify-center py-2'>
      <Link
        href=' '
        target='_blank'
        className='btn bg-primary rounded-lg gap-2 px-10 shadow-lg border-none'
      >
        <FiLink />
        Resume
      </Link>
    </div>
  );
};
