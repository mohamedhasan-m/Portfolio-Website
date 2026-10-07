import { useState, useEffect } from 'react';
import { Eye, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import homeImage from '@assets/home.gif';

export const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Java Full Stack Developer",
    "UI/UX Designer", 
    "CS Enthusiast",
    "Problem Solver",
    "AI | ML | DSA Enthusiast"
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && typedText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % roles.length);
      timeout = setTimeout(() => {}, 500);
    } else {
      const nextText = isDeleting
        ? currentRole.substring(0, typedText.length - 1)
        : currentRole.substring(0, typedText.length + 1);
      
      timeout = setTimeout(() => setTypedText(nextText), isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting, roles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-on-scroll">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground">
                Hello, I'm <span className="text-primary">Mohamed Hasan</span>
              </h1>
              <div className="text-2xl lg:text-3xl font-semibold text-muted-foreground h-12">
                <span className="border-r-2 border-primary animate-pulse">
                  {typedText}
                </span>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Passionate Java Full Stack Developer with expertise in Spring Boot, React, and modern web technologies. 
                Currently pursuing Computer Science Engineering with a focus on creating scalable, user-friendly applications.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="view-work-button"
              >
                <Eye className="mr-2 h-4 w-4" />
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                data-testid="lets-connect-button"
              >
                <Mail className="mr-2 h-4 w-4" />
                Let's Connect
              </Button>
            </div>

            <div className="flex space-x-6 text-2xl">
              <a 
                href="https://github.com/mohamedhasan-coder" 
                className="text-muted-foreground hover:text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Mohamed Hasan's GitHub profile"
                data-testid="github-link"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamed-hasan-m-325051362/" 
                className="text-muted-foreground hover:text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Mohamed Hasan's LinkedIn profile"
                data-testid="linkedin-link"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:mohamedhasan8403@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Send an email to Mohamed Hasan"
                data-testid="email-link"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex justify-center animate-on-scroll">
            <div className="relative">
              <img
              src={homeImage}
              alt="Developer working animation"
              className="w-full max-w-lg rounded-2xl shadow-2xl animate-bounce-subtle"
              data-testid="hero-gif"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-full shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
