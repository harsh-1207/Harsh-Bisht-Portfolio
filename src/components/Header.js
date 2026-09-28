import React from 'react';

const Header = () => {
  return <header className='py-6 lg:py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center gap-4'>
        <a href="#home" className='uppercase text-accent text-[28px] lg:text-[38px] leading-none font-medium tracking-tight'>
          HARSH <span className='text-white'>BISHT</span>
        </a>
        <div className='flex items-center gap-3'>
          <a href={`${process.env.PUBLIC_URL}/Harsh_Bisht_CV.pdf`} target="_blank" rel="noreferrer" className='hidden sm:inline-flex border border-white/20 rounded-full h-[48px] px-6 text-sm items-center hover:border-accent transition-colors'>Resume</a>
          <a href="#contact" className='btn btn-sm inline-flex items-center'>Work with me</a>
        </div>
      </div>
    </div>
  </header>;
};

export default Header;
