
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeamMember from "@/components/TeamMember";
import TeamGallery from "@/components/TeamGallery";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  const teamMembers = [
    {
      name: "Benila",
      role: "Information Developer I",
      image: "/lovable-uploads/06410970-649e-4421-a2b3-908cc71b9d13.png",
      bio: "Passionate about creating clear and accessible documentation",
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Maheswari",
      role: "Principal Information Developer",
      image: "/lovable-uploads/27c34834-494e-44ee-9e99-64a5af3d09cc.png",
      bio: "Leading information architecture and content strategy",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Mercy",
      role: "Lead Information Developer",
      image: "/lovable-uploads/e07f9a27-28e6-4b74-8b63-c42edda99360.png",
      bio: "Expert in technical writing and content design",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Monami",
      role: "Sr. Manager - Information Developer",
      image: "/lovable-uploads/ff86f160-e61a-4dd2-b033-0e16d5832621.png",
      bio: "Strategic leader in information development initiatives",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Narendra",
      role: "Staff Information Developer",
      image: "/lovable-uploads/87b08303-945c-4466-b95e-b73274f2e2e2.png",
      bio: "Technical communication specialist with deep domain expertise",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sumon Mondal",
      role: "Sr. Associate Video Producer",
      image: "/lovable-uploads/54f2a1c9-850f-49b8-9f93-bffa246eac42.png",
      bio: "The creative person of Zeta World",
      linkedin: "https://www.linkedin.com/in/31-sumon/",
      twitter: "#",
      github: "#"
    },
    {
      name: "Tanmayi",
      role: "Sr. Information Developer",
      image: "/lovable-uploads/42ea09d2-b75c-4d36-8e04-578cac5784c9.png",
      bio: "Specialist in multi-format content creation and user experience",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Vidya",
      role: "Principal Information Developer",
      image: "/lovable-uploads/4f52a973-dcf8-47a6-b66c-f41869fe55be.png",
      bio: "Principal architect of information systems and documentation",
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
              Meet the motley crew of thinkers, writers, artists, singers, and communicators at Zeta. We work, learn, experiment, and create fabulous content!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
      
      <TeamGallery />
      <Services />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <img
                  src="/lovable-uploads/43d785ce-cb11-4312-a047-ff2baa5c9bfe.png"
                  alt="Sphinx"
                  className="w-6 h-6 filter invert"
                />
              </div>
              <span className="text-xl font-bold">Zeta</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 Zeta. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
