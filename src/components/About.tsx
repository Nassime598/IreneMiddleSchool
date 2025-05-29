import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <BookOpen className="w-10 h-10 text-green-700" />,
      title: 'Academic Excellence',
      description: 'We foster a culture of high academic standards and continuous learning.',
    },
    {
      icon: <Users className="w-10 h-10 text-green-700" />,
      title: 'Community & Diversity',
      description: 'We celebrate our South African heritage and embrace diversity in all forms.',
    },
    {
      icon: <Award className="w-10 h-10 text-green-700" />,
      title: 'Character Development',
      description: 'We nurture responsible, respectful, and resilient young individuals.',
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Our School</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              At Irene Middle School, we are dedicated to providing a nurturing and inclusive 
              educational environment that empowers students to excel academically, grow 
              personally, and develop into responsible citizens who contribute positively to 
              South African society.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-6">
              To be a leading middle school in South Africa, recognized for academic excellence, 
              innovative teaching approaches, and a strong commitment to developing well-rounded 
              individuals who embody the values of respect, responsibility, and community service.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8949662/pexels-photo-8949662.jpeg"
              alt="Students in classroom"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-yellow-400 rounded-lg hidden md:block"></div>
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-green-700 rounded-lg hidden md:block"></div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h4>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;