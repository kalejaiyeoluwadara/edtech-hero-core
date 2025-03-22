'use client'
import React from 'react';
import { motion } from 'framer-motion';

function HeroButtons() {
  return (
    <div className='flex sm:items-start items-center justify-center sm:justify-normal w-full mt-6 gap-3'>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='bg-[#FBFF48]'
      >
        Enroll Now
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='border border-[#5C5C5A] text-white'
      >
        Learn More
      </motion.button>
    </div>
  );
}

export default HeroButtons;