
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'AI/ML', 'Backend', 'Automation'];
  
  const projects = [
    {
      title: 'Enterprise RAG System',
      description: 'Built a comprehensive RAG system for enterprise document analysis using LangChain, ChromaDB, and FastAPI. Handles 100k+ documents with real-time semantic search.',
      category: 'AI/ML',
      technologies: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'OpenAI'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'AI Sales Agent Platform',
      description: 'Developed autonomous AI agents for sales automation using multi-agent systems. Integrated with CRM and email platforms for end-to-end automation.',
      category: 'AI/ML',
      technologies: ['Python', 'LangChain', 'Django', 'PostgreSQL', 'Celery'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'High-Performance API Gateway',
      description: 'Built a scalable API gateway handling 10M+ requests/day with rate limiting, authentication, and real-time monitoring using FastAPI and Redis.',
      category: 'Backend',
      technologies: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'AWS'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'ML Pipeline Automation',
      description: 'Created automated ML pipelines for model training, validation, and deployment with MLOps best practices and continuous monitoring.',
      category: 'Automation',
      technologies: ['Python', 'MLflow', 'Apache Airflow', 'Docker', 'Kubernetes'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Smart Document Processing',
      description: 'Intelligent document processing system using OCR, NLP, and classification models to automate document workflows for legal firms.',
      category: 'AI/ML',
      technologies: ['Python', 'TensorFlow', 'spaCy', 'FastAPI', 'MongoDB'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Real-time Chat Analytics',
      description: 'Django-based platform for real-time chat analysis with sentiment analysis, topic modeling, and automated response suggestions.',
      category: 'Backend',
      technologies: ['Django', 'WebSockets', 'Redis', 'PostgreSQL', 'React'],
      github: '#',
      live: '#',
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of AI-powered applications and scalable backend systems
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`border-border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-foreground">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="mr-2" size={16} />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
