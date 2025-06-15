
import { Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/jebinjoice",
      label: "LinkedIn"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/jebinjoice",
      label: "Instagram"
    },
    {
      icon: Mail,
      href: "mailto:jebinjoice@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-slate-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Jebin Joice</h3>
            <p className="text-slate-400">
              Product Manager | Data Enthusiast | Storyteller
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Jebin Joice. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
