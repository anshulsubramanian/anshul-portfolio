import Navigation from "@/components/Navigation";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anshulsubramanianapplications@gmail.com",
      href: "mailto:anshulsubramanianapplications@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/anshul-subramanian",
      href: "https://www.linkedin.com/in/anshul-subramanian/"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-6 pt-40 pb-20">
        <div className="mb-20">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-8 font-medium">
            CONTACT
          </p>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-foreground leading-tight">Get In Touch</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm always open to discussing new opportunities, innovative projects, or collaborations in AI and machine learning.
          </p>
        </div>

        <div className="space-y-6">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                target={item.label === "LinkedIn" ? "_blank" : undefined}
                rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="flex items-start gap-6 p-8 bg-card border border-border rounded-xl hover:border-secondary/30 transition-all group break-words"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                  <Icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">{item.label}</h3>
                  <p className="text-lg text-foreground group-hover:text-secondary transition-colors">{item.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-20 p-10 bg-card border border-border rounded-xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-lg">AI/ML</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Generative AI (GANs, Diffusion Models)</li>
                <li>• Computer Vision</li>
                <li>• Deep Learning</li>
                <li>• Image Processing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-lg">Development</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Python (NumPy, Pandas, scikit-learn)</li>
                <li>• Android Development</li>
                <li>• C/C++, Java</li>
                <li>• SQL, Batch Scripting</li>
                <li>• Vibe Coding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
