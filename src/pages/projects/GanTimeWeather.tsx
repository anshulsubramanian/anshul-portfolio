import Navigation from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import aiProject from "@/assets/ai-project.png";

const GanTimeWeather = () => {
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
          GAN Based Time-Weather Translation
        </h1>
        
        <div className="mb-16">
          <img 
            src={aiProject} 
            alt="GAN Based Time-Weather Translation"
            className="w-full h-[500px] object-cover rounded-2xl border border-border"
          />
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-8">Project Overview</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>• A Conditional GAN based method to translate an input image to 11 different time and weather combinations</p>
            <p>• Wrote a guided filter to convert the image back to it's true resolution</p>
            <p>• Prepared a dataset comprising of 115,000 images</p>
            <p>• Solution ported on android device with a size of 155 MB and an inference time of 10 seconds on and S25 ultra</p>
            <p>• Languages used: Python, Java, Kotlin, C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GanTimeWeather;
