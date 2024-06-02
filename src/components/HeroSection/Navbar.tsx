"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from 'framer-motion';
import navdata from "../../../public/data.json";
import AnimatedComponent from "../AnimatedComponent";

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = navdata.navLinks;

    const renderNavLinks = (isMobile = false) => (
        <div className={`${isMobile ? 'block bg-white' : 'flex items-center'} space-y-1 sm:px-3`}>
            {navLinks.map(link => (
                <ScrollLink
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="text-rdo"
                    className={`text-black font-serif text-lg font-bold hover:text-gray-500 transition duration-300 rounded-lg p-2 cursor-pointer ${isMobile ? 'block' : ''}`}
                    onClick={() => isMobile && toggleNavbar()}
                >
                    {link.label}
                </ScrollLink>
            ))}
        </div>
    );

    return (
        <motion.nav
            className={`font-serif fixed top-0 left-0 w-full transition duration-300 ease-in-out z-50 ${isScrolled ? 'bg-white/90 shadow-lg' : 'bg-white/0'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="lg:pl-32 lg:pr-32">
                <div className="max-w-7xl mx-[1rem] lg:mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="/">
                                    <img src="./assets/Logo.png" alt="Logo" />
                                </a>
                            </div>
                            <div className="font-serif text-lg font-bold">Uifry</div>
                            <div className="hidden md:block ml-6">
                                {renderNavLinks()}
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <AnimatedComponent
                                    className="cursor-pointer bg-black text-white px-4 py-2 rounded-md mr-4 flex items-center gap-2 hover:bg-gray-800 transition duration-300"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Download
                                </AnimatedComponent>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                                onClick={toggleNavbar}>
                                {isClick ? (
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <AnimatedComponent
                        className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 z-50"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.5 }}
                    >
                        {renderNavLinks(true)}
                    </AnimatedComponent>
                )}
            </div>
        </motion.nav>
    );
}

export default Navbar;
