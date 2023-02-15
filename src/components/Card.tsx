import { motion } from 'framer-motion';
import { useState } from 'react';

function Card() {
  return (
    <div className='bg-slate-500'>
      <motion.div className='flex flex-col justify-center items-center'>
        <motion.h2 className='text-white'>Hello World</motion.h2>
        <motion.div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            repudiandae voluptas commodi hic nisi neque inventore natus. Saepe,
            incidunt tempora?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
            temporibus.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Card;
