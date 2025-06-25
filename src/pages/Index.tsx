
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeamMember from "@/components/TeamMember";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  const teamMembers = [
    {
      name: "Sumon Mondal",
      role: "Sr. Associate Video Producer",
      image: "photo-1649972904349-6e44c42644a7",
      bio: "The creative person of Zeta World",
      linkedin: "https://www.linkedin.com/in/31-sumon/",
      twitter: "#",
      github: "#"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "photo-1488590528505-98d2b5aba04b",
      bio: "Full-stack developer passionate about clean code and innovative solutions.",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      image: "photo-1581091226825-a6a2a5aee158",
      bio: "User-centered design advocate with expertise in research and prototyping.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "David Kim",
      role: "Product Manager",
      image: "photo-1519389950473-47ba0277781c",
      bio: "Strategic thinker who bridges the gap between business goals and user needs.",
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals who make our magic happen every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
      
      <Services />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">TeamFlow</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 TeamFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
