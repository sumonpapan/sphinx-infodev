import { ExternalLink, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "API Documentation Portal",
      description: "Comprehensive documentation platform with interactive examples and code snippets.",
      image: "bg-pastel-blue",
      category: "Technical Documentation",
      link: "#"
    },
    {
      title: "Product Video Series",
      description: "Educational video content explaining complex technical concepts in simple terms.",
      image: "bg-pastel-green",
      category: "Video Production",
      link: "#"
    },
    {
      title: "UX Writing Guidelines",
      description: "Complete style guide and content strategy for user-facing interfaces.",
      image: "bg-pastel-pink",
      category: "Content Strategy",
      link: "#"
    },
    {
      title: "Developer Onboarding",
      description: "Interactive tutorials and documentation for new developer experiences.",
      image: "bg-pastel-yellow",
      category: "Technical Writing",
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our work in technical communication and content creation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-border">
              <div className={`h-48 ${item.image} flex items-center justify-center`}>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <span className="text-xs px-3 py-1 bg-card/80 rounded-full font-medium text-foreground">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="inline-flex items-center text-primary hover:text-primary font-medium text-sm group-hover:underline"
                >
                  View Project
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;