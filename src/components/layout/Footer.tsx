import { Phone, Mail, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Irene Middle School</h3>
            <p className="mb-4 text-gray-400">
              Providing quality education and nurturing the potential of every child in Centurion, Gauteng.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                <span>Centurion, Gauteng, South Africa</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                <span>+27 658676425 </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <span>m.khumalo.prof@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#academics" className="text-gray-400 hover:text-white transition-colors">Academic Programs</a></li>
              <li><a href="#facilities" className="text-gray-400 hover:text-white transition-colors">Facilities</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">School Calendar</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6 bg-gray-700" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; 2023 Irene Middle School. All rights reserved.</p>
          <p className="mt-1">National EMIS NO: 700211409</p>
        </div>
      </div>
    </footer>
  );
}