import React, { useState } from 'react';
import logo from '../assets/images/nepal-govt2.png';
import flag from '../assets/images/flag.png';
import head from '../assets/images/header-img.png';

function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className='header naxatw-min-w-fit naxatw-bg-gradient-to-b naxatw-from-blue-500 naxatw-to-blue-700 naxatw-mx-10 naxatw-rounded-b-xl'>
        <nav className='naxatw-flex naxatw-items-center naxatw-justify-between naxatw-flex-wrap naxatw-py-4 md:naxatw-py-0'>
          <div className='logo naxatw-pl-4 naxatw-pt-4 md:naxatw-pl-16 naxatw-flex-shrink-0'>
            <img src={logo} alt='logo' className='max-sm:naxatw-w-52 sm:naxatw-w-60 md:naxatw-w-64 lg:naxatw-w-96' />
          </div>
          <div className='naxatw-flex md:naxatw-hidden naxatw-pr-4'>
            <button onClick={toggleSidebar} className='naxatw-text-white'>
              ☰
            </button>
          </div>
          <div className={`links naxatw-fixed naxatw-top-0 naxatw-right-0 naxatw-bg-blue-700 naxatw-w-2/3 naxatw-h-full naxatw-z-50 naxatw-transform naxatw-transition-transform ${isSidebarOpen ? 'naxatw-translate-x-0' : 'naxatw-translate-x-full'} md:naxatw-static md:naxatw-bg-transparent md:naxatw-w-auto md:naxatw-h-auto md:naxatw-transform-none naxatw-flex naxatw-flex-col md:naxatw-flex-row naxatw-items-center`}>
            <ul className='naxatw-flex naxatw-flex-col md:naxatw-flex-row naxatw-items-center naxatw-py-5 naxatw-text-lg naxatw-font-bold naxatw-gap-4 naxatw-text-white naxatw-pr-4 md:naxatw-pr-20'>
              <li><a href='#'>Data</a></li>
              <li><a href='#'>About</a></li>
              <li><img src={flag} alt="Nepal Flag" className='naxatw-w-7 naxatw-h-7' /></li>
              <li><button className='log-in naxatw-w-20 naxatw-h-10 naxatw-border naxatw-border-white naxatw-rounded-lg'>Log In</button></li>
            </ul>
            <button onClick={toggleSidebar} className='naxatw-text-white naxatw-absolute naxatw-top-4 naxatw-right-4 md:naxatw-hidden'>✕</button>
          </div>
        </nav>

        <div className='naxatw-flex naxatw-flex-col-reverse md:naxatw-flex-row naxatw-items-center naxatw-pl-4 lg:naxatw-pl-20 naxatw-space-y-4 md:naxatw-space-y-0'>
          <div className="naxatw-text-white naxatw-w-full md:naxatw-w-3/5">
            <h1 className='max-sm:naxatw-text-xl sm:naxatw-text-2xl sm:naxatw-leading-7  lg:naxatw-leading-extra-loose max-sm:naxatw-leading-9 md:naxatw-text-4xl md:naxatw-leading-9  lg:naxatw-text-5xl naxatw-font-bold'>Interactive digital portal of projects in Karnali Province of Nepal</h1>
            <h5 className='naxatw-pt-4 naxatw-leading-6 naxatw-font-normal md:naxatw-pt-5 naxatw-text-lg md:naxatw-text-xl max-sm:naxatw-text-'>A digital portal to identify the enabling factors of the development supported by development partners in Karnali Province of Nepal.</h5>
          </div>
          <div className='naxatw-flex naxatw-justify-center naxatw-w-full md:naxatw-w-auto naxatw-px-4 naxatw-pb-11 max-sm:naxatw-pb-3  naxatw-pt-3'>
            <img src={head} alt="" className='naxatw-w-full md:naxatw-w-auto sm:naxatw-max-w-sm max-sm:naxatw-max-w-sm  md:naxatw-max-w-md' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
