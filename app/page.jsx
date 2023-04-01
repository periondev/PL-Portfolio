import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Resume } from '../components/Resume';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { name, intro, about, skills } from 'lib/info';
export default function Home() {
  return (
    <div>
      <section>
        <div className='px-10 mb-10'>
          <h1 className='pb-2 text-gray-color font-medium'>{name}</h1>
          <p className='text-xl py-2'>{intro()}</p>
        </div>
        <div className='relative mx-auto my-10 bg-gradient-to-b from-lemon-color rounded-full h-40 w-40'>
          {/* Avatar */}
        </div>
      </section>
      <Resume />
      <section>
        <div className='shadow-lg p-10 rounded-xl my-10'>
          <h2 className='text-2xl py-2'>About</h2>
          <p className='py-2'>{about()}</p>
        </div>
      </section>
      <section>
        <div className='shadow-lg p-10 rounded-xl my-10'>
          <h2 className='text-2xl py-2'>Skills</h2>
          <p>{skills()}</p>
        </div>
        {/* Cards */}
      </section>
      <Contact />
      <Footer />
    </div>
  );
}
