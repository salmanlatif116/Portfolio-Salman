
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Python Django Developer',
    'FastAPI Expert',
    'AI Automation Specialist',
    'RAG System Architect',
    'AI Agents Developer'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < texts[currentIndex].length) {
          setCurrentText(texts[currentIndex].slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm</span>{' '}
            <span className="text-primary">Alex Johnson</span>
          </h1>
          
          <div className="text-2xl md:text-4xl text-muted-foreground mb-8 h-16 flex items-center justify-center">
            <span className="min-h-[1em]">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about building intelligent systems and scalable backend solutions. 
            Specializing in AI-powered applications, from RAG implementations to autonomous agents, 
            with expertise in Python, Django, FastAPI, and cutting-edge AI technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Github size={28} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
