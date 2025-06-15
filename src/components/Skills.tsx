
import { useEffect, useRef, useState } from "react";
import { Database, Lightbulb, BarChart3, Settings, Sparkles } from "lucide-react";

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
      { threshold: 0.2 }
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
      skills: ["Google BigQuery", "SQL", "Python", "Pandas", "Numpy", "Seaborn", "Matplotlib", "Tableau"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Product & UX",
      skills: ["Wireframing", "Design Thinking", "Product Tours", "Intercom", "UserGuiding", "Roadmaps"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "User Insights",
      skills: ["Mixpanel", "Hotjar", "Microsoft Clarity"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Settings,
      title: "Project Management",
      skills: ["Jira", "Agile methodologies", "Lovable.ai"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-6 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
              Skills & Expertise
            </h2>
            <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
              Crafting digital experiences through data-driven insights and innovative product solutions
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100/50 hover:shadow-lg transition-all duration-500 overflow-hidden">
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-light text-slate-900">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-flex items-center px-3 py-1.5 bg-slate-50 text-slate-700 rounded-full text-sm font-light border border-slate-100 hover:bg-slate-100 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
