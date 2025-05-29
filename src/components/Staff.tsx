import React from 'react';

const Staff: React.FC = () => {
  const staffMembers = [
    {
      name: 'Dr. Thabo Molefe',
      position: 'Principal',
      image: 'https://images.pexels.com/photos/5905492/pexels-photo-5905492.jpeg',
      description: 'With over 20 years in education, Dr. Molefe leads our school with vision and compassion.',
    },
    {
      name: 'Mrs. Nomsa Dlamini',
      position: 'Vice Principal',
      image: 'https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg',
      description: 'Mrs. Dlamini oversees curriculum development and student affairs with dedication.',
    },
    {
      name: 'Mr. Sipho Ndlovu',
      position: 'Head of Mathematics',
      image: 'https://images.pexels.com/photos/8422168/pexels-photo-8422168.jpeg',
      description: 'Mr. Ndlovu brings mathematics to life with his innovative teaching methods.',
    },
    {
      name: 'Ms. Precious Khumalo',
      position: 'Head of Languages',
      image: 'https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg',
      description: 'Ms. Khumalo is passionate about literature and multilingual education.',
    },
  ];

  return (
    <section id="staff" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Staff</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Meet our dedicated team of educators and administrators committed to providing the best education for your child.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staffMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-green-700 font-medium mb-2">{member.position}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;