import { Github, ExternalLink, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
            <Code2 className="h-4 w-4" />
            My Work
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Featured Projects
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications built with Java, Spring Boot, React,
            SQL, and modern development technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const projectId = project.title
              .toLowerCase()
              .replace(/[^a-z0-9]/g, '-');

            return (
              <Card
                key={project.title}
                className="group relative overflow-hidden border-border/50 bg-card card-hover animate-on-scroll"
                data-testid={`project-${projectId}`}
              >

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />

                  {/* Project Number */}
                  <div className="absolute top-4 left-4">
                    <span className="flex items-center justify-center h-9 w-9 rounded-full bg-background/90 backdrop-blur-sm text-sm font-bold text-primary shadow-lg">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="absolute top-4 right-4">
                    {project.status === 'in-progress' ? (
                      <Badge
                        variant="secondary"
                        className="bg-background/90 backdrop-blur-sm"
                      >
                        In Progress
                      </Badge>
                    ) : (
                      <Badge
                        className="bg-primary/90 text-primary-foreground"
                      >
                        Completed
                      </Badge>
                    )}
                  </div>
                </div>

                <CardContent className="p-6">

                  {/* Title + Links */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-1 shrink-0">

                      {project.githubUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          data-testid={`github-${projectId}`}
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} source code on GitHub`}
                            className="rounded-full"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        </Button>
                      )}

                      {project.liveUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          data-testid={`live-${projectId}`}
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open live demo for ${project.title}`}
                            className="rounded-full"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      )}

                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-6 mb-5">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-primary/5 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 animate-on-scroll">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="gap-2"
          >
            <a
              href="https://github.com/mohamedhasan-m"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};
