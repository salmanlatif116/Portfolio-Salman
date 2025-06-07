
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior AI Engineer',
      company: 'TechCorp AI Solutions',
      location: 'San Francisco, CA',
      period: 'Jan 2023 - Present',
      description: 'Lead development of enterprise AI solutions including RAG systems, AI agents, and automation pipelines. Architected scalable ML infrastructure serving 1M+ users.',
      technologies: ['Python', 'LangChain', 'FastAPI', 'AWS', 'Docker'],
      achievements: [
        'Built RAG system reducing query response time by 70%',
        'Developed AI agents increasing sales conversion by 45%',
        'Led team of 5 engineers on ML infrastructure'
      ]
    },
    {
      title: 'Backend Developer',
      company: 'DataFlow Systems',
      location: 'Austin, TX',
      period: 'Jun 2021 - Dec 2022',
      description: 'Developed high-performance APIs and microservices using Django and FastAPI. Implemented real-time data processing pipelines handling 10M+ events daily.',
      technologies: ['Django', 'FastAPI', 'PostgreSQL', 'Redis', 'Kubernetes'],
      achievements: [
        'Optimized API performance by 60% through caching strategies',
        'Built real-time analytics dashboard with 99.9% uptime',
        'Implemented automated testing reducing bugs by 40%'
      ]
    },
    {
      title: 'Python Developer',
      company: 'StartupX',
      location: 'Remote',
      period: 'Mar 2020 - May 2021',
      description: 'Built web applications and automation tools using Django. Integrated third-party APIs and developed custom solutions for client requirements.',
      technologies: ['Python', 'Django', 'REST APIs', 'PostgreSQL', 'Git'],
      achievements: [
        'Delivered 15+ client projects with 100% satisfaction rate',
        'Reduced manual processes by 80% through automation',
        'Mentored 3 junior developers'
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
