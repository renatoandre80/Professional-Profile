import { motion } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface ExperienceProps {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  skills: string[];
  index: number;
}

export function ExperienceCard({ role, company, period, description, skills, index }: ExperienceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="glass-card p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden">
        {/* Hover Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {role}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground mt-2 font-medium">
                <Building2 className="w-4 h-4" />
                <span>{company}</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 md:items-end text-sm text-muted-foreground/80">
              <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4" />
                <span>{period}</span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="bg-primary/10 text-primary border-transparent hover:bg-primary/20"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
