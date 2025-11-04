import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  image: string;
  gradient: "purple" | "cyan" | "green";
  link: string;
}

const ProjectCard = ({ title, image, gradient, link }: ProjectCardProps) => {
  return (
    <Link 
      to={link}
      className="group cursor-pointer bg-card border border-border rounded-2xl overflow-hidden hover:border-secondary/30 transition-all duration-300"
    >
      <div className="h-[400px] overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
