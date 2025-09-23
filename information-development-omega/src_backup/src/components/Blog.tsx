import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, User } from "lucide-react";

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const blogPosts = [
    {
      title: "Breaking the Curse of Knowledge",
      excerpt: "How technical writers can bridge the gap between experts and users.",
      author: "Mercy",
      date: "Dec 2024",
      image: "bg-pastel-blue",
      category: "Technical Writing"
    },
    {
      title: "Creating Effective Video Tutorials",
      excerpt: "Best practices for producing engaging educational video content.",
      author: "Sumon",
      date: "Nov 2024", 
      image: "bg-pastel-green",
      category: "Video Production"
    },
    {
      title: "Documentation That Developers Love",
      excerpt: "Building API docs that are both comprehensive and user-friendly.",
      author: "Narendra",
      date: "Oct 2024",
      image: "bg-pastel-pink",
      category: "Development"
    },
    {
      title: "Content Strategy for Tech Products",
      excerpt: "Aligning technical content with user needs and business goals.",
      author: "Maheswari",
      date: "Sep 2024",
      image: "bg-pastel-yellow",
      category: "Strategy"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  return (
    <section id="blogs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blogs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights and expertise from our technical communication team.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {blogPosts.map((post, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden mx-4 border border-border">
                    <div className={`h-48 ${post.image} flex items-end p-6`}>
                      <span className="text-xs px-3 py-1 bg-card/90 rounded-full font-medium text-foreground">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">{post.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </div>
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
            {blogPosts.map((_, index) => (
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

export default Blog;