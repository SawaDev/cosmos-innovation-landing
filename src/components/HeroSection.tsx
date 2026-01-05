"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import StarField from "./StarField";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cosmic-bg">
      <StarField />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)" }}
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.25) 0%, transparent 70%)" }}
        animate={{ 
          y: [0, 20, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--secondary) / 0.15) 0%, transparent 70%)" }}
        animate={{ 
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Orbital rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div 
          className="absolute w-125 h-125 border border-primary/10 rounded-full"
          style={{ top: "-250px", left: "-250px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/40" />
        </motion.div>
        <motion.div 
          className="absolute w-175 h-175 border border-accent/5 rounded-full"
          style={{ top: "-350px", left: "-350px" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent/30" />
        </motion.div>
      </div>

      <div className="container-custom relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge with shimmer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 animate-shimmer-bg" />
            <Sparkles className="w-4 h-4 text-secondary relative z-10" />
            <span className="text-sm text-muted-foreground relative z-10">Innovation & Research Development</span>
          </motion.div>

          {/* Main Title with stagger */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[1.05] tracking-tight"
          >
            <motion.span 
              className="text-foreground inline-block"
              animate={{ 
                textShadow: [
                  "0 0 20px hsl(var(--primary) / 0)",
                  "0 0 60px hsl(var(--primary) / 0.4)",
                  "0 0 20px hsl(var(--primary) / 0)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Kelajakni
            </motion.span>
            <br />
            <span className="inline-block bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient-shift bg-size-[200%_auto]">
              Bugun Yaratamiz
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-body"
          >
            <span className="text-foreground/90 font-medium">Cosmos Innovation R&D</span> — ilg'or texnologiyalar va innovatsion yechimlar yaratishga ixtisoslashgan tadqiqot va ishlab chiqish markazi.
          </motion.p>

          {/* CTA Buttons with glow animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="hero" size="xl" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Loyihalarimiz
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-primary-foreground/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="hero-outline" size="xl">
                Biz haqimizda
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator with enhanced animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div 
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2"
            animate={{ 
              boxShadow: [
                "0 0 0 0 hsl(var(--primary) / 0)",
                "0 0 0 8px hsl(var(--primary) / 0.1)",
                "0 0 0 0 hsl(var(--primary) / 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
