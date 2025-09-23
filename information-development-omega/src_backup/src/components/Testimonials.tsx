import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      text: "The Zeta team transformed our complex technical documentation into user-friendly guides that our developers actually use. Their attention to detail and understanding of developer workflows is exceptional.",
      author: "Sarah Johnson", 
      role: "VP of Engineering",
      company: "TechCorp Solutions",
      rating: 5,
      avatar: "bg-pastel-blue"
    },
    {
      text: "Working with the Information Development team was a game-changer. They didn't just document our API - they made it accessible and engaging. Our developer adoption increased by 40%.",
      author: "Michael Chen",
      role: "Product Manager", 
      company: "CloudNext Platform",
      rating: 5,
      avatar: "bg-pastel-green"
    },
    {
      text: "The video tutorials created by this team are outstanding. They have a unique ability to break down complex concepts into digestible, actionable content that our users love.",
      author: "Emily Rodriguez",
      role: "Head of Customer Success",
      company: "DataFlow Systems", 
      rating: 5,
      avatar: "bg-pastel-pink"
    },
    {
      text: "Their content strategy expertise helped us restructure our entire knowledge base. The result? 60% reduction in support tickets and much happier customers.",
      author: "David Park",
      role: "Director of Support",
      company: "InnovateLabs",
      rating: 5, 
      avatar: "bg-pastel-yellow"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What our clients say about working with our team.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 mx-4 border border-border">
                    <div className="flex items-center justify-center mb-6">
                      <Quote size={32} className="text-primary" />
                    </div>
                    
                    <blockquote className="text-foreground text-lg leading-relaxed mb-6 text-center italic">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-center space-x-4">
                      <div className={`w-12 h-12 ${testimonial.avatar} rounded-full flex items-center justify-center`}>
                        <span className="text-foreground font-bold text-lg">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
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
            {testimonials.map((_, index) => (
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

export default Testimonials;