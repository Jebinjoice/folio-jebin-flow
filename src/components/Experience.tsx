
import { useEffect, useRef, useState } from "react";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
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

  const experiences = [
    {
      title: "Associate Product Manager",
      company: "DeskDay",
      period: "2022 – Present",
      achievements: [
        "Built automation modules enhancing MSP efficiency",
        "Launched two mobile apps and integrated solutions with Microsoft Teams",
        "Developed billing module seamlessly integrating QuickBooks",
        "Initiated an NLP-based AI reporting system",
        "Designed adaptable RBAC and user permission systems",
        "Led UX improvements, increasing onboarding activations by 20%",
        "Presented to global clients, authored 350+ detailed product guides and PRDs"
      ]
    },
    {
      title: "Process Associate",
      company: "Cognizant",
      period: "2021 – 2022",
      achievements: [
        "Assessed and categorized mobile applications for Google Play compliance"
      ]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold text-slate-800 mb-16 text-center">
            Experience
          </h2>
        </div>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${200 + index * 200} ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <div className="relative pl-16">
                  <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-slate-600">
                          <div className="flex items-center space-x-2">
                            <Building2 className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-slate-700 leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
