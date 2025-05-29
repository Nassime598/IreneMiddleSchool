import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Address",
      details: ["Centurion, Gauteng", "South Africa"]
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      details: ["+27 658676425"]
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      details: ["m.khumalo.prof@gmail.com"]
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "School Hours",
      details: ["Monday-Friday: 7:30 AM - 2:30 PM", "Office: 7:00 AM - 4:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
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
            Contact Us
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
            We'd love to hear from you. Feel free to reach out with any questions about our programs, 
            admissions process, or to schedule a visit to our campus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card 
            className={cn(
              "transition-all duration-1000",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          
          <div 
            className={cn(
              "space-y-6 transition-all duration-1000",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mt-1 mr-3">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{info.title}</h4>
                        {info.details.map((detail, i) => (
                          <p key={i} className="mt-1 text-sm text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-[300px] w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114473.58291418289!2d28.088611255487285!3d-25.84058217068068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956608911ce097%3A0x519896b4b6eda37e!2sCenturion%2C%20Pretoria%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1697659451389!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}