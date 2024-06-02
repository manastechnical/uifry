"use client";
import React from 'react';
import AnimatedComponent from './AnimatedComponent'; // Adjust the import path accordingly

const Footer: React.FC = () => {
    return (
        <footer id='contact' className="font-serif relative text-black p-4">
            <div className="container mx-auto gap-5 md:gap-2 lg:px-32 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-between">
                {/* First Column */}
                <AnimatedComponent delay={0.1}>
                    <div className="mb-8 lg:mb-0">
                        <div className='flex items-center'>
                            <img src="./assets/Logo.png" alt="Logo" className="w-15 mb-4" />
                            <h2 className="font-serif text-2xl font-bold mb-4">uifry</h2>
                        </div>
                        <p className="text-gray-700 mb-2 flex items-center">
                            <img src="./assets/email.png" alt="phone" /> <span className='hover:text-gray-500 transition duration-100'>Help@Frybix.Com</span>
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <img src="./assets/phone.png" alt="phone" /> <span className='hover:text-gray-500 transition duration-100'>+1234 456 678 89</span>
                        </p>
                    </div>
                </AnimatedComponent>

                {/* Second Column */}
                <AnimatedComponent delay={0.2}>
                    <div className="mb-8 lg:mb-0">
                        <h3 className="font-serif text-xl font-bold mb-4">Links</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-700 hover:text-gray-500 transition duration-100">Home</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-700 hover:text-gray-500 transition duration-100">About Us</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-700 hover:text-gray-500 transition duration-100">Bookings</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-500 transition duration-100">Blog</a></li>
                        </ul>
                    </div>
                </AnimatedComponent>

                {/* Third Column */}
                <AnimatedComponent delay={0.3}>
                    <div className="mb-8 lg:mb-0">
                        <h3 className="font-serif text-xl font-bold mb-4">Legal</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-700 hover:text-gray-500 transition duration-100">Terms of Use</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-700 hover:text-gray-500 transition duration-100">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-500 transition duration-100">Cookie Policy</a></li>
                        </ul>
                    </div>
                </AnimatedComponent>

                {/* Fourth Column */}
                <AnimatedComponent delay={0.4}>
                    <div className="mb-8 lg:mb-0">
                        <h3 className="font-serif text-xl font-bold mb-4">Product</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-700 hover:text-gray-500 transition duration-100">Take Tour</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-700 hover:text-gray-500 transition duration-100">Live Chat</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-500 transition duration-100">Reviews</a></li>
                        </ul>
                    </div>
                </AnimatedComponent>

                {/* Fifth Column */}
                <AnimatedComponent delay={0.5}>
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-4">Newsletter</h3>
                        <p className="text-gray-700 mb-4">Stay Up To Date</p>
                        <div className="flex items-center">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-[50%] lg:w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
                            />
                            <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition duration-300">Subscribe</button>
                        </div>
                    </div>
                </AnimatedComponent>
            </div>
            <div className="relative mt-8 pt-4 text-center">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                </div>
                <AnimatedComponent delay={0.6}>
                    <p className="text-sm relative text-gray-500 mt-[4rem] mb-2">
                        Copyright 2022 Uifry.Com All Rights Reserved
                    </p>
                </AnimatedComponent>
            </div>
        </footer>
    );
};

export default Footer;
