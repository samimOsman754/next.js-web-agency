import React, { useEffect, useRef } from "react";
import { GiSparkles } from "react-icons/gi";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        opacity: Math.random(),
      });
    }
    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    animate();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 bg-linear-to-br from-blue-600 via-purple-900 to-pink-900 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900"
      />
      
      <div className="relative z-10 flex flex-col items-center px-4">
        <div data-aos="fade-down" className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20">
          <GiSparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
          <span className="text-white font-medium">Welcome to WebdevWarriors</span>
        </div>

        <h1 data-aos="fade-up" data-aos-delay="200" className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-center">
          <TypeAnimation
            sequence={[
              "We Create Magic",
              3000,
              "We Build Dreams",
              3000,
              "We Design Future",
              3000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p data-aos="fade-up" data-aos-delay="400" className="text-lg md:text-xl text-gray-300 max-w-2xl text-center mb-10 leading-relaxed">
          We are a team of passionate developers and designers creating amazing
          digital experiences.
        </p>

        <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={"#"}
            className="bg-blue-600 text-white hover:bg-blue-700 font-medium py-2 px-4 rounded-full inline-flex items-center group transition duration-300"
          >
            <span>Get Started</span>
            <BsArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            href={"#"}
            className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 font-medium py-2 px-4 rounded-full transition duration-300"
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
      {/* animated scroll indication  */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
