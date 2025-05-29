import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Book, 
  FlaskConical, 
  Monitor,
  BookOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

const facilities = [
  {
    id: "classrooms",
    icon: <BookOpen className="h-6 w-6" />,
    title: "Modern Classrooms",
    description: "Spacious, well-lit classrooms equipped with multimedia technology to enhance the learning experience.",
    image: "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: "library",
    icon: <Book className="h-6 w-6" />,
    title: "Library",
    description: "A well-stocked library with a wide range of books, reference materials, and digital resources.",
    image: "https://thepollinationproject.org/wp-content/uploads/2023/06/IMG_2283-1-scaled.jpg"
  },
  {
    id: "science-lab",
    icon: <FlaskConical className="h-6 w-6" />,
    title: "Science Laboratory",
    description: "Fully equipped science laboratories for practical experiments and hands-on learning.",
    image: "https://www.rizalprovince.ph/education/rizal%20sci/gen%20sci%20lab%20%284%29.JPG"
  },
  {
    id: "computer-lab",
    icon: <Monitor className="h-6 w-6" />,
    title: "Computer Laboratory",
    description: "State-of-the-art computer labs with internet access for research and technology education.",
    image: "https://rippleafricausa.org/wp-content/uploads/2020/05/Students-using-computers.jpg"
  }
];

export function Facilities() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState("classrooms");
  const [currentSlide, setCurrentSlide] = useState(0);

  const mobileImages = facilities.map(facility => facility.image);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === mobileImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? mobileImages.length - 1 : prev - 1));
  };

  return (
    <section id="facilities" className="py-16 md:py-24 bg-gray-50">
      <div 
        ref={ref}
        className="container px-4 mx-auto"
      >
        <div className="text-center mb-12">
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Our Facilities
          </h2>
          <div 
            className={cn(
              "h-1 w-20 bg-primary mx-auto mb-6 transition-all duration-700 delay-300",
              inView ? "opacity-100 scale-100" : "opacity-0 scale-0"
            )}
          />
          <p 
            className={cn(
              "max-w-2xl mx-auto text-gray-600 transition-all duration-700 delay-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            We provide modern facilities to create an optimal learning environment 
            for our students to thrive academically and socially.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab}
            className={cn(
              "transition-all duration-1000",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            )}
          >
            <TabsList className="grid grid-cols-4 h-auto bg-transparent mb-8">
              {facilities.map((facility) => (
                <TabsTrigger 
                  key={facility.id}
                  value={facility.id}
                  className="flex flex-col items-center py-4 data-[state=active]:bg-white"
                >
                  <div className="mb-2">{facility.icon}</div>
                  <span className="text-sm font-medium">{facility.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {facilities.map((facility) => (
              <TabsContent 
                key={facility.id}
                value={facility.id}
                className="mt-0"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-lg shadow-sm">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="rounded-lg h-[300px] w-full object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{facility.title}</h3>
                    <p className="text-gray-600 mb-6">{facility.description}</p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Mobile View - Carousel */}
        <div 
          className="md:hidden relative rounded-lg overflow-hidden"
          style={{ height: "450px" }}
        >
          <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {mobileImages.map((image, index) => (
              <div key={index} className="min-w-full h-full relative">
                <img 
                  src={image} 
                  alt={`Facility ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{facilities[index].title}</h3>
                  <p className="text-white/80 text-sm">{facilities[index].description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-primary z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-primary z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {mobileImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}