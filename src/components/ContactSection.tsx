"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    label: "Manzil",
    value: "Turin Politexnika Universiteti",
    url: "https://www.google.com/maps?q=41.3519842,69.2208173",
  },
  // {
  //   icon: Phone,
  //   label: "Telefon",
  //   value: "+998 71 123 45 67",
  //   url: "tel:+998711234567",
  // },
  {
    icon: Mail,
    label: "Email",
    value: "info@cosmos-rd.uz",
    url: "mailto:info@cosmos-rd.uz",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch("https://formspree.io/f/xaqqqnzq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Xabar yuborildi!", {
          description: "Tez orada siz bilan bog'lanamiz.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        if (data.errors) {
          toast.error("Xatolik yuz berdi", {
            description: data.errors.map((error: any) => error.message).join(", "),
          });
        } else {
          toast.error("Xatolik yuz berdi", {
            description: "Xabarni yuborishda muammo bo'ldi. Iltimos, qayta urinib ko'ring.",
          });
        }
      }
    } catch (error) {
      toast.error("Xatolik yuz berdi", {
        description: "Xabarni yuborishda muammo bo'ldi. Iltimos, qayta urinib ko'ring.",
      });
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-125 h-125 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-100 h-100 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-display text-sm tracking-widest uppercase mb-4 block">
            Kontakt
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Biz bilan <span className="gradient-text">Bog'laning</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Loyihangiz haqida gaplashishga tayyormiz. Biz bilan bog'laning!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-semibold mb-8">
              Kontakt Ma'lumotlari
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm block mb-1">
                      {info.label}
                    </span>
                    {!!info.url ? (
                      <a
                        href={info.url || ""}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium">
                        {info.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-10 h-64 rounded-xl glass-card overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=41.3519842,69.2208173&z=15&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(1) invert(0.9) contrast(1.2)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 md:p-10">
              <h3 className="font-display text-2xl font-semibold mb-6">
                Xabar Yuboring
              </h3>
              <form
                action="https://formspree.io/f/xaqqqnzq"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Ismingiz
                  </label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Ismingizni kiriting"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Email yoki Telefon
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email yoki telefon raqamingiz"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Xabaringiz
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Xabaringizni yozing..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  Yuborish
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
