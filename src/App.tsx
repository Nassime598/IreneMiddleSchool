import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Academics } from '@/components/sections/Academics';
import { Facilities } from '@/components/sections/Facilities';
import { Contact } from '@/components/sections/Contact';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Irene Middle School | Centurion, Gauteng';
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Academics />
        <Facilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;