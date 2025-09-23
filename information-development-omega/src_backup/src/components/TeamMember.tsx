
import { Linkedin, Twitter, Github } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  tags: string[];
  linkedin?: string;
}

const TeamMember = ({ name, role, image, tags, linkedin }: TeamMemberProps) => {
  // Check if it's an Unsplash image ID or a direct URL
  const imageUrl = image.startsWith('/') || image.startsWith('http') 
    ? image 
    : `https://images.unsplash.com/${image}?w=400&h=400&fit=crop&crop=face`;

  const pastelColors = [
    'bg-pastel-pink',
    'bg-pastel-blue', 
    'bg-pastel-green',
    'bg-pastel-yellow',
    'bg-pastel-purple',
    'bg-pastel-orange',
    'bg-pastel-mint'
  ];

  return (
    <div className="bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-border">
      <div className="aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3 text-sm">{role}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs font-medium text-foreground rounded-full ${
                pastelColors[index % pastelColors.length]
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* LinkedIn only */}
        {linkedin && (
          <a
            href={linkedin}
            className="inline-flex items-center justify-center p-2 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
