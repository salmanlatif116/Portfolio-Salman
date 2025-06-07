
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Backend & AI Developer',
      company: 'Tekvix',
      location: 'Lahore, Pakistan',
      period: 'Aug 2024 – Aug 2025',
      description: `Built scalable APIs, real-time data pipelines, and enterprise AI solutions using Django, FastAPI, and Python. Developed RESO, RETS, and IDX systems for real estate platforms.`,
      technologies: [
        'Python Scripting',
        'Django REST Framework',
        'FastAPI',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'AI Agents',
        'RAG Systems',
        'AI Automation',
        'RESO',
        'RETS',
        'IDX'
      ],
      achievements: [
        'Boosted API speed by 60% using Redis caching and optimized queries',
        'Built real-time dashboard with 99.9% uptime using MongoDB',
        'Developed AI agents for automated support, reducing manual work by 70%',
        'Implemented RAG pipelines for smart content retrieval',
        'Automated backend ops, cutting deployment time by 50%',
        'Reduced bugs by 40% via comprehensive test coverage',
        'Designed async microservices with Celery and Redis',
        'Delivered RESO-compliant RETS/IDX integration for real estate listings'
      ]
    }
  ];
  
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            Building innovative solutions with cutting-edge technologies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground mb-2">
                      {experience.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-primary">
                      {experience.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-muted-foreground">
                      <CalendarDays size={16} className="mr-2" />
                      {experience.period}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin size={16} className="mr-2" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {experience.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
