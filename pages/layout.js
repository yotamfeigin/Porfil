import Intro from '../components/Common/Intro';
import Nav from '../components/Common/Nav/Nav';
import { FaBars, FaMousePointer } from 'react-icons/fa';
import { SlOptionsVertical } from 'react-icons/sl';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intro, setIntro] = useState(false);
  const [showScrollbar, setShowScrollbar] = useState(false);

  // Initial load delay for the scrollbar
  useEffect(() => {
    const initialTimer = setTimeout(() => setShowScrollbar(true), 700);
    return () => clearTimeout(initialTimer);
  }, []);

  // Manage scrollbar visibility when intro is toggled
  useEffect(() => {
    if (intro) {
      setShowScrollbar(false);
      const timer = setTimeout(() => setShowScrollbar(true), 700);
      return () => clearTimeout(timer); // Cleanup on unmount or intro change
    }
    else {
      setShowScrollbar(false);
    }
  }, [intro]);

  return (
    <div className={`h-screen lg:p-[0.8rem] flex flex-col select-none font-circular`}>
      <div className='lg:hidden'>
        <div className='bg-DeepNightBlack text-LightGray w-full h-10 flex items-center justify-between px-2 lg:hidden relative'>
          <div className='icon flex items-center gap-x-2' onClick={() => setIntro(!intro)}>
            <span className='icon border-2 text-Green border-Green p-1 text-sm rounded-lg'>
              <SlOptionsVertical />
            </span>
            <div className='text-Snow absolute -right-1 -bottom-1'>
              <FaMousePointer />
            </div>
          </div>
          <div className='icon flex items-center gap-x-2' onClick={() => setIsOpen(!isOpen)}>
            <span className='icon border-2 text-Green border-Green p-1 text-sm rounded-lg'>
              <FaBars />
            </span>
          </div>
        </div>
      </div>

      <div className='flex relative h-full justify-between gap-x-3'>
        {/* left most side */}
        <div
          className={`w-64 h-screen left-0 lg:rounded-xl -top-10 lg:top-0 lg:left-0 lg:h-full bg-DeepNightBlack shadow-2xl z-50 lg:flex flex-col lg:relative ${showScrollbar ? 'overflow-y-auto' : 'overflow-y-hidden transform -translate-x-0.5 '
            } ${intro ? 'flex absolute' : 'hidden'}`}
        >
          <Intro isOpen={intro} setIsOpen={setIntro} />
        </div>

        {/* overlay */}
        {intro && (
          <div
            onClick={() => setIntro(false)}
            className='fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-[2px] z-40'
          ></div>
        )}

        {/* middle of screen */}
        <div className='w-full h-auto lg:w-9/12 shadow-2xl bg-DeepNightBlack relative overflow-auto overflow-x-hidden no-scrollbar'>
          {children}
        </div>

        {/* right side */}
        <div className={`hidden lg:block absolute lg:w-20 lg:relative bg-DeepNightBlack shadow-2xl rounded-xl overflow-hidden`}>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className='bg-MidNightBlack text-Green hidden lg:flex items-center h-16 justify-center text-2xl'
          >
            <span className='icon border-2 border-Green p-2 rounded-xl'>
              <FaBars />
            </span>
          </div>
          <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 flex items-center justify-center text-center text-xl text-gray-600 font-extrabold tracking-widest'>
            NavBar
          </span>
        </div>

        {<Nav isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}
