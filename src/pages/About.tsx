import Navigation from "@/components/Navigation";
import TimelineItem from "@/components/TimelineItem";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-5xl mx-auto px-6 pt-40 pb-20">
        {/* Header */}
        <div className="mb-20">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-8 font-medium">
            ABOUT ME
          </p>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-foreground leading-tight">Transforming Ideas Into Reality</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            AI/ML Engineer with 4+ years of experience building production-ready solutions at scale. 
            Specializing in generative AI, computer vision, and deep learning architectures.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My work focuses on developing innovative AI solutions that bridge the gap between research 
            and practical applications, with a particular emphasis on image processing, generative models, 
            and neural network optimization.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">Work Experience</h2>
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

        {/* Patents */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">Patents & Research</h2>
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

        {/* Additional Achievements */}
        <div className="mt-20 p-10 bg-card border border-border rounded-xl">
          <h3 className="text-3xl font-bold mb-8 text-foreground">Achievements</h3>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <span className="mr-3 text-secondary font-bold">•</span>
              <span>Led Patent Task Force resulting in 3 potential patents and 4 research proposals</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-secondary font-bold">•</span>
              <span>Selected in top 20 global proposals at Mobile Development Conference across all Samsung Research Institutes</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-secondary font-bold">•</span>
              <span>Lead presenter for Samsung flagship models at six high-profile Samsung Members events</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-secondary font-bold">•</span>
              <span>Addressed over 70 camera application cases including bug fixes and performance enhancements</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
