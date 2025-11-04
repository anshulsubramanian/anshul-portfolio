import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ProjectSection from "@/components/ProjectSection";
import InProgressCard from "@/components/InProgressCard";
import ExpertiseBanner from "@/components/ExpertiseBanner";
import LetsTalk from "@/components/LetsTalk";
import TimelineItem from "@/components/TimelineItem";
import { Briefcase, GraduationCap } from "lucide-react";
import aiProject from "@/assets/ai-project.png";
import docsProject from "@/assets/docs-project.png";
import weaponDetection from "@/assets/weapon_detection.png";
import ganSunnyBright from "@/assets/gan-sunny-bright.jpg";
import ganSnowy from "@/assets/gan-snowy.jpg";
import ganOvercast from "@/assets/gan-overcast.jpg";
import ganSunnyWarm from "@/assets/gan-sunny-warm.jpg";
import ganSnowyClear from "@/assets/gan-snowy-clear.jpg";
import ganOvercastCool from "@/assets/gan-overcast-cool.jpg";
import ganSunset from "@/assets/gan-sunset.jpg";
import ganSnowySoft from "@/assets/gan-snowy-soft.jpg";
import ganOvercastDark from "@/assets/gan-overcast-dark.jpg";
import ganNight from "@/assets/gan-night.jpg";
import focalVideo from "@/assets/focal_length.mp4";
import figmaProject from "@/assets/figma2android.png";
 
