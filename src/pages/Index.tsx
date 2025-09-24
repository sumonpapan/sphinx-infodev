
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeamMember from "@/components/TeamMember";
import TeamGallery from "@/components/TeamGallery";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Newsletter from "@/components/Newsletter";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Index = () => {
  const [showExMembers, setShowExMembers] = useState(false);
  const teamMembers = [
    {
      name: "Ardhi Suresh",
      role: "Information Developer - I",
      image: "/team/Ardhi.jpeg",
      tags: ["Technical Writing", "Documentation", "UX Writing"],
      linkedin: "https://www.linkedin.com/in/benila-edwin/"
    },
    {
      name: "Benila Edwin",
      role: "Information Developer - I", 
      image: "/team/Benila.jpeg",
      tags: ["Content Creation", "API Docs", "User Guides"],
      linkedin: "https://www.linkedin.com/in/benila-edwin/"
    },
    {
      name: "Dinesh Patel",
      role: "Intern – Video Producer",
      image: "/lovable-uploads/e07f9a27-28e6-4b74-8b63-c42edda99360.png", 
      tags: ["Video Production", "Multimedia", "Content Creation"],
      linkedin: "https://www.linkedin.com/in/dinesh-8540-patel/"
    },
    {
      name: "V Maheswari", 
      role: "Principal Information Developer - I",
      image: "/team/maheswari.jpg",
      tags: ["Content Strategy", "Information Architecture", "Leadership"],
      linkedin: "https://www.linkedin.com/in/maheswari-viswanathan-26864643/"
    },
    {
      name: "Mercy Mochary",
      role: "Lead - Information Development",
      image: "/team/Mercy.png",
      tags: ["Team Leadership", "Content Design", "Quality Assurance"],
      linkedin: "https://www.linkedin.com/in/mercymochary/"
    },
    {
      name: "Monami Bhattacharya",
      role: "Sr. Manager - Information Development", 
      image: "/team/Monami.png",
      tags: ["Strategic Planning", "Team Management", "Content Operations"],
      linkedin: "https://www.linkedin.com/in/monami/"
    },
    {
      name: "Narendra R",
      role: "Staff Information Developer",
      image: "/team/narendra.jpeg", 
      tags: ["Developer Experience", "API Documentation", "Technical Expertise"],
      linkedin: "https://www.linkedin.com/in/narendra-ramakrishna-54145533/"
    },
    {
      name: "Sanjay Nagaraj",
      role: "Information Developer - I", 
      image: "/team/Sanjay.jpeg",
      tags: ["Content Writing", "Documentation", "User Experience"],
      linkedin: "https://www.linkedin.com/in/sanjay-n-552782355"
    },
    {
      name: "Sumon Mondal",
      role: "Sr. Associate Video Producer",
      image: "/team/Sumon.png",
      tags: ["Video Production", "Content Creation", "Storytelling"],
      linkedin: "https://www.linkedin.com/in/31-sumon/"
    },
    {
      name: "Tanmayi RS",
      role: "Information Developer - II",
      image: "/team/Tanmayi.png",
      tags: ["Multi-format Content", "User Experience", "Content Strategy"],
      linkedin: "https://www.linkedin.com/in/tanmayi-shivanand-89a967128/"
    },
    {
      name: "Vidya Ramesh",
      role: "Principal Information Developer - I", 
      image: "/team/vidya.jpg",
      tags: ["Information Systems", "Documentation Architecture", "Mentorship"],
      linkedin: ""
    }
  ];

  const exMembers = [
    {
      name: "Alex Kumar",
      role: "Former Technical Writer",
      image: "/lovable-uploads/ff86f160-e61a-4dd2-b033-0e16d5832621.png",
      tags: ["Technical Writing", "API Documentation", "Developer Tools"],
      linkedin: "#"
    },
    {
      name: "Priya Shah", 
      role: "Former Content Strategist",
      image: "/lovable-uploads/42ea09d2-b75c-4d36-8e04-578cac5784c9.png",
      tags: ["Content Strategy", "UX Writing", "Information Design"],
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Team Section */}
      <section id="team" className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the motley crew of thinkers, writers, artists, singers, and communicators at Zeta. We work, learn, experiment, and create fabulous content!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
          
          {/* Ex-Members Collapsible Section */}
          <div className="text-center">
            <button
              onClick={() => setShowExMembers(!showExMembers)}
              className="inline-flex items-center px-6 py-3 bg-card border border-border rounded-lg hover:bg-secondary transition-colors text-foreground font-medium"
            >
              Ex-Members
              {showExMembers ? (
                <ChevronUp className="ml-2" size={20} />
              ) : (
                <ChevronDown className="ml-2" size={20} />
              )}
            </button>
            
            {showExMembers && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {exMembers.map((member, index) => (
                  <TeamMember key={`ex-${index}`} {...member} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      
      
      <Portfolio />
      <Blog />
      <Newsletter />
      <Gallery />
      <Testimonials />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-pastel-purple to-pastel-pink rounded-lg flex items-center justify-center mr-3">
                <img
                  src="/lovable-uploads/43d785ce-cb11-4312-a047-ff2baa5c9bfe.png"
                  alt="Sphinx"
                  className="w-6 h-6 filter brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold">Zeta</span>
            </div>
            <p className="text-primary-foreground/80 text-center md:text-right">
              © 2024 Zeta. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
