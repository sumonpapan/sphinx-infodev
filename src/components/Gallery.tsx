import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Use existing team gallery images
  const galleryImages = [
    {
      url: "/lovable-uploads/54f2a1c9-850f-49b8-9f93-bffa246eac42.png",
      title: "Team Collaboration Session",
      description: "Our team working together on a complex documentation project."
    },
    {
      url: "/lovable-uploads/06410970-649e-4421-a2b3-908cc71b9d13.png", 
      title: "Content Strategy Workshop",
      description: "Brainstorming session for new content initiatives."
    },
    {
      url: "/lovable-uploads/27c34834-494e-44ee-9e99-64a5af3d09cc.png",
      title: "Video Production Setup",
      description: "Behind the scenes of our educational video creation process."
    },
    {
      url: "/lovable-uploads/e07f9a27-28e6-4b74-8b63-c42edda99360.png",
      title: "Team Building Event",
      description: "Strengthening bonds and celebrating our achievements."
    },
    {
      url: "/lovable-uploads/4f52a973-dcf8-47a6-b66c-f41869fe55be.png",
      title: "Office Culture",
      description: "Candid moments from our daily work environment."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Glimpses of our team in action and our collaborative work environment.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg bg-card border border-border">
            <img
              src={galleryImages[currentSlide].url}
              alt={galleryImages[currentSlide].title}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <h3 className="text-white text-xl font-bold mb-2">
                {galleryImages[currentSlide].title}
              </h3>
              <p className="text-white/90 text-sm">
                {galleryImages[currentSlide].description}
              </p>
            </div>
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-card/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all border border-border"
          >
            <ChevronLeft size={24} className="text-foreground" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-card/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all border border-border"
          >
            <ChevronRight size={24} className="text-foreground" />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-muted'
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