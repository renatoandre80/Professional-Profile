import { motion } from "framer-motion";

interface SkillGroupProps {
  title: string;
  skills: string[];
  icon: React.ElementType;
  delay: number;
}

export function SkillGroup({ title, skills, icon: Icon, delay }: SkillGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card/30 border border-white/5 rounded-2xl p-6 hover:bg-card/50 transition-colors"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-primary/10 text-primary">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold font-display">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <div 
            key={skill}
            className="px-3 py-1.5 bg-background border border-border rounded-md text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
