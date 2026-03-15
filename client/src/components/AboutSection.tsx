import { MapPin, GraduationCap, Code, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-on-scroll">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">My Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm Mohamed Hasan M, a passionate Java Full Stack Developer currently pursuing Computer Science Engineering 
                at Aalim Muhammed Salegh College of Engineering. With a strong foundation in both front-end and back-end 
                technologies, I love creating scalable web applications that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in technology started with curiosity about how websites work, which led me to dive deep into 
                full-stack development. I'm particularly passionate about clean code, user experience, and continuously 
                learning new technologies to stay ahead in this fast-evolving field.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="card-hover" data-testid="location-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Location</h4>
                  </div>
                  <p className="text-muted-foreground">Avadi, Chennai</p>
                </CardContent>
              </Card>

              <Card className="card-hover" data-testid="education-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Education</h4>
                  </div>
                  <p className="text-muted-foreground">B.E CSE (8.04 CGPA)</p>
                </CardContent>
              </Card>

              <Card className="card-hover" data-testid="experience-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <Code className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Experience</h4>
                  </div>
                  <p className="text-muted-foreground">Full Stack Development</p>
                </CardContent>
              </Card>

              <Card className="card-hover" data-testid="focus-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <Target className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Focus</h4>
                  </div>
                  <p className="text-muted-foreground">Java & React</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-center animate-on-scroll">
            <img 
              src="https://media.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.gif" 
              alt="Animated boy character coding" 
              className="w-full max-w-md rounded-2xl shadow-xl"
              data-testid="about-gif"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
