"use client";
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedComponent from './AnimatedComponent';

const GetStarted: React.FC = () => {
    return (
        <section id='gs' className="bg-white py-20 font-serif relative overflow-hidden">
            <motion.img
                src="./assets/gsShade.png"
                alt="shade"
                className='hidden lg:block absolute top-[-2rem] left-0 z-10'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            />
            
            {/* Large screens (lg and above) */}
            <div className='hidden lg:flex justify-center items-center relative lg:px-32'>
                <motion.img
                    src="./assets/GetStarted.png"
                    alt="App Screenshots"
                    className="max-w-full h-auto z-20"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                />
                <AnimatedComponent
                    className="absolute container lg:mx-auto text-left top-[8rem] left-[12rem] z-30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-white text-4xl font-bold mb-4">Ready To Get Started?</h2>
                    <p className="text-gray-400 mb-8 w-[50%]">
                        Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.
                    </p>
                    <a href="https://www.apple.com/app-store/" className="inline-block bg-white text-black px-8 py-3 rounded-md font-semibold">
                        <span className='flex flex-row items-center gap-[1rem]'>
                            Download App <img src="./assets/apple-icon.png" alt="apple" />
                        </span>
                    </a>
                </AnimatedComponent>
            </div>
            
            {/* Screens below large (lg) */}
            <div className='lg:hidden bg-black h-[400px] flex justify-center items-center relative'>
                <AnimatedComponent
                    className="container lg:mx-auto mt-[6rem] text-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-white text-4xl font-bold mb-4">Ready To Get Started?</h2>
                    <p className="text-gray-400 mb-8">
                        Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.
                    </p>
                    <a href="https://www.apple.com/app-store/" className="inline-block bg-white text-black px-8 py-3 rounded-md font-semibold">
                        <span className='cursor flex flex-row items-center gap-[1rem]'>
                            Download App <img src="./assets/apple-icon.png" alt="apple" />
                        </span>
                    </a>
                </AnimatedComponent>
            </div>
        </section>
    );
};

export default GetStarted;
