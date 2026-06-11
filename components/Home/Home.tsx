"use client";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {
  
  return (
    <div className="overflow-hidden">
      <Hero />
      <About/>
      <Services/>
      <WhyChoose/>
    </div>
  );
};

export default Home;
