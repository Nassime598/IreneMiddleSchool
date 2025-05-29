import React from 'react';
import { Book, Monitor, Dumbbell, FlaskRound as Flask, Music, Trees } from 'lucide-react';

const Facilities: React.FC = () => {
  const facilities = [
    {
      icon: <Book className="w-12 h-12 text-green-700" />,
      title: 'Modern Library',
      description: 'Our well-stocked library features a wide range of books, digital resources, and comfortable study spaces.',
    },
    {
      icon: <Monitor className="w-12 h-12 text-green-700" />,
      title: 'Computer Labs',
      description: 'State-of-the-art computer labs equipped with the latest technology for digital learning.',
    },
    {
      icon: <Dumbbell className="w-12 h-12 text-green-700" />,
      title: 'Sports Facilities',
      description: 'Comprehensive sports facilities including fields, courts, and equipment for various athletic activities.',
    },
    {
      icon: <Flask className="w-12 h-12 text-green-700" />,
      title: 'Science Labs',
      description: 'Well-equipped science laboratories for hands-on learning and experimentation.',
    },
    {
      icon: <Music className="w-12 h-12 text-green-700" />,
      title: 'Arts Center',
      description: 'Dedicated spaces for music, drama, and visual arts to nurture creativity and expression.',
    },
    {
      icon: <Trees className="w-12 h-12 text-green-700" />,
      title: 'Green Spaces',
      description: 'Beautiful gardens and outdoor learning areas that promote environmental awareness.',
    },
  ];

  return (
    <section id="facilities" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Irene Middle School provides modern facilities designed to enhance learning and support the development of our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{facility.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{facility.title}</h3>
                  <p className="text-gray-700">{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Campus Tour</h3>
                <p className="text-gray-700 mb-6">
                  We invite prospective parents and students to tour our beautiful campus and experience our facilities firsthand. 
                  Our campus is designed to provide a safe, stimulating environment where students can learn and grow.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-700 rounded-full mr-3"></div>
                    <span className="text-gray-700">Safe and secure environment</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-700 rounded-full mr-3"></div>
                    <span className="text-gray-700">Accessible facilities for all students</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-700 rounded-full mr-3"></div>
                    <span className="text-gray-700">Modern classrooms with interactive technology</span>
                  </div>
                </div>
                <a 
                  href="#contact" 
                  className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 transition-colors"
                >
                  Schedule a Tour
                </a>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/8949756/pexels-photo-8949756.jpeg"
                  alt="School building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;