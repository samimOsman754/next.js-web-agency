"use client";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";

const Home = () => {
  
  return (
    <div className="overflow-hidden">
      <Hero />
      <About/>
      <Services/>
    </div>
  );
};

export default Home;
