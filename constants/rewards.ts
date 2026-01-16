import { StaticImageData } from "next/image";
import reward1 from "../public/images/rewards/reward_1.jpeg";
import reward2 from "../public/images/rewards/reward_2.jpeg";
import reward3 from "../public/images/rewards/reward_3.jpeg";
import reward4 from "../public/images/rewards/reward_4.jpeg";
import reward5 from "../public/images/rewards/reward_5.jpeg";
import reward6 from "../public/images/rewards/reward_6.jpeg";
import reward7 from "../public/images/rewards/reward_7.jpeg";
import reward8 from "../public/images/rewards/reward_8.jpeg";
import reward9 from "../public/images/rewards/reward_9.jpeg";

export interface Reward {
  title: string;
  owner: string;
  description: string;
  image?: StaticImageData;
}

export const rewards: Reward[] = [
  {
    title: "Mard O'g'lon davlat mukofoti",
    owner: "Asadbek Urunov",
    description:
      "2024-yil 28-iyunda Asadbek Urunov 'Mard O'g'lon' davlat mukofoti bilan taqirlandi!",
    image: reward1,
  },
  {
    title: "MSITF Kelajak Transporti",
    owner: "Cosmos Innovation",
    description:
      "2025-yil 31-mayda 'Mudofa Sohasidagi innovatsion texnologiyalar festivali 2025' 'Kelajak transporti' yo'nalishi g'olibi.",
    image: reward2,
  },
  {
    title: "Eco Expo Central Asia Green Startap project",
    owner: "Cosmos Innovation",
    description:
      "2025-yil 21-iyunda 'Markaziy Osiyo Eco expo 2025' tanlovi 'Green Startap project' respublika bosqichi g'olibi.",
    image: reward3,
  },
  {
    title: "Mirzo Ulug'bek Respublika tanlovi 2024",
    owner: "Mirzaqulov Yusuf",
    description:
      "2024-yilda Respublika miqyosida o'tkazilgan Mirzo Ulug'bek vorislari Tuman Viloyat Respublika bosqichida g'olib bo'lgan.",
    image: reward4,
  },
  {
    title: "Mirzo Ulug'bek Respublika tanlovi 2025",
    owner: "Mirzaqulov Bexro'z",
    description:
      "2025-yil o'tkazilgan Mirzo Ulug'bek Musobaqasi Respublika bosqichi qatnashchisi",
    image: reward5,
  },
  {
    title: "Innovatsion G'oyalar Yetakchisi ko'krak nishoni",
    owner: "Dilmurodova Mahdiyabonu",
    description:
      "2025-yil 'Innovatsion G'oyalar Yetakchisi ko'krak nishoni'  sohibasi",
    image: reward6,
  },
  {
    title: "MSITF Eng faol ayol ixtirochi nominatsiyasi",
    owner: "Dilmurodova Mahdiya",
    description:
      "MSITF-2025 musobaqasida eng faol ayol ixtirochi nominatsiyasi g'olibi",
    image: reward7,
  },
  {
    title: "Bo'lajak olim tanlovi",
    owner: "Dilmurodova Mahdiyabonu",
    description:
      "2025-yil 3-fevral yoshlar akademiyasi tomonidan e'lon qilingan 'Bo'lajak olim' tanlovi doirasida 'Ayollar biznesi uchun birinchi qadam' ilmiy g'oyalar startap loyihalar tanlovining dastlabki bosqichidan muvaffaqiyatli o'tib g'olib bo'lgan",
    image: reward8,
  },
  {
    title:
      "kelajak muhandislari xalqaro festivali eng yaxshi ko'rgazma nominatsiyasi",
    owner: "Cosmos Innovation",
    description:
      "Cosmos Innovation jamoasi tomonidan 'Kelajak Muhandislari'  xalqaro festivalida tashkil qilingan loyihalar korgazmasi eng yaxshi ko'rgazma deb topildi",
    image: reward9,
  },
];
