import type { NextPage } from 'next';
import Hero from '../components/HeroSection/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '@/components/FAQ';
import GetStarted from '@/components/GetStarted';
import Footer from '@/components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <GetStarted />
      <Footer /> 
    </>
  );
};

export default Home;
