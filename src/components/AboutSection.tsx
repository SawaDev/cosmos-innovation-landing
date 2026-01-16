"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Missiyamiz",
    description: "Innovatsion texnologiyalar orqali O'zbekiston va mintaqa uchun raqobatbardosh yechimlar yaratish.",
  },
  {
    icon: Lightbulb,
    title: "Maqsadimiz",
    description: "Ilm-fan va texnologiya sohasida jahon standartlariga mos keladigan tadqiqot markazi bo'lish.",
  },
  {
    icon: Rocket,
    title: "Qadriyatlarimiz",
    description: "Innovatsiya, sifat, hamkorlik va doimiy rivojlanish — bizning asosiy tamoyillarimiz.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-display text-sm tracking-widest uppercase mb-4 block">
            Biz haqimizda
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Cosmos Innovation</span> R&D
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Biz zamonaviy texnologiyalar va innovatsion yechimlar yaratishga ixtisoslashgan tadqiqot va ishlab chiqish markazimiz. 
            Jamomiz ilg'or texnologiyalar sohasida chuqur tajribaga ega mutaxassislardan iborat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card p-8 text-center group hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 relative z-10"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 30px hsl(var(--primary) / 0.4)"
                }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="font-display text-xl font-semibold mb-4 relative z-10">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
