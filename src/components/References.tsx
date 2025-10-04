import { User, Mail, Phone, Building } from 'lucide-react';

const References = () => {
  const references = [
    {
      name: "Hlatshwayo Josephine",
      position: "Mentor",
      organization: "Limpopo Department of Education",
      phone: "079 912 8811"
    },
    {
      name: "Dakalo Ramakhanya",
      position: "Mentor", 
      organization: "TechCode Hive(Pty) Ltd",
      email: "Techcodehive@gmail.com",
      phone: "081 755 7643"
    },
    {
      name: "Thapelo Moshasha",
      position: "Manager",
      organization: "Alladeen Concept Pty Ltd",
      email: "main.alladeen.co.za",
      phone: "063 644 1188"
    }
  ];

  return (
    <section id="references" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
            References
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional references who can attest to my work quality and character.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {references.map((ref, index) => (
              <div key={index} className="cyber-card p-6 animate-fade-in hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{ref.name}</h3>
                  <p className="text-accent font-medium">{ref.position}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-muted-foreground">
                    <Building className="w-4 h-4 mr-2 text-secondary" />
                    <span className="text-sm">{ref.organization}</span>
                  </div>
                  
                  {ref.email && (
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="w-4 h-4 mr-2 text-secondary" />
                      <a 
                        href={`mailto:${ref.email}`}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {ref.email}
                      </a>
                    </div>
                  )}
                  
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="w-4 h-4 mr-2 text-secondary" />
                    <a 
                      href={`tel:${ref.phone.replace(/\s/g, '')}`}
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {ref.phone}
                    </a>
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

export default References;