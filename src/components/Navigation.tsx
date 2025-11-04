import { Link } from "react-router-dom";
import profileImage from "@/assets/anshul-passport.jpeg";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-background/95 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src={profileImage} 
            alt="Anshul Subramanian" 
            className="w-10 h-10 rounded-full object-cover border-2 border-secondary/30"
          />
        </Link>
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className="text-foreground hover:text-secondary transition-colors text-sm font-medium uppercase tracking-wider"
          >
            Home
          </Link>
          <Link 
            to="/contact" 
            className="text-foreground hover:text-secondary transition-colors text-sm font-medium uppercase tracking-wider"
          >
            Contact
          </Link>
          <a 
            href="/anshul-portfolio/November_2025_Anshul_Subramanian_Resume.pdf"
            download
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg text-sm font-semibold hover:bg-secondary/90 transition-all uppercase tracking-wider"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
