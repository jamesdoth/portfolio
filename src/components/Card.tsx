import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface CardProps {
  title: string;
  content: React.ReactNode;
}

function Card({ title, content }: CardProps) {
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
    <div ref={ref}>
      <motion.div
        onClick={handleCardClick}
        className={`bg-slate-500 flex flex-col justify-center items-center ${
          isOpen ? 'w-96' : 'cursor-pointer w-48 h-48 m-6'
        }`}
      >
        {!isOpen && (
          /* The h2 element is intercepting the click event and 
        preventing it from bubbling up to the motion.div element that 
        has the handleCardClick click handler. The pointer-events-none 
        disables pointer events for that element. This should allow the 
        click event to propagate to the parent motion.div element. */
          <motion.h2 className='text-white pointer-events-none'>
            {title}
          </motion.h2>
        )}
        {isOpen && (
          <motion.div onClick={handleExpandedCardClick} className='w-96'>
            {content}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Card;
