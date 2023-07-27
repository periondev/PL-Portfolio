import Image from 'next/image';
import { Resume } from '../components/Resume';
import { name, intro, about } from 'lib/info';
import { SkillArea } from 'components/SkillArea';
import { Playlist } from '@components/Playlist';

export default function Home() {
  return (
    <div className='container'>
      <h1>{name}</h1>
      <p className='sub-title font-bold text-center'>{intro}</p>
      <div className='avatar flex justify-center'>
        <div className='w-40 rounded-full relative mx-auto my-10'>
          <Image src='/avatar.webp' fill={true} sizes='100' alt='avatar' />
        </div>
      </div>
      <Resume />
      <hr className='hr-divider' />
      <div>
        <h2 className='main-title'>About</h2>
        <p className='py-2 px-8'>{about}</p>
      </div>
      <hr className='hr-divider' />
      <div>
        <h2 className='main-title'>Skills</h2>
        <SkillArea />
      </div>
      <hr className='hr-divider' />
      <h2 className='main-title'>Currently listening to</h2>
      <Playlist />
    </div>
  );
}
