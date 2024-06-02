"use client";
import React from 'react';
import features from '../../public/data.json';
import advantage from '../../public/data.json';
import { motion } from 'framer-motion';
import AnimatedComponent from './AnimatedComponent';

const Features: React.FC = () => {
  const featureList = features.featureList;
  const advList = advantage.adv;
  const ref = React.useRef(null);

  return (
    <>
      <section id='features' className="relative text-black p-4 sm:flex items-center justify-center lg:block">
        <motion.img
          ref={ref}
          src="./assets/FeatureShade.png"
          alt="shade"
          className='hidden md:block absolute top-[4rem] right-[0rem]'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <div className="container lg:mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 relative flex justify-center items-center lg:overflow-hidden z-0">
            <motion.img
              ref={ref}
              src="./assets/HeroStar.png"
              alt="Star"
              className="hidden lg:block absolute left-[2rem] top-[0rem] w-auto h-auto"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.img
              ref={ref}
              src="./assets/Feature1.png"
              alt="Feature Image"
              className="hidden lg:block absolute lg:relative w-auto h-[730px] max-h-none object-cover z-20 lg:z-10"
              style={{ top: '-50px', right: '-50px' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="lg:w-1/2 p-4 h-[550px]">
            <motion.h3
              ref={ref}
              className="font-serif text-lg sm:text-xl font-bold mb-2 text-rdo"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              FEATURES
            </motion.h3>
            <motion.h2
              ref={ref}
              className="text-xl sm:text-3xl font-serif text-5xl font-black mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Uifry Premium
            </motion.h2>
            {featureList.map((feature, index) => (
              <AnimatedComponent
                key={index}
                className="flex flex-col mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 * index }}
              >
                <div className='flex items-center'>
                  <img className='w-[24px] h-[24px] mx-1 lg:mt-1' src={feature.img} alt="feature icon" />
                  <h3 className="text-lg sm:text-2xl font-black font-serif">{feature.title}</h3>
                </div>
                <p className="text-md sm:text-lg text-gray-700 font-serif">{feature.description}</p>
              </AnimatedComponent>
            ))}
          </div>
        </div>
      </section>

      {advList.map((adv, index) => (
        <section key={`adv-${index}`} id={`adv-${index}`} className="relative text-black p-4 sm:flex items-center justify-center lg:block">
          <div className="container lg:mx-auto flex flex-col lg:flex-row items-center">
            {index % 2 === 0 ? (
              // For even index, render image on the right
              <>
                <div className="lg:w-1/2 relative flex justify-center items-center lg:overflow-hidden z-0">
                  <motion.img
                    ref={ref}
                    src={`./assets/Feature${index + 2}.png`}
                    alt="Feature Image"
                    className="hidden lg:block absolute lg:relative w-auto h-[730px] max-h-none object-cover z-20 lg:z-10"
                    style={{ top: '-50px', right: '-50px' }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <div className="p-4 lg:p-0 lg:w-1/2 lg:pl-32 h-[500px]">
                  <motion.h3
                    ref={ref}
                    className="font-serif text-xl font-bold mb-2 text-rdo"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    ADVANTAGES
                  </motion.h3>
                  <motion.h2
                    ref={ref}
                    className="text-3xl font-serif text-5xl font-black mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {adv.heading}
                  </motion.h2>
                  <AnimatedComponent
                    className="flex flex-col mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className='flex flex-row items-center'>
                      <img className='w-[48px] h-[48px] mr-2' src={adv.icon} alt={adv.subheading} />
                      <h3 className="text-3xl font-black font-serif">{adv.subheading}</h3>
                    </div>
                    <div className='mt-4'>
                      <p className="text-lg text-gray-700 font-serif">{adv.desc}</p>
                    </div>
                  </AnimatedComponent>
                </div>
              </>
            ) : (
              // For odd index, render image on the left
              <>
                <div className="p-4 lg:p-0 lg:w-1/2 lg:pl-32 h-[500px]">
                  <motion.h3
                    ref={ref}
                    className="font-serif text-xl font-bold mb-2 text-rdo"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    ADVANTAGES
                  </motion.h3>
                  <motion.h2
                    ref={ref}
                    className="text-3xl font-serif text-5xl font-black mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {adv.heading}
                  </motion.h2>
                  <AnimatedComponent
                    className="flex flex-col mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className='flex flex-row items-center'>
                      <img className='w-[48px] h-[48px] mr-2' src={adv.icon} alt={adv.subheading} />
                      <h3 className="text-3xl font-black font-serif">{adv.subheading}</h3>
                    </div>
                    <div className='mt-4'>
                      <p className="text-lg text-gray-700 font-serif">{adv.desc}</p>
                    </div>
                  </AnimatedComponent>
                </div>
                <div className="lg:w-1/2 relative flex justify-center items-center lg:overflow-hidden z-0">
                  <motion.img
                    ref={ref}
                    src={`./assets/Feature${index + 2}.png`}
                    alt="Feature Image"
                    className="hidden lg:block absolute lg:relative w-auto h-[730px] max-h-none object-cover z-20 lg:z-10"
                    style={{ top: '-50px', right: '-50px' }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </>
            )}
          </div>
        </section>
      ))}
    </>
  );
};

export default Features;
