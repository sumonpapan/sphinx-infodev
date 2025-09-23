
import { FileText, Video } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Technical Documentation",
      description: "Comprehensive documentation that transforms complex technical concepts into clear, actionable guides."
    },
    {
      icon: Video,
      title: "Video Production", 
      description: "Educational video content that makes complex topics accessible through engaging visual storytelling."
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in creating impactful content that bridges the gap between complex technology and user understanding.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-border"
            >
              <div className={`w-12 h-12 ${index === 0 ? 'bg-pastel-blue' : 'bg-pastel-green'} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-foreground" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
