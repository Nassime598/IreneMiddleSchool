import { BookOpen, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

export function About() {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.1 });
  const { ref: valuesRef, inView: valuesInView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div 
        ref={sectionRef}
        className="container px-4 mx-auto"
      >
        <div className="text-center mb-12">
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            About Our School
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
            Established with a vision to provide quality education in a nurturing environment, 
            Irene Middle School has been serving the Centurion community since 1995.
            Our approach combines academic excellence with holistic development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div 
            className={cn(
              "transition-all duration-1000",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <img 
              src="/IreneMiddleSchool/images/pexels-lalgecain-2406271.jpg"
              alt="Students learning in classroom" 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          
          <div 
            className={cn(
              "space-y-6 transition-all duration-1000 delay-300",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            <p className="text-gray-600">
              To provide a supportive and challenging educational environment that encourages 
              students to achieve their full potential, develop critical thinking skills, and 
              become responsible citizens who contribute positively to society.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            <p className="text-gray-600">
              To be a center of educational excellence that inspires lifelong learning, 
              celebrates diversity, and prepares students to meet the challenges of a 
              rapidly changing world with confidence and integrity.
            </p>
          </div>
        </div>
        
        <div 
          ref={valuesRef}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: <BookOpen className="h-10 w-10 text-primary" />,
              title: "Academic Excellence",
              description: "We maintain high academic standards and provide a stimulating learning environment that challenges students to excel."
            },
            {
              icon: <Users className="h-10 w-10 text-primary" />,
              title: "Inclusive Community",
              description: "We celebrate diversity and create a supportive community where everyone feels valued, respected, and empowered."
            },
            {
              icon: <Award className="h-10 w-10 text-primary" />,
              title: "Character Development",
              description: "We nurture integrity, resilience, compassion, and other essential values that form the foundation of good character."
            }
          ].map((value, index) => (
            <Card 
              key={index}
              className={cn(
                "transition-all duration-700",
                valuesInView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10",
                { "delay-300": index === 1, "delay-600": index === 2 }
              )}
            >
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}