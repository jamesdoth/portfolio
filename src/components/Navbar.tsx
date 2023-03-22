import { useState, useEffect, useRef } from 'react';

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <a
      href={href}
      className='text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors block'
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {label}
    </a>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className='fixed w-full bg-gray-800 z-10'>
      <nav
        className='container mx-auto px-4 py-2 flex items-center justify-between'
        ref={navRef}
      >
        <div className='md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='block h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
        <div
          className={`hidden md:flex items-center space-x-4 justify-center w-full ${
            isOpen ? 'hidden' : ''
          }`}
        >
          <NavLink href='#first-section' label='Home' />
          <NavLink href='#second-section' label='About Me' />
          <NavLink href='#third-section' label='Content' />
          <NavLink href='#fourth-section' label='Contact' />
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden absolute left-0 top-full mt-2 w-full bg-gray-800 space-y-2 p-4`}
        >
          <NavLink href='#first-section' label='Home' />
          <NavLink href='#second-section' label='About Me' />
          <NavLink href='#third-section' label='Content' />
          <NavLink href='#fourth-section' label='Contact' />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
