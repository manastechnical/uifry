"use client";
import React from 'react';
import Navbar from './Navbar';
import herodata from '../../../public/data.json';
import { motion } from 'framer-motion';
import AnimatedComponent from '../AnimatedComponent';


const Hero: React.FC = () => {
  const hero = herodata.hero;
  return (
    <>
      <Navbar />
      <section id="home" className="font-serif mt-[4rem] lg:mt-0 relative text-black p-4 sm:flex items-center justify-center">
        <div className="container flex flex-col md:flex-row items-center relative">
          <div className="lg:w-1/2 flex flex-col z-10 lg:pl-32">
            <AnimatedComponent
              className="flex flex-col justify-center items-start text-left relative"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
              <h1 className="font-serif text-5xl font-extrabold z-[10]">{hero.headline}</h1>
              <img
                src="./assets/HeroShade.png"
                alt="Color Shade"
                className="hidden lg:block absolute top-[-5.5rem] left-[-2rem] w-[88%] h-auto"
              />
              <p className="mt-6 text-md font-serif text-gray-600">{hero.subheadline}</p>
              <div className="mt-8 flex">
                <AnimatedComponent
                  className="cursor-pointer bg-black text-white px-4 py-2 rounded-md mr-4 flex items-center gap-2 hover:bg-gray-800 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Get Started <img src="./assets/arrow.png" alt="arrow" />
                </AnimatedComponent>
                <AnimatedComponent
                  className="cursor-pointer bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-200 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src="./assets/play.png" alt="play" />Watch Video
                </AnimatedComponent>
              </div>
            </AnimatedComponent>
            <div className="p-4">
              <img src="./assets/HeroStar.png" alt="Star" className="hidden lg:block absolute top-[21rem] left-[15rem] w-auto h-auto" />
              <img src="./assets/HeroLeft.png" alt="Left Part Image" className='hidden lg:block' />
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2 relative flex justify-center items-center lg:overflow-hidden">
            <motion.img
              src="./assets/HeroRight.png"
              alt="Right Part Image"
              className="absolute lg:relative w-auto h-[730px] max-h-none object-cover z-20 lg:z-10"
              style={{ top: '-50px', right: '-50px' }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
