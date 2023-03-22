import React, { useState } from 'react';

interface NavLinkProps {
  href: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return <header className='fixed w-full bg-gray-800'></header>;
};

export default Navbar;
