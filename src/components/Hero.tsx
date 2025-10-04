import { useEffect, useState } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Software Developer', 'IT Professional', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/80"></div>
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-lg float"></div>
      <div className="absolute bottom-40 right-20 w-16 h-16 border border-secondary/30 rounded-full float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 border border-accent/30 rounded-lg float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text-primary">Pritty</span>{' '}
            <span className="gradient-text-secondary">Mathedimosa</span>
          </h1>

          {/* Dynamic Role */}
          <div className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center animate-slide-in-left">
            <span className="text-muted-foreground">I am a </span>
            <span className="ml-2 text-primary font-semibold min-w-[300px] text-left">
              {roles[currentRole]}
            </span>
          </div>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-in-right">
            Result-driven IT and Software Development professional with hands-on experience in programming, 
            web development, and technical support. Passionate about creating efficient digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button 
              size="lg" 
              className="btn-glow bg-primary hover:bg-primary/80 text-primary-foreground px-8"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a 
              href="https://github.com/prettymathedimasaa/prettyhub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 pulse-glow"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/prittymathedimosa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 pulse-glow"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:mathedimosapritty@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 pulse-glow"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce cursor-pointer" onClick={scrollToAbout}>
            <ChevronDown size={32} className="text-primary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;