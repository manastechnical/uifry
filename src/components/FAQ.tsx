"use client";
import React from 'react';
import { motion } from 'framer-motion';
import faqData from '../../public/data.json';
import AnimatedComponent from './AnimatedComponent';

const FAQ: React.FC = () => {
  const faqList = faqData.faqList;

  return (
    <section id='faq' className="font-serif relative text-black p-4 sm:flex justify-center">
      <div className="container relative">
        <div className="container lg:mx-auto">
          <motion.h3
            className="font-serif text-xl font-bold mb-2 text-rdo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileInView="onscreen"
          >
            FAQ
          </motion.h3>
          <motion.h2
            className="font-serif text-5xl font-black mb-12 w-[50%]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileInView="onscreen"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>
        <div className="container lg:mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 relative">
            {faqList.map((faq, index) => (
              <AnimatedComponent key={index}
                className={`flex flex-col p-6 rounded-lg shadow-lg ${faq.color === 'rdo' ? 'bg-rdo text-white' : 'bg-white text-black'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}>
                <h3 className="text-[34px] font-black mb-4">{faq.question}</h3>
                <p>{faq.answer}</p>
              </AnimatedComponent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
