import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'experience', 'skills', 'education', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', href: '#home', section: 'home' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Experience', href: '#experience', section: 'experience' },
    { name: 'Skills', href: '#skills', section: 'skills' },
    { name: 'Education', href: '#education', section: 'education' },
    { name: 'Contact', href: '#contact', section: 'contact' },
    { name: 'References', href: '/references', section: 'references', isPage: true },
  ];

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.isPage) {
      window.location.href = item.href;
    } else {
      if (location.pathname !== '/') {
        window.location.href = '/' + item.href;
      } else {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'cyber-card backdrop-blur-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text-primary">
            PM
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = (location.pathname === '/' && activeSection === item.section) || 
                             (location.pathname === '/references' && item.section === 'references');
              
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`transition-colors duration-300 relative group ${
                    isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              );
            })}
            <Button 
              onClick={() => handleNavigation({ name: 'Contact', href: '#contact', section: 'contact' })}
              className="btn-glow bg-primary hover:bg-primary/80"
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = (location.pathname === '/' && activeSection === item.section) || 
                               (location.pathname === '/references' && item.section === 'references');
                
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className={`transition-colors duration-300 text-left ${
                      isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              <Button 
                onClick={() => handleNavigation({ name: 'Contact', href: '#contact', section: 'contact' })}
                className="btn-glow bg-primary hover:bg-primary/80 w-fit"
              >
                Let's Connect
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;