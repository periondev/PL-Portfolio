import Link from 'next/link';
import { FiLink } from 'react-icons/fi';
export const Resume = () => {
  return (
    <div className='flex justify-center py-2'>
      <Link
        href=' '
        target='_blank'
        className='btn rounded-lg gap-3 px-10 shadow-lg border-none text-white bg-teal-700 hover:bg-teal-800 '
      >
        <FiLink />
        Resume
      </Link>
    </div>
  );
};

{
  /* <div className='flex justify-center py-2'>
<Link
  href=' '
  target='_blank'
  className='btn rounded-lg gap-2 px-10 shadow-lg border-none bg-slate-600 hover:bg-slate-700 dark:bg-orange-800 dark:hover:bg-orange-700'
>
  <FiLink size={20} />
  Resume
</Link>
</div> */
}
