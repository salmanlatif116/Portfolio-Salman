
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Backend Development',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Django', level: 90 },
        { name: 'FastAPI', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Redis', level: 80 },
      ]
    },
    {
      category: 'AI & Machine Learning',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop',
      skills: [
        { name: 'LangChain', level: 92 },
        { name: 'RAG Systems', level: 90 },
        { name: 'AI Agents', level: 88 },
        { name: 'OpenAI APIs', level: 90 },
        { name: 'Hugging Face', level: 85 },
      ]
    },
    {
      category: 'DevOps & Tools',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'CI/CD', level: 82 },
        { name: 'Git', level: 90 },
        { name: 'Linux', level: 85 },
      ]
    }
  ];

  const technologies = [
    'Python', 'Django', 'FastAPI', 'PostgreSQL', 'Redis', 'MongoDB',
    'LangChain', 'OpenAI', 'Anthropic', 'Hugging Face', 'ChromaDB',
    'Docker', 'AWS', 'GCP', 'Kubernetes', 'Terraform', 'Git',
    'RAG', 'AI Agents', 'NLP', 'Vector Databases', 'Microservices'
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise in modern backend technologies and AI systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => (
            <Card key={category.category} className="border-border hover:shadow-xl transition-all duration-300 card-hover bg-card/50 backdrop-blur-sm">
              <div className="h-32 overflow-hidden rounded-t-lg">
                <img 
                  src={category.image} 
                  alt={category.category}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-center text-primary">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Technologies & <span className="gradient-text">Tools</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default hover:scale-105 bg-secondary/80 backdrop-blur-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
