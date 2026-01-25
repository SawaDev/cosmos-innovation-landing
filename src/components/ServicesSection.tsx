"use client";

import { motion } from "framer-motion";
import { FlaskConical, Box, Wrench, Factory, Rocket, GraduationCap } from "lucide-react";

const services = [
  {
    icon: FlaskConical,
    title: "Tadqiqot va ilmiy izlanishlar",
    description: "Yangi texnologiyalarni o'rganish va sinovdan o'tkazish, energiya, aerokosmik, robototexnika bo'yicha ilmiy tadqiqotlar, texnik yechimlarning ilmiy asosini yaratish.",
  },
  {
    icon: Box,
    title: "Mahsulot ishlab chiqish (Product Development)",
    description: "Idea → prototip → MVP → pilot mahsulot, CAD/CAE dizayn (SolidWorks, NX ), Mexanik, elektron va embedded tizimlar dizayni, DFM/DFA (ishlab chiqarishga moslashtirish)",
  },
  {
    icon: Wrench,
    title: "Prototiplash va laboratoriya xizmatlari",
    description: "3D printing (PLA, ABS, Nylon, Carbon), CNC frezalash va tokarlik, PCB dizayn va yig'ish, Sensorlar, IoT qurilmalarini yig'ish",
  },
  {
    icon: Factory,
    title: "Sanoat va ishlab chiqarishga tayyorlash",
    description: "Texnologik jarayonlarni ishlab chiqish, Pilot liniya va kichik seriyali ishlab chiqarish",
  },
  {
    icon: Rocket,
    title: "Startap va innovatsiya qo'llab-quvvatlash",
    description: "Hardware startaplar uchun tech-mentoring, Texnik due diligence (investorlar uchun), Grant va tanlovlarga tayyorlash",
  },
  {
    icon: GraduationCap,
    title: "Ta'lim va kadrlar tayyorlash",
    description: "Injiniring bootcamplar, Talabalar va yosh muhandislar uchun stajirovka, Korporativ treninglar, Universitet–sanoat hamkorligi",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-muted/30">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-display text-sm tracking-widest uppercase mb-4 block">
            Yo'nalishlar
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Bizning <span className="gradient-text">Xizmatlarimiz</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ilg'or texnologiyalar sohasida keng qamrovli xizmatlar taqdim etamiz.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="glass-card p-8 group hover:border-primary/50 hover:bg-card/80 transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.1) 0%, transparent 50%)"
                }}
              />
              <motion.div 
                className="w-14 h-14 rounded-xl bg-linear-to-br from-primary to-accent flex items-center justify-center mb-6 relative z-10"
                whileHover={{ 
                  scale: 1.15,
                  rotate: 5,
                  boxShadow: "0 0 40px hsl(var(--primary) / 0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold mb-3 relative z-10">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
