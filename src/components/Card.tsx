import { motion } from 'framer-motion';
import { useState } from 'react';

function Card() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(!isOpen);
  };

  const handleExpandedCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className='bg-slate-500'>
      <motion.div
        onClick={handleCardClick}
        className='flex flex-col justify-center items-center p-4'
      >
        <motion.h2 className='text-white'>Hello World</motion.h2>
        {isOpen && (
          <motion.div className='w-96' onClick={handleExpandedCardClick}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              repudiandae voluptas commodi hic nisi neque inventore natus.
              Saepe, incidunt tempora?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi, temporibus.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Card;
