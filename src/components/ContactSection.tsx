import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import React from 'react';

export const ContactSection = () => {
  // Contact form state
  const [form, setForm] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<{ success?: boolean; error?: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Separate handler for select
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('/contact-form-handler.php', {
        method: 'POST',
        body: new FormData(e.target as HTMLFormElement),
      });
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ error: 'Failed to send. Please try again.' });
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Get{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">Started</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your IT needs and create a custom solution that drives your business
            forward. Our experts are ready to help you achieve your technology goals.
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
              <form onSubmit={handleSubmit} method="POST">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      className="border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="border-border focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Select a Service</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleSelectChange}
                    className="border border-border rounded-md px-3 py-2 w-full focus:border-primary"
                    required
                  >
                    <option value="">-- Choose a Service --</option>
                    <option value="Networking & Data Centers">Networking & Data Centers</option>
                    <option value="IT Support & MSP">IT Support & MSP</option>
                    <option value="Cloud & Cybersecurity">Cloud & Cybersecurity</option>
                    <option value="Communication Infrastructure">
                      Communication Infrastructure
                    </option>
                    <option value="Web & App Development">Web & App Development</option>
                    <option value="Hosting & Domains">Hosting & Domains</option>
                    <option value="Hardware Supply & Repair">Hardware Supply & Repair</option>
                    <option value="Business Solutions">Business Solutions</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <Input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+218 91 484 2885"
                    className="border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Tell us about your project
                  </label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your IT needs, challenges, or goals..."
                    rows={4}
                    className="border-border focus:border-primary resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-primary-foreground shadow-arak group"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                {result?.success && (
                  <p className="text-green-600 mt-2">Message sent successfully!</p>
                )}
                {result?.error && <p className="text-red-600 mt-2">{result.error}</p>}
              </form>
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
                    <p className="text-muted-foreground">+218 91 484 2885</p>
                    <p className="text-muted-foreground">+218 92 781 8080</p>
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
                    <span className="text-primary-foreground/90">
                      Free consultation and system assessment
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary-foreground rounded-full"></div>
                    <span className="text-primary-foreground/90">
                      Custom solution designed for your needs
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary-foreground rounded-full"></div>
                    <span className="text-primary-foreground/90">
                      Flexible pricing for startups and enterprises
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary-foreground rounded-full"></div>
                    <span className="text-primary-foreground/90">
                      24/7 expert support from day one
                    </span>
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
