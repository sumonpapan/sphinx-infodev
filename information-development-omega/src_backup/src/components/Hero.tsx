
import { ArrowRight, Users, Target, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-pastel-lavender via-background to-pastel-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Information Development,
            <span className="bg-gradient-to-r from-primary to-pastel-purple bg-clip-text text-transparent">
              {" "}aka Sphinx
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We are technical communication wizards who work overtime to break the curse of knowledge and create impactful, multi-format content.
          </p>
          
          {/* Pastel badges/icons section */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="px-4 py-2 bg-pastel-pink rounded-full text-sm font-medium text-foreground">Technical Writing</div>
            <div className="px-4 py-2 bg-pastel-blue rounded-full text-sm font-medium text-foreground">Content Strategy</div>
            <div className="px-4 py-2 bg-pastel-green rounded-full text-sm font-medium text-foreground">Documentation</div>
            <div className="px-4 py-2 bg-pastel-yellow rounded-full text-sm font-medium text-foreground">Video Production</div>
            <div className="px-4 py-2 bg-pastel-orange rounded-full text-sm font-medium text-foreground">UX Writing</div>
            <div className="px-4 py-2 bg-pastel-mint rounded-full text-sm font-medium text-foreground">Content Design</div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow border border-pastel-blue/30">
              <Users className="text-primary mb-3" size={32} />
              <h3 className="text-2xl font-bold text-foreground">11</h3>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow border border-pastel-purple/30">
              <Target className="text-primary mb-3" size={32} />
              <h3 className="text-2xl font-bold text-foreground">200+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow border border-pastel-green/30">
              <Zap className="text-primary mb-3" size={32} />
              <h3 className="text-2xl font-bold text-foreground">5+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
