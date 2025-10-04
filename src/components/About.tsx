import { Code, Database, Globe, Server } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming",
      description: "Java, Python, C++, JavaScript, PHP"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "HTML5, CSS3, Bootstrap, Laravel"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database",
      description: "MySQL, NoSQL, SQL Server"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Version Control",
      description: "Git, GitHub, VS Code"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Result-driven IT and Software Development professional with hands-on experience in 
                programming, web development, and technical support. Skilled in Python, Java, C++, 
                PHP, HTML5, CSS, JavaScript, Bootstrap and Laravel, with strong knowledge of database 
                management (MySQL/SQL Server) and IT troubleshooting.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Adept at problem-solving, system maintenance and delivering efficient digital solutions 
                that improve performance and user experience. Currently seeking opportunities to apply 
                technical expertise and innovative thinking in a dynamic IT environment.
              </p>
              
              <div className="pt-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">Key Strengths</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Problem solving & analytical thinking
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Creativity & Innovation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Adaptability to new technologies
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Continuous learning mindset
                  </li>
                </ul>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="cyber-card p-6 text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;