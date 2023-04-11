import { Contact } from '../components/Contact';
import { Resume } from '../components/Resume';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { name, intro, about, skills } from 'lib/info';

export default function Home() {
  return (
    <div className='container'>
      <div className='content'>
        <h1 className='py-2'>{name}</h1>
        <p className='text-xl py-2'>{intro()}</p>
      </div>
      <div className='relative mx-auto my-10 bg-gradient-to-b from-lemon-color rounded-full h-40 w-40'>
        {/* Avatar */}
      </div>
      <Resume />
      <div className='divider'></div>
      <div className='shadow-box'>
        <h2 className='text-2xl py-2'>About</h2>
        <p className='py-2'>{about()}</p>
      </div>
      <div className='divider'></div>
      <div className='shadow-box'>
        <h2 className='text-2xl py-2'>Skills</h2>
        <p className='py-2'>{skills()}</p>
      </div>
      {/* Cards */}
      <Contact />
    </div>
  );
}
