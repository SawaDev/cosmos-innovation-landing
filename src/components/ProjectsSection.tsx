"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Smart City Platform",
    category: "IoT & Big Data",
    description: "Shahar infratuzilmasini real vaqtda kuzatish va boshqarish platformasi.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop",
  },
  {
    title: "AI Healthcare Assistant",
    category: "Sun'iy Intellekt",
    description: "Tibbiy diagnostika va tahlil uchun sun'iy intellekt yordamchisi.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
  },
  {
    title: "FinTech Solution",
    category: "Moliyaviy Texnologiyalar",
    description: "Zamonaviy to'lov tizimlari va moliyaviy xizmatlar platformasi.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.03) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-secondary font-display text-sm tracking-widest uppercase mb-4 block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Portfolio
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tanlangan <span className="gradient-text">Loyihalar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bizning eng muhim va muvaffaqiyatli loyihalarimiz bilan tanishing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                <motion.div 
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                >
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                </motion.div>
              </div>

              <div className="p-6 relative">
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <span className="text-secondary text-xs font-display tracking-wider uppercase relative z-10">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors duration-300 relative z-10">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button variant="hero-outline" size="lg">
              Barcha loyihalar
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
