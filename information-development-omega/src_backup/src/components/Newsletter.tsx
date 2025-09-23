import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, TrendingUp } from "lucide-react";

const Newsletter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const newsletters = [
    {
      title: "InfoDev Weekly #47",
      description: "Latest trends in technical communication and content strategy for Q4 2024.",
      date: "Dec 15, 2024",
      subscribers: "1.2K",
      image: "bg-pastel-purple"
    },
    {
      title: "Content Creator's Guide",
      description: "Best practices for creating developer-focused content that converts.",
      date: "Dec 08, 2024", 
      subscribers: "850",
      image: "bg-pastel-mint"
    },
    {
      title: "Documentation Deep Dive",
      description: "Advanced techniques for structuring complex technical documentation.",
      date: "Dec 01, 2024",
      subscribers: "950",
      image: "bg-pastel-orange"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsletters.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsletters.length) % newsletters.length);
  };

  return (
    <section id="newsletter" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Newsletter
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest in technical communication and content strategy.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {newsletters.map((newsletter, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden mx-4 border border-border">
                    <div className={`h-32 ${newsletter.image} flex items-center justify-center`}>
                      <h3 className="text-xl font-bold text-foreground text-center">{newsletter.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {newsletter.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar size={14} />
                          <span>{newsletter.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp size={14} />
                          <span>{newsletter.subscribers} subscribers</span>
                        </div>
                      </div>
                      <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                        Read Newsletter
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-card rounded-full shadow-md hover:shadow-lg transition-all border border-border"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-card rounded-full shadow-md hover:shadow-lg transition-all border border-border"
          >
            <ChevronRight size={20} className="text-foreground" />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {newsletters.map((_, index) => (
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

export default Newsletter;