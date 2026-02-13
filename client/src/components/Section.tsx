import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function Section({ id, className, children, title, subtitle }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32 relative overflow-hidden", className)}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24 max-w-3xl"
          >
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
                <span className="text-gradient">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="h-1 w-24 bg-primary rounded-full mt-6" />
          </motion.div>
        )}
        
        {children}
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-secondary rounded-full blur-[80px]" />
      </div>
    </section>
  );
}
