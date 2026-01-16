import { StaticImageData } from "next/image";

export interface Reward {
  category: string;
  title: string;
  description: string;
  image?: StaticImageData;
}

export const rewards: Reward[] = [
  {
    category: "IoT & Big Data",
    title: "Smart City Platform",
    description:
      "Shahar infratuzilmasini real vaqtda kuzatish va boshqarish platformasi.",
  },
  {
    category: "Sun'iy Intellekt",
    title: "AI Healthcare Assistant",
    description:
      "Tibbiy diagnostika va tahlil uchun sun'iy intellekt yordamchisi.",
  },
  {
    category: "Moliyaviy Texnologiyalar",
    title: "FinTech Solution",
    description:
      "Zamonaviy to'lov tizimlari va moliyaviy xizmatlar platformasi.",
  },
];
