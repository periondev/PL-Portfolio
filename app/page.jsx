import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { name, intro, about, skills } from 'lib/info';
export default function Home() {
  return (
    <div>
      <section>
        <div className='px-10 mb-10'>
          <h2 className='text-3xl py-2 text-gray-color font-medium'>{name}</h2>
          <h4 className='text-xl py-2'>{intro()}</h4>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-lemon-color rounded-full h-80 w-80'>
          {/* Avatar */}
        </div>
      </section>
      <section>
        <div className='shadow-lg p-10 rounded-xl my-10'>
          <h3 className='text-2xl py-2'>About</h3>
          <p className='py-2'>{about()}</p>
        </div>
      </section>
      <section>
        <div className='shadow-lg p-10 rounded-xl my-10'>
          <h3 className='text-2xl py-2'>Skills</h3>
          <p>{skills()}</p>
        </div>
        {/* Cards */}
      </section>
      <Contact />
      <Footer />
    </div>
  );
}
