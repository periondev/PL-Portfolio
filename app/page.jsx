import { Contact } from '../components/Contact';
import { Resume } from '../components/Resume';
import { name, intro, about } from 'lib/info';
import { SkillArea } from 'components/SkillArea';

export default function Home() {
  return (
    <div className='container'>
      <h1>{name}</h1>
      <p className='sub-title'>{intro()}</p>
      <div className='relative mx-auto my-10 bg-gradient-to-b from-lemon-color rounded-full h-40 w-40'>
        {/* Avatar */}
      </div>
      <Resume />
      <div className='divider py-8'></div>
      <div>
        <h2>About</h2>
        <p className='py-2'>{about()}</p>
      </div>
      <div>
        <h2>Skills</h2>
        <SkillArea />
      </div>
      <div className='divider py-8'></div>
      <Contact />
    </div>
  );
}
