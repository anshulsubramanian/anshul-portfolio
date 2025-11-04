import Navigation from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import focalVideo from "@/assets/focal_length.mp4";

const FocalLength = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-20">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors mb-12 group font-medium uppercase tracking-wider text-sm"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>

        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-8 font-medium">
          FEATURED PROJECT
        </p>
        <h1 className="text-6xl md:text-7xl font-bold mb-12 text-foreground leading-tight">
          Focal Length Translation
        </h1>
        
        <div className="mb-16">
          <video 
            key={focalVideo}
            src={focalVideo}
            autoPlay
            loop
            muted
            playsInline
            controls
            preload="auto"
            ref={videoRef}
            onLoadedMetadata={() => videoRef.current?.play().catch(() => {})}
            className="w-full h-[500px] object-cover rounded-2xl border border-border"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-8">Project Overview</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>• Worked on a styleGAN approach and a conditional GAN approach to correct a distorted face taken at a low focal length to a higher focal length</p>
            <p>• Prepared a dataset tailored to this problem, covering 7 different focal lengths and 5 different face orientations, making a total dataset size of 14,000 images</p>
            <p>• Worked on GAN inversion networks</p>
            <p>• Performed Latent space arithmetic</p>
            <p>• Languages used: Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocalLength;
