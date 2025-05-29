import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/8949637/pexels-photo-8949637.jpeg"
          alt="South African students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to <span className="text-yellow-400">Irene Middle School</span>
          </h1>
          <p className="text-white text-lg md:text-xl mb-8">
            Nurturing young minds, building future leaders, and celebrating South African heritage
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="bg-green-700 text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 transition-colors"
            >
              Discover More
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;