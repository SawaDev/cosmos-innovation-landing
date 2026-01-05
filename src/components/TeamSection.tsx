"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Twitter } from "lucide-react";

const team = [
  {
    name: "Akbar Toshmatov",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Dilnoza Karimova",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Sardor Alimov",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Malika Rahimova",
    role: "AI Research Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding relative overflow-hidden bg-muted/30">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, transparent 70%)",
        }}
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-display text-sm tracking-widest uppercase mb-4 block">
            Jamoa
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Bizning <span className="gradient-text">Mutaxassislar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional va tajribali jamoa a'zolari bilan tanishing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover background glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 50% 30%, hsl(var(--primary) / 0.1) 0%, transparent 60%)",
                }}
              />
              
              <motion.div 
                className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                {/* Animated ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)), hsl(var(--primary)))",
                    padding: "4px",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-1 rounded-full overflow-hidden bg-card">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>
              
              <h3 className="font-display text-lg font-semibold mb-1 relative z-10">{member.name}</h3>
              <p className="text-secondary text-sm font-medium mb-4 relative z-10">{member.role}</p>
              
              <div className="flex justify-center gap-3 relative z-10">
                {[Linkedin, Github, Twitter].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
