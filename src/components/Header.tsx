
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-pastel-purple rounded-lg flex items-center justify-center">
              <img
                src="/lovable-uploads/43d785ce-cb11-4312-a047-ff2baa5c9bfe.png"
                alt="Sphinx"
                className="w-6 h-6 filter brightness-0 invert"
              />
            </div>
            <span className="ml-2 text-xl font-bold text-foreground">Zeta</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors font-medium">
              Team
            </a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors font-medium">
              Portfolio
            </a>
            <a href="#blogs" className="text-foreground hover:text-primary transition-colors font-medium">
              Blogs
            </a>
            <a href="#newsletter" className="text-foreground hover:text-primary transition-colors font-medium">
              Newsletter
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium">
              Gallery
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Team</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#blogs" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Blogs</a>
              <a href="#newsletter" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Newsletter</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Gallery</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
