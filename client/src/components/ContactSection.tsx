import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { contactSchema } from '@shared/schema';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationResult = contactSchema.safeParse(formData);
    if (!validationResult.success) {
      const [firstError] = validationResult.error.issues;
      toast({
        title: "Invalid form data",
        description: firstError?.message ?? "Please review your input and try again.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validationResult.data),
      });

      const responseData = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to send message');
      }

      toast({
        title: "Message sent successfully!",
        description: responseData.message || "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Please try again or contact me directly via email.";
      toast({
        title: "Error sending message",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-on-scroll">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in new opportunities and challenging projects. 
                  Whether you're looking for a full-stack developer or want to collaborate on something exciting, 
                  feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4" data-testid="contact-email">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href="mailto:mohamedhasan8403@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      mohamedhasan8403@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4" data-testid="contact-phone">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a 
                      href="tel:+917339250739" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 7339250739
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4" data-testid="contact-location">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Avadi, Chennai, India</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Card className="flex-1 p-4 hover:bg-accent transition-colors cursor-pointer" data-testid="github-card">
                  <a 
                    href="https://github.com/mohamedhasan-coder" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center"
                  >
                    <Github className="h-8 w-8 text-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">GitHub</p>
                  </a>
                </Card>
                <Card className="flex-1 p-4 hover:bg-accent transition-colors cursor-pointer" data-testid="linkedin-card">
                  <a 
                    href="https://www.linkedin.com/in/mohamed-hasan-m-325051362/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center"
                  >
                    <Linkedin className="h-8 w-8 text-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                  </a>
                </Card>
              </div>
            </div>

            <div className="animate-on-scroll">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        minLength={2}
                        maxLength={100}
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        maxLength={254}
                        data-testid="input-email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        minLength={10}
                        maxLength={2000}
                        data-testid="input-message"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isSubmitting}
                      data-testid="submit-button"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
