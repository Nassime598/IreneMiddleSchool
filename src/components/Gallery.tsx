import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "https://images.pexels.com/photos/8949573/pexels-photo-8949573.jpeg",
      alt: "Students in classroom",
      caption: "Interactive learning in our modern classrooms"
    },
    {
      src: "https://images.pexels.com/photos/8949883/pexels-photo-8949883.jpeg",
      alt: "Students playing sports",
      caption: "Developing teamwork through sports"
    },
    {
      src: "https://images.pexels.com/photos/8949859/pexels-photo-8949859.jpeg",
      alt: "Science experiment",
      caption: "Hands-on learning in our science labs"
    },
    {
      src: "https://images.pexels.com/photos/8947514/pexels-photo-8947514.jpeg",
      alt: "Students in library",
      caption: "Quiet study time in our well-stocked library"
    },
    {
      src: "https://images.pexels.com/photos/8947528/pexels-photo-8947528.jpeg",
      alt: "Cultural performance",
      caption: "Celebrating South African cultural heritage"
    },
    {
      src: "https://images.pexels.com/photos/8947541/pexels-photo-8947541.jpeg",
      alt: "Art class",
      caption: "Expressing creativity in our art program"
    },
  ];

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">School Gallery</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Take a visual journey through the vibrant life at Irene Middle School.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4">
                  <p className="text-white text-sm">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white p-2"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            <button
              className="absolute left-4 text-white p-2"
              onClick={goToPrevious}
            >
              <ChevronLeft size={40} />
            </button>
            <div className="max-w-4xl max-h-[80vh] mx-auto">
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="max-w-full max-h-[70vh] object-contain"
              />
              <p className="text-white text-center mt-4 text-lg">
                {images[currentImage].caption}
              </p>
            </div>
            <button
              className="absolute right-4 text-white p-2"
              onClick={goToNext}
            >
              <ChevronRight size={40} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;