import { useState } from 'react';
import { Code2, Database, Globe, Settings, Users, Lightbulb } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const skillCategories = {
    technical: {
      title: "Technical Skills",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Java", level: 85, category: "Programming" },
        { name: "Python", level: 90, category: "Programming" },
        { name: "C++", level: 80, category: "Programming" },
        { name: "JavaScript", level: 85, category: "Programming" },
        { name: "PHP", level: 88, category: "Programming" },
        { name: "HTML5", level: 95, category: "Web Development" },
        { name: "CSS3", level: 90, category: "Web Development" },
        { name: "Bootstrap", level: 85, category: "Web Development" },
        { name: "Laravel", level: 80, category: "Backend" },
        { name: "MySQL", level: 85, category: "Database" },
        { name: "SQL Server", level: 80, category: "Database" },
        { name: "NoSQL", level: 75, category: "Database" },
        { name: "Git", level: 85, category: "Version Control" },
        { name: "GitHub", level: 90, category: "Version Control" },
        { name: "VS Code", level: 95, category: "Tools" }
      ]
    },
    soft: {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: [
        { name: "Problem Solving", level: 95, category: "Analytical" },
        { name: "Analytical Thinking", level: 90, category: "Analytical" },
        { name: "Creativity", level: 85, category: "Innovation" },
        { name: "Innovation", level: 80, category: "Innovation" },
        { name: "Adaptability", level: 90, category: "Learning" },
        { name: "Continuous Learning", level: 95, category: "Learning" },
        { name: "Time Management", level: 85, category: "Organization" },
        { name: "Organization", level: 88, category: "Organization" }
      ]
    }
  };

  const categoryIcons = {
    technical: <Code2 className="w-5 h-5" />,
    soft: <Users className="w-5 h-5" />
  };

  const getSkillColor = (category: string) => {
    const colors = {
      'Programming': 'bg-primary',
      'Web Development': 'bg-secondary', 
      'Backend': 'bg-accent',
      'Database': 'bg-neon-purple',
      'Version Control': 'bg-neon-green',
      'Tools': 'bg-neon-pink',
      'Analytical': 'bg-primary',
      'Innovation': 'bg-secondary',
      'Learning': 'bg-accent',
      'Organization': 'bg-neon-purple'
    };
    return colors[category] || 'bg-primary';
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-muted/20 rounded-lg p-1">
              {Object.entries(skillCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all duration-300 ${
                    activeCategory === key
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {categoryIcons[key]}
                  <span className="font-medium">{category.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="cyber-card p-6 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="mb-2">
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.category)}`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
                
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;