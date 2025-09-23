
import { Heart, Award, Coffee, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Our Team
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We're a diverse team of creative professionals who are passionate about building 
              exceptional digital experiences. Our collaborative approach combines technical 
              expertise with innovative design thinking.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded in 2019, we've grown from a small startup to a trusted partner for 
              businesses of all sizes. We believe in the power of technology to transform 
              ideas into reality.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Heart className="text-red-500" size={24} />
                <span className="text-gray-700 font-medium">Passion-driven</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="text-yellow-500" size={24} />
                <span className="text-gray-700 font-medium">Award-winning</span>
              </div>
              <div className="flex items-center space-x-3">
                <Coffee className="text-brown-500" size={24} />
                <span className="text-gray-700 font-medium">Coffee-fueled</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-blue-500" size={24} />
                <span className="text-gray-700 font-medium">Team-focused</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=600&fit=crop"
                alt="Team working together"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
