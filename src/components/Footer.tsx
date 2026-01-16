"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  company: [
    { label: "Biz haqimizda", href: "#about" },
    { label: "Xizmatlar", href: "#services" },
    { label: "Loyihalar", href: "#projects" },
    { label: "Jamoa", href: "#team" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Hujjatlar", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Maxfiylik siyosati", href: "#" },
  ],
  social: [
    { label: "Telegram", href: "https://t.me/innovator_hayoti" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/cosmos_innovation?igsh=emZ3NXJ2eHJxaW15",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/cosmos-innovation-uz/",
    },
  ],
};

const developerInfo = {
  name: "Mahmudov Sardor",
  phone: "+998 94 640 86 46",
  telegram: "@sardor_isme",
  telegramUrl: "https://t.me/sardor_isme",
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/30">
      <div className="container-custom py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">
                  C
                </span>
              </div>
              <span className="font-display font-bold text-xl tracking-wider">
                COSMOS
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Innovatsion texnologiyalar va tadqiqotlar orqali kelajakni bugun
              yaratamiz.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display font-semibold mb-6">Kompaniya</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display font-semibold mb-6">Resurslar</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div> */}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display font-semibold mb-6">
              Ijtimoiy Tarmoqlar
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © 2026 Cosmos Innovation R&D. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex flex-col text-muted-foreground text-sm justify-center items-center gap-1">
            <a
              href={`tel:${developerInfo.phone.replace(/\s/g, "")}`}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm inline-flex items-center gap-1 group"
            >
              Developer bilan bog'lanish: {developerInfo.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
