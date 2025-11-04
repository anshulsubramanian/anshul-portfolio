import { useEffect, useState } from "react";

const ExpertiseBanner = () => {
  const expertise = [
    "Vibe Coding",
    "Computer Vision",
    "Deep Learning",
    "Generative AI",
    "Image Processing",
    "Neural Network Optimization",
    "GAN Networks",
    "Machine Learning",
    "Android Development"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % expertise.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [expertise.length]);

  return (
    <div className="border-y border-border bg-card/50 backdrop-blur-sm py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4">
          <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium whitespace-nowrap">
            Areas of Expertise
          </span>
          <span className="text-secondary">•</span>
          <div className="relative h-6 flex items-center">
            {expertise.map((item, index) => (
              <span
                key={index}
                className={`absolute left-0 text-lg font-semibold text-foreground transition-all duration-500 whitespace-nowrap ${
                  index === currentIndex
                    ? "opacity-100 translate-y-0"
                    : index === (currentIndex - 1 + expertise.length) % expertise.length
                    ? "opacity-0 -translate-y-6"
                    : "opacity-0 translate-y-6"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseBanner;
