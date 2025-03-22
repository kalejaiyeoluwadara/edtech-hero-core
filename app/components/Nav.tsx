'use client'
import React, { useState } from 'react';
import { Icons } from './ui/icons';

function Nav() {
  const [activeLink, setActiveLink] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Courses', 'Pricing'];

  const handleNavClick = (navItem: React.SetStateAction<string>) => {
    setActiveLink(navItem);
    setMobileMenuOpen(false);
  };

  return (
    <nav className='py-6 md:py-8 flex justify-between items-center relative'>
      <div>
        <Icons.Logo />
      </div>

      {/* Desktop Navigation */}
      <div className='hidden md:flex gap-4'>
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => handleNavClick(item)}
            className={`transition-colors cursor-pointer font-medium font-helvetica ${activeLink === item
              ? 'text-white font-medium'
              : 'text-gray-400 hover:text-gray-200'
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className='md:hidden relative z-[100]'>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className='text-white'
        >
          {mobileMenuOpen ? <Icons.Nav /> : <Icons.Close />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='absolute top-full right-0 left-0 mt-2 mx-4 p-4 rounded-lg backdrop-blur-md bg-black/30 border border-gray-700 shadow-lg z-50'>
          <div className='flex flex-col gap-4 items-center'>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`transition-colors w-full py-2 text-center font-medium ${activeLink === item
                  ? 'text-white font-semibold'
                  : 'text-gray-400 hover:text-gray-200'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;