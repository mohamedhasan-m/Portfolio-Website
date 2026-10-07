export const Footer = () => {
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
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground mb-4 md:mb-0" data-testid="footer-copyright">
            © 2026 Mohamed Hasan M. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              data-testid="footer-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              data-testid="footer-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              data-testid="footer-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              data-testid="footer-contact"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
