import Link from 'next/link';
const playlist = 'https://my-youtube-collection.vercel.app/';
export const Playlist = () => {
  return (
    <div className='flex justify-center p-6 my-3 rounded-lg border-8'>
      <Link href={playlist} target='_blank' title='My Youtube Collection'>
        <p className='link link-hover text-xl'>My Youtube Collection🎬🎵</p>
      </Link>
    </div>
  );
};
