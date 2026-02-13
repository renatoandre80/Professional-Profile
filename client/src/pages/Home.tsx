import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Brain, Cloud, Database, Activity, Mail, Send, Github, Linkedin, Terminal, Server, Shield } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { ExperienceCard } from "@/components/ExperienceCard";
import { SkillGroup } from "@/components/SkillGroup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useSubmitContact } from "@/hooks/use-contact";
import { insertMessageSchema } from "@shared/schema";

// Schema for contact form
const formSchema = insertMessageSchema;
type FormValues = z.infer<typeof formSchema>;

export default function Home() {
  const submitContact = useSubmitContact();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    submitContact.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Abstract Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
              Machine Learning <br/>
              <span className="text-gradient">Engineer</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Transforming raw data into intelligent solutions. Specializing in Generative AI, MLOps, and Cloud Infrastructure on GCP & AWS.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="rounded-full px-8 text-lg font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 text-lg hover:bg-white/5"
                onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Work
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Visual element representing AI/Network */}
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000"
                alt="AI Visualization" 
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10 opacity-90 mask-image-gradient"
                style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}
              />
              
              {/* Floating tech cards */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 p-4 bg-card/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl"
              >
                <Brain className="w-8 h-8 text-primary" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -left-6 p-4 bg-card/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl"
              >
                <Database className="w-8 h-8 text-secondary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <Section id="about" title="About Me" subtitle="Bridging the gap between research and production.">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-invert prose-lg text-muted-foreground">
            <p>
              I am a Machine Learning Engineer with a robust background in the full AI solution lifecycle. From 
              <span className="text-foreground font-medium"> Prompt Engineering</span> to 
              <span className="text-foreground font-medium"> Production Deployment</span>, 
              I specialize in building scalable, efficient systems.
            </p>
            <p className="mt-4">
              My expertise lies in integrating Generative AI (Gemini, LLMs) with enterprise infrastructure using 
              Google ADK and Vertex AI. I have a strong foundation in MLOps, ensuring that models aren't just 
              experimental but are robust, monitored, and valuable in production environments.
            </p>
            <p className="mt-4">
              Previously, I've worked in the Finance and Telecom sectors, securing data and building intelligent 
              automation pipelines.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Years Exp", value: "4+" },
              { label: "Projects", value: "20+" },
              { label: "Cloud", value: "GCP/AWS" },
              { label: "Focus", value: "GenAI" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card/40 border border-white/5 p-6 rounded-2xl text-center hover:bg-card/60 transition-colors"
              >
                <div className="text-3xl font-bold text-primary mb-1 font-display">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* EXPERIENCE SECTION */}
      <Section id="experience" title="Work Experience" subtitle="My professional journey in tech.">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <ExperienceCard 
            index={0}
            role="AI & MLOps Solutions Engineer"
            company="BeSolution"
            period="Apr 2025 - Present"
            description="Leading the development of Intelligent Agents using Google ADK and Gemini. Architecting RAG systems with AlloyDB and deploying scalable microservices on Cloud Run with FastAPI. Implementing comprehensive CI/CD pipelines for ML workflows."
            skills={["Google ADK", "Gemini", "Vertex AI", "Cloud Run", "FastAPI", "CI/CD"]}
          />
          <ExperienceCard 
            index={1}
            role="Machine Learning Engineer"
            company="NTT DATA Europe & Latam"
            period="Feb 2024 - Apr 2025"
            description="Developed ML solutions for the Finance Sector. Utilized Python, Pydantic, and Weaviate for Vector Search. Managed AWS infrastructure (Batch, ECS, EKS) and ensured system reliability through Datadog and Grafana."
            skills={["Python", "AWS ECS/EKS", "Weaviate", "Terraform", "Datadog", "Pytest"]}
          />
          <ExperienceCard 
            index={2}
            role="Data Analyst"
            company="Tacira Technologies"
            period="Feb 2022 - Feb 2024"
            description="Created BI reports and automated data processing pipelines. Focused on business indicators and process optimization through data insights."
            skills={["Data Analysis", "BI Tools", "Automation", "SQL"]}
          />
          <ExperienceCard 
            index={3}
            role="Cyber Security Analyst"
            company="TIM Brasil"
            period="Jan 2021 - Jan 2022"
            description="Managed Identity and Access Management (IAM/PAM) systems. Ensured secure access control protocols and monitored security incidents."
            skills={["IAM", "PAM", "Security", "Access Control"]}
          />
        </div>
      </Section>

      {/* SKILLS SECTION */}
      <Section id="skills" title="Technical Arsenal" subtitle="Tools and technologies I use to build the future." className="bg-white/5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillGroup 
            title="AI & ML" 
            icon={Brain}
            delay={0}
            skills={["Generative AI", "RAG", "LLMs (Gemini)", "Weaviate", "Scikit-learn", "Google ADK"]}
          />
          <SkillGroup 
            title="Cloud & DevOps" 
            icon={Cloud}
            delay={0.1}
            skills={["GCP Vertex AI", "AWS ECS/EKS", "Cloud Run", "Docker", "Kubernetes", "CI/CD"]}
          />
          <SkillGroup 
            title="Development" 
            icon={Terminal}
            delay={0.2}
            skills={["Python", "FastAPI", "Pydantic", "LangChain", "Git", "TypeScript"]}
          />
          <SkillGroup 
            title="Observability" 
            icon={Activity}
            delay={0.3}
            skills={["Grafana", "Datadog", "CloudWatch", "Pytest", "Unit Testing"]}
          />
        </div>
      </Section>

      {/* CONTACT SECTION */}
      <Section id="contact" className="pb-32">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto bg-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="p-8 md:p-12 bg-gradient-to-br from-primary/20 via-background to-background relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <div>
              <h3 className="text-3xl font-bold font-display mb-4">Let's Collaborate</h3>
              <p className="text-muted-foreground mb-8">
                Interested in building the next generation of AI solutions? I'm always open to discussing new projects, opportunities, or partnerships.
              </p>
              
              <div className="flex flex-col gap-6">
                <a href="mailto:contact@example.com" className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors">
                  <div className="p-3 bg-background/50 rounded-lg border border-white/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>contact@example.com</span>
                </a>
                <a href="#" className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors">
                  <div className="p-3 bg-background/50 rounded-lg border border-white/10">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span>LinkedIn Profile</span>
                </a>
                <a href="#" className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors">
                  <div className="p-3 bg-background/50 rounded-lg border border-white/10">
                    <Github className="w-5 h-5" />
                  </div>
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Usually responds within 24 hours</span>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-12 bg-card">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-background/50 border-white/10 focus:border-primary/50 h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@company.com" className="bg-background/50 border-white/10 focus:border-primary/50 h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          className="bg-background/50 border-white/10 focus:border-primary/50 min-h-[150px] resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  disabled={submitContact.isPending}
                >
                  {submitContact.isPending ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Section>
      
      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 text-center text-muted-foreground text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Machine Learning Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
