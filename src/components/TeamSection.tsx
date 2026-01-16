"use client";

import { members, Member } from "../../constants/members";
import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Youtube,
  Globe,
  Mail,
  Send,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";

const getSocialLinks = (member: Member) => {
  const links = [];
  if (member.linkedin_url)
    links.push({ icon: Linkedin, url: member.linkedin_url });
  if (member.github_url) links.push({ icon: Github, url: member.github_url });
  if (member.twitter_url)
    links.push({ icon: Twitter, url: member.twitter_url });
  if (member.instagram_url)
    links.push({ icon: Instagram, url: member.instagram_url });
  if (member.youtube_url)
    links.push({ icon: Youtube, url: member.youtube_url });
  if (member.website_url) links.push({ icon: Globe, url: member.website_url });
  if (member.email) links.push({ icon: Mail, url: `mailto:${member.email}` });
  if (member.telegram_url) links.push({ icon: Send, url: member.telegram_url });

  return links;
};

const TeamMemberSkeleton = () => (
  <div className="glass-card p-6 text-center relative overflow-hidden h-85 flex flex-col items-center justify-center animate-pulse">
    <div className="w-32 h-32 rounded-full bg-muted/50 mb-6 mx-auto" />
    <div className="h-6 w-32 bg-muted/50 rounded mb-2 mx-auto" />
    <div className="h-4 w-24 bg-muted/50 rounded mb-6 mx-auto" />
    <div className="flex gap-3 justify-center">
      <div className="w-9 h-9 rounded-full bg-muted/50" />
      <div className="w-9 h-9 rounded-full bg-muted/50" />
      <div className="w-9 h-9 rounded-full bg-muted/50" />
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <section
      id="team"
      className="section-padding relative overflow-hidden bg-muted/30"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
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
          background:
            "radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, transparent 70%)",
        }}
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="container-custom relative z-10 overflow-visible">
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

        <div className="relative group pt-12 overflow-visible">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={false}
            navigation={{
              prevEl: ".swiper-button-prev-team",
              nextEl: ".swiper-button-next-team",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-team",
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
                slidesPerView: 4.2,
                spaceBetween: 30,
              },
            }}
            className="pb-16"
          >
            {members
              .sort((a, b) => a.order - b.order)
              .map((member, index) => (
                <SwiperSlide key={member.name} className="pt-4 pb-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-500 relative overflow-hidden h-full"
                  >
                    {/* Hover background glow */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 30%, hsl(var(--primary) / 0.1) 0%, transparent 60%)",
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
                          background:
                            "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)), hsl(var(--primary)))",
                          padding: "4px",
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <div className="absolute inset-1 rounded-full overflow-hidden bg-card flex items-center justify-center">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <span className="text-muted-foreground text-[10px]">No Photo</span>
                          </div>
                        )}
                      </div>
                    </motion.div>

                    <h3 className="font-display text-lg font-semibold mb-1 relative z-10">
                      {member.name}
                    </h3>
                    <p className="text-secondary text-sm font-medium mb-4 relative z-10">
                      {member.role}
                    </p>

                    <div className="flex justify-center gap-3 relative z-10 flex-wrap">
                      {getSocialLinks(member).map((link, i) => (
                        <motion.a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          whileHover={{ scale: 1.15, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <link.icon className="w-4 h-4" />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20 swiper-button-prev-team">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20 swiper-button-next-team">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Custom Pagination */}
          <div className="swiper-pagination-team flex justify-center gap-2 mt-8" />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
