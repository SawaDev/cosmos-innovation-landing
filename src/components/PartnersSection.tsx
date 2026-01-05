"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "TechCorp", logo: "TC" },
  { name: "InnovateLab", logo: "IL" },
  { name: "DataSphere", logo: "DS" },
  { name: "CloudNine", logo: "C9" },
  { name: "AIVentures", logo: "AI" },
  { name: "SmartHub", logo: "SH" },
];

const PartnersSection = () => {
  return (
    <section className="py-16 relative overflow-hidden border-y border-border">
      {/* Animated line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
        animate={{ 
          backgroundPosition: ["0% 0%", "200% 0%"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 100%" }}
      />
      
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-muted-foreground text-sm font-display tracking-widest uppercase">
            Ishonchli Hamkorlar
          </span>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <motion.div 
                className="w-24 h-24 rounded-2xl glass-card flex items-center justify-center group cursor-pointer relative overflow-hidden"
                whileHover={{ 
                  scale: 1.1,
                  borderColor: "hsl(var(--primary) / 0.5)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
                  }}
                />
                <motion.span 
                  className="font-display text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10"
                  whileHover={{ scale: 1.1 }}
                >
                  {partner.logo}
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Animated line bottom */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent/30 to-transparent"
        animate={{ 
          backgroundPosition: ["200% 0%", "0% 0%"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 100%" }}
      />
    </section>
  );
};

export default PartnersSection;
