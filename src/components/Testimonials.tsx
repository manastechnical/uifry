"use client";
import React from 'react';
import testimonialdata from '../../public/data.json';
import { motion } from 'framer-motion';
import AnimatedComponent from './AnimatedComponent';

const Testimonial: React.FC = () => {

  const testimonial = testimonialdata.testimonial;

  return (
    <section id='testimonial' className="relative text-black p-4 sm:flex items-center justify-center lg:block">
      <div className="container lg:mx-auto text-center">
        <motion.h3
          className="font-serif text-xl font-bold mb-2 text-rdo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TESTIMONIAL
        </motion.h3>
        <div className='flex justify-center'>
          <motion.h2
            className="text-3xl font-serif text-5xl font-black w-[50%] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {testimonial.headline}
          </motion.h2>
        </div>
      </div>
      <div className="container lg:mx-auto flex flex-col lg:flex-row items-center relative">
        <div className="w-full lg:w-1/2 relative">
          <motion.img
            src="./assets/Testimonial.png"
            alt="Testimonial"
            className="hidden lg:block w-auto h-auto max-h-none object-cover z-20 lg:z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src="./assets/HeroStar.png"
            alt="Star"
            className="hidden lg:block absolute bottom-[1rem] left-[2rem] w-auto h-auto"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>
        <div className="p-4 lg:p-0 w-full lg:w-1/2 lg:pr-[8rem]">
          <motion.h3
            className="font-serif text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {testimonial.users[0].heading}
          </motion.h3>
          <motion.p
            className="text-gray-700 mb-8 font-serif tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {testimonial.users[0].desc}
          </motion.p>
          <AnimatedComponent
            className="flex items-center mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img src={testimonial.users[0].img} alt="users" />
          </AnimatedComponent>
          <motion.h4
            className="text-lg font-bold font-serif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {testimonial.users[0].name}
          </motion.h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
