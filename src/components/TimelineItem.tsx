import { useEffect, useRef, useState } from "react";

interface TimelineItemProps {
  period: string;
  title: string;
  company: string;
  location: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const TimelineItem = ({ period, title, company, location, highlights }: TimelineItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`relative pl-8 border-l-2 transition-all duration-700 ${
        isInView ? 'opacity-100 border-secondary' : 'opacity-40 border-border'
      }`}
    >
      <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full transition-all duration-500 ${
        isInView ? 'bg-secondary scale-125' : 'bg-muted'
      }`}></div>
      <div className="mb-2">
        <div className="flex items-start justify-between mb-2">
          <h3 className={`text-2xl font-bold transition-all duration-500 ${
            isInView ? 'text-foreground' : 'text-muted-foreground/60'
          }`}>{title}</h3>
          <span className={`text-sm whitespace-nowrap ml-4 font-medium transition-all duration-500 ${
            isInView ? 'text-muted-foreground' : 'text-muted-foreground/60'
          }`}>{period}</span>
        </div>
        <p className={`text-xl font-semibold transition-all duration-500 ${
          isInView ? 'text-secondary' : 'text-muted-foreground/60'
        }`}>{company}</p>
        <p className="text-sm text-muted-foreground mt-1">{location}</p>
      </div>
      <ul className="space-y-3 mt-6">
        {highlights.map((highlight, idx) => (
          <li 
            key={idx} 
            className={`flex items-start transition-all duration-500 ${
              isInView ? 'text-muted-foreground' : 'text-muted-foreground/50'
            }`}
          >
            <span className="mr-3 text-secondary">•</span>
            <span className="leading-relaxed">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineItem;
