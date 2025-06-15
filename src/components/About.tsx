
import { useEffect, useRef, useState } from "react";

const About = () => {
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

  const education = [
    "Data Science & Machine Learning",
    "MBA in Finance & Systems",
    "B.Com in Computer Applications"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold text-slate-800 mb-16 text-center">
            About Me
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Hi, I'm Jebin Joice, a Product Manager, Data Enthusiast, Writer, Moto Enthusiast, Ex-DJ, and Music Lover. 
              Passionate about transforming complex problems into compelling stories, I believe deeply in the butterfly effect—where 
              small actions spark extraordinary outcomes, illuminating paths no one previously envisioned.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 delay-${300 + index * 100} ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 shadow-lg">
              <blockquote className="text-lg text-slate-700 leading-relaxed italic">
                "My peace lies within stories and the boundless freedom of the open road. I hold a strong belief that 
                purpose isn't given—it's sculpted from our experiences, shaped by shades of grey guiding us toward what's authentic. 
                I am driven by entrepreneurs' unwavering persistence, their ability to turn vision into reality, and I meticulously 
                build every detail, one piece at a time."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
