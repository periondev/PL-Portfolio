import { BsFillMoonStarsFill, BsTwitter, BsFacebook, BsGithub } from 'react-icons/bs';
import { name, about, bio } from 'lib/info';
import Navbar from '../components/Navbar';
export default function Home() {
  return (
    <div>
      <section>
        <div className='p-2'>
          <h2 className='text-5xl py-2 text-gray-color font-medium'>{name}</h2>
          <h4 className='text-2xl py-2'>{about()}</h4>
        </div>
        <div className='text-5xl flex justify-center gap-14 py-3 text-gray-400'>
          <BsTwitter />
          <BsFacebook />
          <BsGithub />
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-lemon-color rounded-full h-80 w-80'>
          {/* Avatar */}
        </div>
      </section>
      <section>
        <div>
          <h3 className='text-3xl py-1' id='skills'>
            Skills
          </h3>
          <p>React, Next.js, Node.js....</p>
        </div>
        {/* Cards */}
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
          <h3 className='text-lg'>
            <p className='py-2'>{bio()}</p>
          </h3>
        </div>
      </section>

      <footer className='flex justify-center'>
        <a href='https://github.com/PeriYumYum' target='_blank' rel='noopener noreferrer'>
          Designed and Built by Peri👒 © 2023
        </a>
      </footer>
    </div>
  );
}
