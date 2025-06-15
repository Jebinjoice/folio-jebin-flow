
import { useEffect, useRef, useState } from "react";
import { Database, Lightbulb, BarChart3, Settings } from "lucide-react";

const Skills = () => {
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

  const skillCategories = [
    {
      icon: Database,
      title: "Data & Analytics",
      skills: ["Google BigQuery", "SQL", "Python", "Pandas", "Numpy", "Seaborn", "Matplotlib", "Tableau"]
    },
    {
      icon: Lightbulb,
      title: "Product & UX",
      skills: ["Wireframing", "Design Thinking", "Product Tours", "Intercom", "UserGuiding", "Roadmaps"]
    },
    {
      icon: BarChart3,
      title: "User Insights",
      skills: ["Mixpanel", "Hotjar", "Microsoft Clarity"]
    },
    {
      icon: Settings,
      title: "Project Management",
      skills: ["Jira", "Agile methodologies", "Lovable.ai"]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold text-slate-800 mb-16 text-center">
            Skills & Expertise
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 delay-${200 + index * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;
