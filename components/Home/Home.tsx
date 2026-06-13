"use client";
import { useEffect } from "react";
import About from "./About/About";
import ClientReview from "./ClientReview/ClientReview";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Order from "./Order/Order";
import Price from "./Price/Price";
import Services from "./Services/Services";
import WhyChoose from "./WhyChoose/WhyChoose";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  // Initialize AOS (Animate On Scroll) library
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      })
    }
    initAOS();
  }, [])

  return (
    <div className="overflow-hidden">
      <Hero />
      <About/>
      <Services/>
      <WhyChoose/>
      <Price/>
      <ClientReview/>
      <Order/>
      <Contact/>
    </div>
  );
};

export default Home;
