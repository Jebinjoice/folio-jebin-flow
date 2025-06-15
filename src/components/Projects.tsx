
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Code, Zap } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Automation Module for MSPs",
      description: "Built comprehensive automation solutions to enhance Managed Service Provider efficiency and streamline operations.",
      tech: ["Python", "API Integration", "Automation"],
      impact: "Improved operational efficiency by 40%",
      icon: Zap
    },
    {
      title: "DeskDay Mobile App",
      description: "Launched mobile applications providing seamless access to MSP tools and client management on the go.",
      tech: ["Mobile Development", "UX Design", "API"],
      impact: "20% increase in user engagement",
      icon: Code
    },
    {
      title: "Microsoft Teams Integration",
      description: "Developed seamless integration between DeskDay platform and Microsoft Teams for enhanced collaboration.",
      tech: ["Microsoft Graph API", "Teams SDK", "Integration"],
      impact: "Enhanced team collaboration",
      icon: ExternalLink
    },
    {
      title: "NLP-Powered AI Reporting",
      description: "Initiated an intelligent reporting system using Natural Language Processing for automated insights generation.",
      tech: ["NLP", "Python", "AI/ML", "Data Analytics"],
      impact: "Reduced reporting time by 60%",
      icon: Zap
    },
    {
      title: "RBAC & Billing System",
      description: "Designed adaptable Role-Based Access Control and billing module with QuickBooks integration.",
      tech: ["RBAC", "QuickBooks API", "Security", "Billing"],
      impact: "Streamlined user management",
      icon: Code
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold text-slate-800 mb-16 text-center">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 delay-${100 + index * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-3 mt-auto">
                    <p className="text-sm text-slate-700 font-medium">
                      Impact: {project.impact}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
