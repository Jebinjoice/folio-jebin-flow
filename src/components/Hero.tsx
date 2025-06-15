
import { useEffect, useState } from "react";
import { ChevronDown, ArrowDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Subtle animated background elements */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Main heading with staggered animation */}
        <div className="space-y-8">
          <div
            className={`transition-all duration-1200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-slate-900 mb-6 tracking-tight leading-none">
              <span className="block font-extralight">Jebin</span>
              <span className="block font-light text-slate-700">Joice</span>
            </h1>
          </div>
          
          {/* Subtitle with delayed animation */}
          <div
            className={`transition-all duration-1200 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                Product Manager • Data Enthusiast • Writer
              </p>
              <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                Moto Enthusiast • Ex-DJ • Music Lover
              </p>
            </div>
          </div>
          
          {/* Profile image with sophisticated animation */}
          <div
            className={`transition-all duration-1500 ease-out delay-600 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-12">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-slate-300/20 blur-xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border border-slate-200/50 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
                  alt="Jebin Joice"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div
            className={`transition-all duration-1200 ease-out delay-900 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button
              onClick={scrollToAbout}
              className="group flex flex-col items-center space-y-2 mx-auto hover:scale-105 transition-transform duration-300"
            >
              <span className="text-sm text-slate-400 font-light tracking-wide">SCROLL TO EXPLORE</span>
              <ArrowDown className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
