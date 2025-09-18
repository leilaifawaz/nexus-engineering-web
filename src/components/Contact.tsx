import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, openMailtoFallback, type ContactFormData } from "@/lib/emailService";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name must be at least 1 character").max(50, "First name must be less than 50 characters"),
  lastName: z.string().min(1, "Last name must be at least 1 character").max(50, "Last name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  projectDetails: z.string().min(10, "Please provide at least 10 characters describing your project").max(1000, "Project details must be less than 1000 characters"),
});

type FormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      serviceType: "",
      projectDetails: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Convert to ContactFormData format expected by email service
      const emailData: ContactFormData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        company: data.company,
        serviceType: data.serviceType,
        projectDetails: data.projectDetails,
      };

      // Try to send email via EmailJS
      await sendContactEmail(emailData);
      
      // Show success toast
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your interest. We'll get back to you within 72 hours.",
        variant: "default",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      
      // Show error toast with fallback option
      toast({
        title: "Having trouble sending your message?",
        description: "We couldn't send your message automatically. Would you like to open your email client instead?",
        variant: "destructive",
      });

      // Offer manual email fallback after a brief delay
      setTimeout(() => {
        const userWantsFallback = window.confirm(
          "Would you like to open your email client to send your message manually?"
        );
        if (userWantsFallback) {
          const emailData: ContactFormData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            company: data.company,
            serviceType: data.serviceType,
            projectDetails: data.projectDetails,
          };
          openMailtoFallback(emailData);
        }
      }, 2000);
    }
  };
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "ramez-haidar@emobilitynexus.com",
      link: "mailto:ramez-haidar@emobilitynexus.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Michigan, USA",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-4">
            <Send className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Connect with Your <span className="bg-electric-gradient bg-clip-text text-transparent">E-Mobility Nexus</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to advance your electrification journey? Contact us to discuss specialized training, 
            expert consulting, or workforce solutions tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Start Your Project Today</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="" className="border-border/50 focus:border-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="" className="border-border/50 focus:border-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="" className="border-border/50 focus:border-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company" className="border-border/50 focus:border-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-border/50 focus:border-primary">
                                <SelectValue placeholder="Select a service..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="high-voltage-training">High-Voltage Training & Certification</SelectItem>
                              <SelectItem value="engineering-consulting">Engineering Consulting</SelectItem>
                              <SelectItem value="workforce-contracting">Workforce Contracting & Staffing</SelectItem>
                              <SelectItem value="strategic-partnership">Strategic Partnership</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="projectDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project requirements, timeline, and goals..."
                              className="min-h-[120px] border-border/50 focus:border-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={form.formState.isSubmitting}
                      className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-electric"
                    >
                      {form.formState.isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <Card key={info.title} className="group hover:shadow-electric transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.details}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Additional Info */}
            <Card className="bg-subtle-gradient border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Our Commitment</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  At eMobility Nexus Engineering LLC, we are committed to being the connection point (nexus) 
                  between knowledge, people, and technology — empowering the future of electrification worldwide.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    Global reach & expertise
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    Safety & compliance focused
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    Innovation & excellence
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;