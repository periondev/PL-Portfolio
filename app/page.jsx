import Image from 'next/image';
import { name, intro } from 'lib/info';
import { Resume } from '../components/Resume';
import { About } from '@components/About';
import { SkillArea } from 'components/SkillArea';
import { Playlist } from '@components/Playlist';

export default function Home() {
  return (
    <div className='container'>
      <h1>{name}</h1>
      <div className='sub-title text-center'>{intro}</div>
      <div className='avatar'>
        <div className='w-40 rounded-full relative mx-auto my-10 bg-gray-300'>
          <Image
            src='/avatar.png'
            fill={true}
            sizes='100'
            alt='avatar'
            priority={true}
          />
        </div>
      </div>
      <Resume />
      <hr className='hr-divider' />
      <div>
        <h2>About</h2>
        <About />
      </div>
      <hr className='hr-divider' />
      <div>
        <h2>Skills</h2>
        <SkillArea />
      </div>
      <hr className='hr-divider' />
      <h2>Currently listening to</h2>
      <Playlist />
    </div>
  );
}
