
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Backend Development',
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
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise in modern backend technologies and AI systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => (
            <Card key={category.category} className="border-border hover:shadow-lg transition-all duration-300">
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
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
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
