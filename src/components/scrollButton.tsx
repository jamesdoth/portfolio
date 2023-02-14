import React from 'react';
import { scrollToSection } from './scroll';

interface Props {
  id: string;
  section: string;
  label: string;
}

const ScrollButton: React.FC<Props> = ({ id, section, label }) => {
  return (
    <button
      className='border-2 border-red-600 bg-blue-500 text-white px-4 py-2 rounded w-48 mx-auto'
      onClick={() => {
        scrollToSection(section);
      }}
    >
      {label}
    </button>
  );
};

export default ScrollButton;
