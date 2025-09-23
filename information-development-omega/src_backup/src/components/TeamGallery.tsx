
import { useEffect, useState } from "react";

const TeamGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const teamImages = [
    "/lovable-uploads/54f2a1c9-850f-49b8-9f93-bffa246eac42.png", // Sumon
    "/lovable-uploads/06410970-649e-4421-a2b3-908cc71b9d13.png", // Benila
    "/lovable-uploads/27c34834-494e-44ee-9e99-64a5af3d09cc.png", // Maheswari
    "/lovable-uploads/e07f9a27-28e6-4b74-8b63-c42edda99360.png", // Mercy
    "/lovable-uploads/ff86f160-e61a-4dd2-b033-0e16d5832621.png", // Monami
    "/lovable-uploads/87b08303-945c-4466-b95e-b73274f2e2e2.png", // Narendra
    "/lovable-uploads/42ea09d2-b75c-4d36-8e04-578cac5784c9.png", // Tanmayi
    "/lovable-uploads/27c34834-494e-44ee-9e99-64a5af3d09cc.png", // Vidya
    "/lovable-uploads/4f52a973-dcf8-47a6-b66c-f41869fe55be.png", // Additional team photo
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [teamImages.length]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Team Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing moments from our journey together at Zeta.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video overflow-hidden rounded-2xl shadow-lg">
            <img
              src={teamImages[currentIndex]}
              alt="Team Gallery"
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
          
          {/* Carousel indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {teamImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGallery;
