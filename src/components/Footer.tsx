import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/prettymathedimasaa/prettyhub",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/prittymathedimosa",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:mathedimosapritty@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/10 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <button 
              onClick={scrollToTop}
              className="text-3xl font-bold gradient-text-primary cursor-pointer hover:scale-105 transition-transform"
            >
              Pritty Mathedimosa
            </button>
            <p className="text-muted-foreground leading-relaxed">
              Software Developer passionate about creating innovative digital solutions 
              and leveraging technology to solve real-world problems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-muted/20 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300 pulse-glow"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Email:</strong><br />
                mathedimosapritty@gmail.com
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Phone:</strong><br />
                +27 76 897 3697
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Location:</strong><br />
                Pretoria, Gauteng, South Africa
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Pritty Mathedimosa. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Built with React, TypeScript, Tailwind CSS, Vite, Shadcn/ui, Lucide Icons
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;