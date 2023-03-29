import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface CardProps {
  title: string;
  content: React.ReactNode;
  onClick: () => void;
  expanded: boolean;
}

function Card({ title, content, onClick, expanded }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      expanded &&
      ref.current &&
      !ref.current.contains(event.target as Node)
    ) {
      onClick();
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
        onClick={onClick}
        className={`bg-slate-500 flex flex-col justify-center items-center ${
          expanded ? 'w-96 transform z-50' : 'cursor-pointer w-36 h-36 m-6'
        }`}
      >
        {!expanded && (
          <motion.h2 className='text-white pointer-events-none'>
            {title}
          </motion.h2>
        )}
        {expanded && (
          <motion.div onClick={(e) => e.stopPropagation()} className='w-96'>
            {content}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Card;
