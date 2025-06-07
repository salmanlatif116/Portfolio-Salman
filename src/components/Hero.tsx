
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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-primary/5 to-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Hi, I'm</span>{' '}
              <span className="gradient-text">Alex Johnson</span>
            </h1>
            
            <div className="text-2xl md:text-4xl text-muted-foreground mb-8 h-16 flex items-center justify-center lg:justify-start">
              <span className="min-h-[1em]">
                {currentText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed">
              Passionate about building intelligent systems and scalable backend solutions. 
              Specializing in AI-powered applications, from RAG implementations to autonomous agents, 
              with expertise in Python, Django, FastAPI, and cutting-edge AI technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-primary-foreground px-8 py-3 shadow-lg">
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 border-primary/20 hover:bg-primary/5">
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110">
                <Github size={28} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110">
                <Linkedin size={28} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110">
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Professional image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur-2xl opacity-30 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop&crop=face"
                alt="Developer workspace with code"
                className="relative rounded-2xl shadow-2xl w-96 h-96 object-cover border-4 border-white/10"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-blue-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-sm font-semibold">5+ Years</div>
                <div className="text-xs opacity-90">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
