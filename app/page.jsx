import Image from 'next/image';
import { Resume } from '../components/Resume';
import { name, intro, about } from 'lib/info';
import { SkillArea } from 'components/SkillArea';
import { Playlist } from '@components/Playlist';

export default function Home() {
  return (
    <div className='container'>
      <h1>{name}</h1>
      <p className='sub-title'>{intro()}</p>
      <div className='avatar flex justify-center'>
        <div className='w-40 rounded-full relative mx-auto my-10'>
          <Image src='/avatar.webp' fill={true} sizes='100' alt='avatar' />
        </div>
      </div>
      <Resume />
      <div className='divider py-8'></div>
      <div>
        <h2>About</h2>
        <p className='py-2 px-8'>{about()}</p>
      </div>
      <div className='divider py-8'></div>
      <div>
        <h2>Skills</h2>
        <SkillArea />
      </div>
      <div className='divider py-8'></div>
      <h2>Currently listening to</h2>
      <Playlist />
    </div>
  );
}
