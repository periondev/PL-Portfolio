import Link from 'next/link';
const playlist = 'https://my-youtube-collection.vercel.app/';
export const Playlist = () => {
  return (
    <div className='card items-center p-5 my-3 border-4 border-zinc-300 dark:border-zinc-600'>
      <Link href={playlist} target='_blank' title='My Youtube Collection'>
        <h3 className='link link-hover text-xl'>My Youtube Collection🎬🎵</h3>
      </Link>
    </div>
  );
};
