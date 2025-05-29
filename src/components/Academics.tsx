import React from 'react';
import { BookOpen, Music, Trophy, Palette } from 'lucide-react';

const Academics: React.FC = () => {
  const academicPrograms = [
    {
      icon: <BookOpen className="w-12 h-12 text-green-700 mb-4" />,
      title: 'Core Curriculum',
      description: 'Our comprehensive curriculum covers Mathematics, Languages, Sciences, Social Studies, and more, aligned with South African educational standards.',
    },
    {
      icon: <Trophy className="w-12 h-12 text-green-700 mb-4" />,
      title: 'Sports Programs',
      description: 'We offer a variety of sports including soccer, netball, cricket, and athletics to develop teamwork, discipline, and physical fitness.',
    },
    {
      icon: <Music className="w-12 h-12 text-green-700 mb-4" />,
      title: 'Arts & Culture',
      description: 'Our arts program includes music, drama, visual arts, and traditional South African cultural activities to nurture creativity and cultural appreciation.',
    },
    {
      icon: <Palette className="w-12 h-12 text-green-700 mb-4" />,
      title: 'Enrichment Activities',
      description: 'We provide various clubs, competitions, and community service opportunities to enhance learning beyond the classroom.',
    },
  ];

  return (
    <section id="academics" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Our academic offerings are designed to provide a well-rounded education that prepares students for high school and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {academicPrograms.map((program, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              {program.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{program.title}</h3>
              <p className="text-gray-700">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-700 rounded-lg p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Excellence in Education</h3>
              <p className="mb-6">
                Our dedicated teaching staff employs innovative teaching methods to ensure that each student reaches
                their full potential.
                We believe in personalized learning approaches that cater to different learning styles and abilities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span>Small class sizes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span>Modern facilities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span>Technology integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span>Qualified educators</span>
                </div>
              </div>
            </div>
            <div>
              <img
                  src="images/pexels-khalifa-yahaya-650488521-30058879.jpg"
                  alt="Student learning"
                  className="rounded-lg shadow-lg"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;