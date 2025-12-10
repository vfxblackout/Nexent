import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;