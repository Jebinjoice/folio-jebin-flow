
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
      { threshold: 0.2 }
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
    <section id="about" ref={sectionRef} className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-light text-slate-900 mb-20 text-center tracking-tight">
            About Me
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 ease-out delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                Hi, I'm Jebin Joice, a Product Manager, Data Enthusiast, Writer, Moto Enthusiast, Ex-DJ, and Music Lover. 
                Passionate about transforming complex problems into compelling stories, I believe deeply in the butterfly effect—where 
                small actions spark extraordinary outcomes, illuminating paths no one previously envisioned.
              </p>
            </div>
            
            {/* Education Cards */}
            <div
              className={`transition-all duration-1000 ease-out delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl font-light text-slate-900 mb-8">Education</h3>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="group p-6 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-all duration-300 border border-slate-100/50">
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-slate-700 font-light">{item}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Quote Section */}
          <div
            className={`transition-all duration-1000 ease-out delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 text-blue-200 text-6xl font-serif">"</div>
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-8 md:p-12 border border-slate-100/50">
                <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed font-light italic">
                  My peace lies within stories and the boundless freedom of the open road. I hold a strong belief that 
                  purpose isn't given—it's sculpted from our experiences, shaped by shades of grey guiding us toward what's authentic. 
                  I am driven by entrepreneurs' unwavering persistence, their ability to turn vision into reality, and I meticulously 
                  build every detail, one piece at a time.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
