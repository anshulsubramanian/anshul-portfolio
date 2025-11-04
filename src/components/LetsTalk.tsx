import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LetsTalk = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-secondary/10 via-background to-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            Have a project in mind?
            <br />
            <span className="text-secondary">Let's talk.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-all shadow-medium hover:shadow-large group"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
