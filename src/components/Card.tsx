import { motion } from 'framer-motion';
import { useRef } from 'react';

interface CardProps {
  title: string;
  content: React.ReactNode;
  onClick: () => void;
}

function Card({ title, content, onClick }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref}>
      <motion.div
        onClick={onClick}
        className='bg-slate-500 flex flex-col justify-center items-center cursor-pointer w-36 h-36 m-6'
      >
        <motion.h2 className='text-white pointer-events-none'>
          {title}
        </motion.h2>
      </motion.div>
    </div>
  );
}

export default Card;
