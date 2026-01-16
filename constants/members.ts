import image, { StaticImageData } from "next/image";
import member1 from "../public/images/members/member_1.jpeg";
import member2 from "../public/images/members/member_2.jpeg";
import member3 from "../public/images/members/member_3.jpeg";
import member4 from "../public/images/members/member_4.jpeg";
import member5 from "../public/images/members/member_5.jpeg";
import member6 from "../public/images/members/member_6.jpeg";
import member7 from "../public/images/members/member_7.jpeg";

export interface Member {
  name: string;
  role: string;
  description: string;
  image?: StaticImageData;
  instagram_url?: string;
  linkedin_url?: string;
  telegram_url?: string;
  github_url?: string;
  twitter_url?: string;
  youtube_url?: string;
  website_url?: string;
  email?: string;
  order: number;
}

export const members: Member[] = [
  {
    name: "Asadbek Urunov",
    role: "CEO",
    description:
      "Cosmos Innovation jamoasi lideri va Bodytester startapi asoschisi, O'zbekiston tarixidagi birinchi intellekt bilan erishilgan robototexnika ginnes rekordi loyihasi koordinatori",
    image: member1,
    instagram_url: "https://www.instagram.com/asadbek_urunov",
    linkedin_url: "https://www.linkedin.com/in/asadbek-urunov2702",
    telegram_url: "https://t.me/innovator_hayoti",
    order: 1,
  },
  {
    name: "Abduraxmonov Shoxjahon",
    role: "CTO",
    description:
      "Body Tester startupining asoschilaridan biri va dasturchisi. 7 yildan beri robototexnika bilan shug‘ullanib, software va hardware loyihalarni amalga oshiradi hamda dasturiy yechimlar yaratishda faol ishtirok etadi.",
    order: 1.5,
    instagram_url: "https://www.instagram.com/sh.abdirakhmonov/",
    telegram_url: "https://t.me/sh_abdirakhmonov",
  },
  {
    name: "Akbarshoh Boymirzayev",
    role: "Back-End Developer",
    description:
      "Cosmos-Innovation jamoasi tarkibidagi Back-end Developer,O'zbekiston tarixidagi birinchi intellekt bilan erishilgan robototexnika ginnes rekordi loyihasi tashkiliy ishlar bo'yicha guruh azosi",
    image: member2,
    linkedin_url: "https://www.linkedin.com/in/akbarshohboymirzayev/",
    telegram_url: "https://t.me/muhammad_codx",
    order: 2,
  },
  {
    name: "Akobir Sheraliyev",
    role: "3D designer",
    description: "Cosmos Innovation jamoasida 2D, 3D designer",
    image: member3,
    instagram_url: "https://www.instagram.com/akobir_sheraliyev_",
    telegram_url: "https://t.me/Milkyway_1001",
    order: 3,
  },
  {
    name: "Mirzaqulov Behro'z",
    role: "QA Engineer",
    description:
      "Cosmos Innovation jamoasida QA Engineer va Mini Kara loyihasi asoschisi, O'zbekiston tarixidagi birinchi intellekt bilan erishilgan robototexnika ginnes rekordi tashkiliy ishlar bo'yicha guruh a'zosi",
    image: member4,
    instagram_url: "https://www.instagram.com/behruz_mirzaqulov_",
    linkedin_url: "https://www.linkedin.com/in/behro-z-mirzaqulov-97079936b",
    telegram_url: "https://t.me/behruz_mirzaqulov",
    order: 4,
  },
  {
    name: "Qiyomov Sardor",
    role: "Kichik Injener",
    description:
      "Cosmos Innovation jamoasida kichik injener va O'zbekiston tarixidagi birinchi intellekt bilan erishilgan robototexnika ginnes rekordi tashkiliy ishlar bo'yicha guruh a'zosi",
    image: member5,
    instagram_url: "https://www.instagram.com/_isom1dd1novich",
    telegram_url: "https://t.me/isom1ddinovich",
    order: 5,
  },
  {
    name: "Dilmurodova Mahdiyabonu",
    role: "Engineer girl",
    description:
      "Cosmos Innovation jamoasidagi yagona qizbola engineer va Easy speaker loyihasi asoschisi, O'zbekiston tarixidagi birinchi intellekt bilan erishilgan robototexnika ginnes rekordi loyihasi tashkiliy guruh a'zosi",
    image: member6,
    instagram_url:
      "https://www.instagram.com/mahdiya_dilmurodova?igsh=ZWhocTI1YmMwMDZ5",
    telegram_url: "https://t.me/makhdiyaam",
    order: 6,
  },
  {
    name: "Mirzaqulov Yusuf",
    role: "Engineer",
    description:
      "Cosmos Innovation Jamoasi Azosi va Gidro Qalqon Sartapi asoschisi",
    image: member7,
    instagram_url: "https://www.instagram.com/yusuf_mirzaqulov",
    telegram_url: "https://t.me/yusuf_mirzaqulov",
    order: 7,
  },
];
