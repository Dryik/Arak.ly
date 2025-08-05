import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Get <span className="text-transparent bg-clip-text bg-gradient-primary">Started</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your IT needs and create a custom solution that drives your business forward. 
            Our experts are ready to help you achieve your technology goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-background shadow-card-arak border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Get Your Free Consultation</CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and our experts will contact you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input placeholder="John" className="border-border focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input placeholder="Smith" className="border-border focus:border-primary" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <Input type="email" placeholder="john@company.com" className="border-border focus:border-primary" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Company</label>
                <Input placeholder="Your Company Name" className="border-border focus:border-primary" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone Number</label>
                <Input placeholder="+218 XXX XXX XXX" className="border-border focus:border-primary" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Tell us about your project</label>
                <Textarea 
                  placeholder="Describe your IT needs, challenges, or goals..." 
                  rows={4} 
                  className="border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button className="w-full bg-gradient-primary text-primary-foreground shadow-arak group">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-background shadow-card-arak border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Reach out to us directly through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+218 XXX XXX XXX</p>
                    <p className="text-muted-foreground">+218 XXX XXX XXX</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">info@arak.ly</p>
                    <p className="text-muted-foreground">support@arak.ly</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Tripoli, Libya</p>
                    <p className="text-muted-foreground">Serving all of Libya</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Business Hours</h4>
                    <p className="text-muted-foreground">24/7 Emergency Support</p>
                    <p className="text-muted-foreground">Sun-Thu: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary text-primary-foreground shadow-elevated">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Why Start Today?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary-foreground rounded-full"></div>
                    <span className="text-primary-foreground/90">Free consultation and system assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary-foreground rounded-full"></div>
                    <span className="text-primary-foreground/90">Custom solution designed for your needs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary-foreground rounded-full"></div>
                    <span className="text-primary-foreground/90">Flexible pricing for startups and enterprises</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary-foreground rounded-full"></div>
                    <span className="text-primary-foreground/90">24/7 expert support from day one</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};