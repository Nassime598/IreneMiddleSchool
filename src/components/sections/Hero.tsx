import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("images/heroImage.png")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-white">
        <div className="max-w-3xl">
          <h1 
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-1000 ease-out",
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            Welcome to Irene Middle School
          </h1>
          
          <p 
            className={cn(
              "text-lg md:text-xl mb-8 transition-all duration-1000 delay-300 ease-out",
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            Cultivating minds, nurturing hearts, and growing futures in the heart of Centurion, Gauteng.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-white"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
}