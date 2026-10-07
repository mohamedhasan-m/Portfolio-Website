import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="card-hover animate-on-scroll overflow-hidden" data-testid={`project-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
              <img 
                src={project.image} 
                alt={`${project.title} project preview`} 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.status === 'in-progress' ? (
                      <Badge variant="secondary">Coming Soon</Badge>
                    ) : (
                      <>
                        {project.githubUrl && (
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            data-testid={`github-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${project.title} source code on GitHub`}
                              className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            data-testid={`live-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open live demo for ${project.title}`}
                              className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-primary/10 text-primary">
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
