
import { Linkedin, Twitter, Github } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

const TeamMember = ({ name, role, image, bio, linkedin, twitter, github }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="aspect-square overflow-hidden">
        <img
          src={`https://images.unsplash.com/${image}?w=400&h=400&fit=crop&crop=face`}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{bio}</p>
        <div className="flex space-x-3">
          {linkedin && (
            <a
              href={linkedin}
              className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={16} />
            </a>
          )}
          {github && (
            <a
              href={github}
              className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
