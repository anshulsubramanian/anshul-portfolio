import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectSectionProps {
  title: string;
  image?: string;
  images?: string[];
  video?: string;
  content: {
    overview: string[];
  };
}

const ProjectSection = ({ title, image, images, video, content }: ProjectSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const imageArray = images || (image ? [image] : []);
  const hasMultipleImages = !video && imageArray.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageArray.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [hasMultipleImages, imageArray.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageArray.length);
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-secondary/30 transition-all">
      <div className="h-[400px] overflow-hidden bg-muted relative group">
        {video ? (
          <video
            key={video}
            src={video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-contain bg-black"
          />
        ) : (
          <>
            <img 
              src={imageArray[currentImageIndex]} 
              alt={`${title} - ${currentImageIndex + 1}`}
              className="w-full h-full object-contain bg-black object-center transition-opacity duration-500"
            />
            
            {hasMultipleImages && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {imageArray.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentImageIndex 
                          ? 'bg-secondary w-6' 
                          : 'bg-background/60 hover:bg-background/80'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
      <div className="p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-2xl font-bold text-foreground">
            {title}
          </h3>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-shrink-0 p-2 rounded-lg hover:bg-secondary/10 transition-colors"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-secondary" />
            ) : (
              <ChevronDown className="w-6 h-6 text-secondary" />
            )}
          </button>
        </div>
        
        {isExpanded && (
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed animate-fade-in">
            {content.overview.map((item, idx) => (
              <p key={idx}>• {item}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
