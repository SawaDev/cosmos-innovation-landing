"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { rewards } from "../../constants/rewards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.03) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-custom relative z-10 overflow-visible">
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

        <div className="relative group pt-12 overflow-visible">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Mousewheel]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={false}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
              releaseOnEdges: true,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 30,
              },
            }}
            className="pb-16"
          >
            {rewards.map((reward, index) => (
              <SwiperSlide key={index} className="pt-4 pb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card overflow-hidden group/card h-full flex flex-col"
                >
                  <div className="relative overflow-hidden aspect-video">
                    {reward.image ? (
                      <motion.img
                        src={reward.image.src}
                        alt={reward.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.6 }}
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground text-xs">
                          Rasm mavjud emas
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" />
                  </div>

                  <div className="p-6 relative grow flex flex-col">
                    <motion.div className="absolute inset-0 bg-linear-to-r from-primary/5 to-accent/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    <span className="text-secondary text-xs font-display tracking-wider uppercase relative z-10">
                      {reward.owner}
                    </span>
                    <h3 className="font-display text-xl font-semibold mt-2 mb-3 group-hover/card:text-primary transition-colors duration-300 relative z-10">
                      {reward.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed relative z-10 grow">
                      {reward.description}
                    </p>
                    {/* <div className="mt-6 relative z-10">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group/btn p-0 hover:bg-transparent"
                      >
                        <span className="text-xs font-semibold mr-2">
                          Batafsil
                        </span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </Button>
                    </div> */}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20 swiper-button-prev-custom">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20 swiper-button-next-custom">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-8" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
