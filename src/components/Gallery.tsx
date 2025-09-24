import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      url: gallery1,
      title: "Office Workspace",
      description: "Our modern collaborative workspace environment"
    },
    {
      id: 2,
      url: gallery2,
      title: "Team Meeting",
      description: "Regular team meetings to align on projects"
    },
    {
      id: 3,
      url: gallery3,
      title: "Creative Session",
      description: "Brainstorming and creative collaboration spaces"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="gallery" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing moments from our journey together at Zeta.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="aspect-video overflow-hidden rounded-2xl shadow-lg relative">
            <img
              src={galleryImages[currentIndex].url}
              alt={galleryImages[currentIndex].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {galleryImages[currentIndex].title}
              </h3>
              <p className="text-muted-foreground">
                {galleryImages[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;