const Index = () => {
  const timeline = [
    {
      period: "Dec 2021 - Present",
      title: "Engineer",
      company: "Samsung Research and Development Institute Noida",
      location: "Noida, India",
      icon: Briefcase,
      highlights: [
        "Prepared a c-GAN based network to apply time and weather effects on images which will be deployed in future Samsung smartphones",
        "Individual developer of a C-GAN based network for image style transfer to be deployed in future Samsung smartphones",
        "Prepared a tool to convert Figma designs to Android XML layouts, currently being used internally by Samsung employees",
        "Travelled and co-worked with Samsung Headquarters for product quality and deployment",
        "Led a team of five engineers developing focal length translation solution using GAN networks",
        "Developed real-time facial recognition system for Android smartphones",
        "Handpicked to work in Noida Artificial Intelligence Task-force (NAIT) specializing in Generative AI",
        "Innovated cutting-edge architecture recognized as top solution at Mobile Development Conference",
      ]
    },
    {
      period: "July 2021 - Nov 2021",
      title: "Software Development Engineer",
      company: "Incedo Inc.",
      location: "Gurgaon, India",
      icon: Briefcase,
      highlights: [
        "Engaged with international clients to understand project requirements",
        "Automated critical client processes using Python, MySQL, and batch scripting",
        "Reduced manual task time from over 2 hours to less than 2 minutes through automation",
      ]
    },
    {
      period: "June 2017 - May 2021",
      title: "Bachelor in Computer Science and Engineering",
      company: "SRM Institute of Science and Technology",
      location: "NCR, India",
      icon: GraduationCap,
      highlights: [
        "Percentage: 91.25%",
        "Specialized in Artificial Intelligence and Machine Learning",
      ]
    }
  ];

  const patents = [
    {
      year: "2024",
      title: "Method and System For Converting One Or More Images At a Low Focal Length To a Higher Focal Length",
      number: "Patent Pending",
      status: "Pending",
      description: "Innovative computational photography technique enabling realistic focal length translation using deep learning architectures."
    },
    {
      year: "2022",
      title: "Method and System for Processing One or More Images of an Under Display Camera",
      number: "202211051020",
      status: "Published",
      description: "Novel approach to enhance image quality captured through under-display camera technology, addressing diffraction and light transmission challenges."
    }
  ];

  const projects = [
    {
      title: "GAN Based Time-Weather Translation",
      images: [
        ganSunnyBright,
        ganSnowy,
        ganOvercast,
        ganSunnyWarm,
        ganSnowyClear,
        ganOvercastCool,
        ganSunset,
        ganSnowySoft,
        ganOvercastDark,
        ganNight
      ],
      content: {
        overview: [
          "A Conditional GAN based method to translate an input image to 11 different time and weather combinations",
          "Wrote a guided filter to convert the image back to it's true resolution",
          "Prepared a dataset comprising of 115,000 images",
          "Solution ported on android device with a size of 155 MB and an inference time of 10 seconds on and S25 ultra",
          "Project integrated to Samsung devices and being tested for future commercialization",
          "Languages used: Python, Java, Kotlin, C"
        ]
      }
    },
    {
      title: "Focal Length Translation",
      video: focalVideo,
      content: {
        overview: [
          "Worked on a styleGAN approach and a conditional GAN approach to correct a distorted face taken at a low focal length to a higher focal length",
          "Prepared a dataset tailored to this problem, covering 7 different focal lengths and 5 different face orientations, making a total dataset size of 14,000 images",
          "Worked on GAN inversion networks",
          "Performed Latent space arithmetic",
          "Project submitted to Headquarters for future commercialization opportunities",
          "Languages used: Python"
        ]
      }
    },
    {
      title: "Figma To Android",
      image: figmaProject,
      content: {
        overview: [
          "Prepared a script to extract Figma file JSON and resources used node ids",
          "Wrote a translation layer to maintain the hierarchy and positioning of elements while making android XML",
          "Used Claude-Sonnet to improve element understanding",
          "Additionally set up a MCP with Cursor IDE for full application development",
          "Solution currently being used internally by Samsung employees",
          "Languages used: Python, Kotlin"
        ]
      }
    },
    {
      title: "Weapon Detection System",
      image: weaponDetection,
      content: {
        overview: [
          "A real-time computer vision solution to detect different types of weapons",
          "Prepared a dataset covering 13 types of weapons, comprising of 9000 images in total",
          "Trained a single shot detector model on this dataset via transfer learning",
          "Project selected in the top 10 final year projects at SRM Institute of Science and Technology",
          "Languages used: Python"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative z-10 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-7xl mx-auto px-6 pt-40 pb-32">
        <div className="max-w-5xl">
          <p className="text-sm uppercase tracking-wider text-white/80 mb-8 font-medium">
            AI/ML ENGINEER
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white leading-tight">
            Anshul Subramanian
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mb-12">
            AI/ML Engineer with 4+ years building production-ready solutions at scale. 
            Specializing in computer vision and deep learning.
          </p>
          <div className="flex gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-all shadow-medium hover:shadow-large"
            >
              Get In Touch
            </Link>
            <a 
              href="#projects" 
              className="px-8 py-4 bg-card text-foreground border border-border rounded-lg font-semibold hover:border-secondary/50 transition-all"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
      </div>

      {/* Expertise Banner */}
      <ExpertiseBanner />

      {/* Featured Projects */}
      <div id="projects" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-16">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectSection
              key={index}
              title={project.title}
              image={'image' in project ? (project as any).image : undefined}
              images={'images' in project ? (project as any).images : undefined}
              video={'video' in project ? (project as any).video : undefined}
              content={project.content}
            />
          ))}
        </div>
      </div>

      {/* Other Projects Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-32">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-16">Other Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InProgressCard
            title="Image Style Transfer"
            description="Conditional GAN network deployed in future Samsung devices with 10x smaller model size than diffusion networks."
          />
          <InProgressCard
            title="Natural Bokeh Gradation"
            description="Novel attention mechanism for enhanced segmentation with commercial deployment on Samsung smartphones."
          />
          <InProgressCard
            title="Mathematical OCR"
            description="Deep learning system for mathematical expression recognition and conversion."
          />
        </div>
      </div>

      {/* Patents Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-16">Patents & Research</h2>
        <div className="space-y-6">
          {patents.map((patent, index) => (
            <div key={index} className="p-8 bg-card border border-border rounded-xl hover:border-secondary/30 transition-all">
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm font-bold text-secondary uppercase tracking-wider">{patent.year}</span>
                <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1.5 rounded-lg uppercase tracking-wider">{patent.status}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground leading-relaxed mb-3">{patent.title}</h3>
              <p className="text-muted-foreground text-sm mb-2 font-mono">{patent.number}</p>
              <p className="text-muted-foreground leading-relaxed">{patent.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-16">Work Experience</h2>
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              period={item.period}
              title={item.title}
              company={item.company}
              location={item.location}
              highlights={item.highlights}
              icon={item.icon}
            />
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-16">Certifications</h2>
        <div className="space-y-6">
          <div className="p-8 bg-card border border-border rounded-xl hover:border-secondary/30 transition-all">
            <div className="flex items-start justify-between mb-4">
              <span className="text-sm font-bold text-secondary uppercase tracking-wider">Dec 2024</span>
            </div>
            <h3 className="text-xl font-bold text-foreground leading-relaxed mb-3">Certification on Applied Deep Learning for Computer Vision and Beyond</h3>
            <p className="text-muted-foreground leading-relaxed">IIT Ropar</p>
          </div>
          <div className="p-8 bg-card border border-border rounded-xl hover:border-secondary/30 transition-all">
            <div className="flex items-start justify-between mb-4">
              <span className="text-sm font-bold text-secondary uppercase tracking-wider">Jan 2024</span>
            </div>
            <h3 className="text-xl font-bold text-foreground leading-relaxed mb-3">Samsung Software Competency Test - Professional</h3>
            <p className="text-muted-foreground leading-relaxed">Samsung</p>
          </div>
          <div className="p-8 bg-card border border-border rounded-xl hover:border-secondary/30 transition-all">
            <div className="flex items-start justify-between mb-4">
              <span className="text-sm font-bold text-secondary uppercase tracking-wider">Jun 2023</span>
            </div>
            <h3 className="text-xl font-bold text-foreground leading-relaxed mb-3">Introduction to Generative AI Learning Path</h3>
            <p className="text-muted-foreground leading-relaxed">Google</p>
          </div>
          <div className="p-8 bg-card border border-border rounded-xl hover:border-secondary/30 transition-all">
            <div className="flex items-start justify-between mb-4">
              <span className="text-sm font-bold text-secondary uppercase tracking-wider">Aug 2019</span>
            </div>
            <h3 className="text-xl font-bold text-foreground leading-relaxed mb-3">Programming for Everybody (Getting Started With Python)</h3>
            <p className="text-muted-foreground leading-relaxed">Coursera</p>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-16">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-card border border-border rounded-xl hover:border-secondary/30 transition-all">
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-secondary font-bold">•</span> Employee of the quarter Q2 2024
            </p>
          </div>
          <div className="p-8 bg-card border border-border rounded-xl hover:border-secondary/30 transition-all">
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-secondary font-bold">•</span> Led Patent Task Force resulting in 3 potential patents and 4 research proposals
            </p>
          </div>
          <div className="p-8 bg-card border border-border rounded-xl hover:border-secondary/30 transition-all">
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-secondary font-bold">•</span> Selected in top 20 global proposals at Mobile Development Conference across all Samsung Research Institutes
            </p>
          </div>
          <div className="p-8 bg-card border border-border rounded-xl hover:border-secondary/30 transition-all">
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-secondary font-bold">•</span> Lead presenter for Samsung flagship models at six high-profile Samsung Members events
            </p>
          </div>
          <div className="p-8 bg-card border border-border rounded-xl hover:border-secondary/30 transition-all">
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-secondary font-bold">•</span> Addressed over 70 camera application cases including bug fixes and performance enhancements
            </p>
          </div>
        </div>
      </div>

      {/* Let's Talk Section */}
      <LetsTalk />
    </div>
  );
};

export default Index;
