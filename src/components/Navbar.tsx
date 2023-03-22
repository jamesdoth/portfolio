import React, { useState } from 'react';

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <a
      href={href}
      className='text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors'
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

  return <header className='fixed w-full bg-gray-800'></header>;
};

export default Navbar;
