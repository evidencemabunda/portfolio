import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Junior Software Developer",
      company: "Alladeen Concept Pty Ltd",
      location: "Pretoria, Gauteng",
      period: "May 2025 - Present",
      description: "Current role focusing on web development and software solutions.",
      responsibilities: [
        "Web Development using modern frameworks",
        "Laravel (PHP Framework) development",
        "Blade template engine implementation"
      ],
      type: "current"
    },
    {
      title: "Software Development Intern",
      company: "TechCode Hive (Pty) Ltd",
      location: "Louis Trichardt",
      period: "June 2023 – May 2024",
      description: "Comprehensive software development internship with focus on web technologies.",
      responsibilities: [
        "Built responsive, semantic and accessible web interfaces using HTML5 & CSS",
        "Developed automation scripts and backend services using Python",
        "Rapidly prototyped and built responsive, mobile-first web pages using Bootstrap"
      ],
      type: "past"
    },
    {
      title: "Technical Support Intern",
      company: "Limpopo Department of Education",
      location: "Giyani, Mopani",
      period: "May 2022 – April 2023",
      description: "Provided comprehensive technical support and system maintenance.",
      responsibilities: [
        "Microsoft operating system installation & update (Windows 7, 8, 10, 11)",
        "Network support and connectivity troubleshooting",
        "Computer to network connection setup",
        "Anti-virus installation and system updates",
        "Device, software & application support for end users",
        "Printer setup, configuration & incident resolution",
        "Database queries with MySQL & CRUD operations using PHP",
        "Modular, reusable JavaScript functions for front-end optimization"
      ],
      type: "past"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-secondary">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative mb-12 ml-16 animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-10 top-6 w-4 h-4 rounded-full border-2 ${
                  exp.type === 'current' ? 'bg-primary border-primary' : 'bg-secondary border-secondary'
                }`}></div>

                {/* Experience Card */}
                <div className="cyber-card p-6 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-primary font-semibold mb-2">
                        <Briefcase size={16} className="mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    
                    <div className="text-muted-foreground space-y-1">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;