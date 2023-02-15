import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Game from '../content/TicTacToe/Game';

function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleCardClick = () => {
    if (isOpen) {
      return;
    }
    setIsOpen(true);
  };

  const handleExpandedCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <div className='bg-slate-500' ref={ref}>
      <motion.div
        onClick={handleCardClick}
        className='flex flex-col justify-center items-center p-4'
      >
        <motion.h2 className='text-white'>TicTacToe</motion.h2>
        {isOpen && (
          <motion.div className='w-96' onClick={handleExpandedCardClick}>
            <Game />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Card;
