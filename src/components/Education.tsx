import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "National Diploma: Information Technology (Software Development)",
      institution: "Tshwane University of Technology",
      year: "Completed: 2024",
      type: "Diploma",
      status: "Completed",
      description: "Comprehensive program covering software development, programming languages, database management, and web technologies."
    },
    {
      degree: "National Senior Certificate",
      institution: "Machepelele Secondary School",
      year: "Completed: 2017",
      type: "Certificate",
      status: "Completed",
      description: "Secondary education with focus on mathematics and science subjects preparing for tertiary studies."
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-secondary">
            Education
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="cyber-card p-8 group animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-lg mr-4 group-hover:bg-secondary/30 transition-colors">
                        <GraduationCap className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center text-secondary font-semibold mt-1">
                          <MapPin size={16} className="mr-2" />
                          {edu.institution}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start lg:items-end space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar size={16} className="mr-2" />
                      {edu.year}
                    </div>
                    <div className="flex items-center">
                      <Award size={16} className="mr-2 text-accent" />
                      <span className="text-accent font-medium">{edu.type}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>

                <div className="mt-4 flex items-center">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    edu.status === 'Completed' 
                      ? 'bg-accent/20 text-accent' 
                      : 'bg-primary/20 text-primary'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;