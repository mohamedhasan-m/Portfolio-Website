import { Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  status: 'current' | 'completed';
  description?: string;
}

interface Certificate {
  title: string;
  issuer: string;
  url?: string;
}

const education: EducationItem[] = [
  {
    degree: 'B.E - Computer Science & Engineering',
    institution: 'Aalim Muhammed Salegh College of Engineering',
    duration: '2023 - 2027',
    grade: 'CGPA: 8.04/10.0',
    status: 'current'
  },
  {
    degree: 'Higher Secondary School',
    institution: 'St.Judes Matriculation Higher Secondary School',
    duration: '2021 - 2023',
    grade: 'Grade: 84%',
    status: 'completed',
    description: 'Stream: Maths-Biology'
  }
];

const certificates: Certificate[] = [
  {
    title: 'Frontend For Java Full Stack Development',
    issuer: 'Board Infinity',
    url: 'https://www.coursera.org/account/accomplishments/verify/FAIFKP1463CU'
  },
  {
    title: 'What is Data Science',
    issuer: 'IBM',
    url: 'https://www.coursera.org/account/accomplishments/verify/5NRJOF9G5WNI'
  },
  {
    title: 'Tools For Data Science',
    issuer: 'IBM',
    url: 'https://www.coursera.org/account/accomplishments/verify/EMNCUGHW3MEO'
  },
  {
    title: 'Data Science Methodology',
    issuer: 'IBM',
    url: 'https://www.coursera.org/account/accomplishments/verify/1V7W6T3SVQ1C'
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Education Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and continuous learning path
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border"></div>
            
            {education.map((edu, index) => (
              <div 
                key={edu.degree} 
                className={`relative flex items-center mb-12 animate-on-scroll ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${edu.status === 'current' ? 'bg-primary' : 'bg-muted'} rounded-full border-4 border-background`}></div>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="card-hover" data-testid={`education-${index}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant={edu.status === 'current' ? 'default' : 'secondary'}>
                          {edu.status === 'current' ? 'Current' : 'Completed'}
                        </Badge>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.duration}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h3>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.grade}</p>
                      {edu.description && (
                        <p className="text-sm text-muted-foreground mt-1">{edu.description}</p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-20 animate-on-scroll">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <Card key={cert.title} className="card-hover" data-testid={`certificate-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Award className="text-primary h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">{cert.title}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                      {cert.url && (
                        <a 
                          href={cert.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                          data-testid={`certificate-link-${index}`}
                        >
                          View Certificate →
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
