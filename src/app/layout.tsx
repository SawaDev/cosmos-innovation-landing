import type { Metadata } from "next";
import { Orbitron, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://landing.cosmos-rnd.uz"),
  title: {
    default: "Cosmos Innovation R&D | Ilg'or Texnologiyalar",
    template: "%s | Cosmos Innovation R&D",
  },
  description: "Cosmos Innovation R&D — ilg'or texnologiyalar va innovatsion yechimlar yaratishga ixtisoslashgan tadqiqot va ishlab chiqish markazi",
  keywords: ["R&D", "Innovation", "Technology", "AI", "IoT", "Uzbekistan", "Research", "Development", "Cosmos Innovation"],
  authors: [{ name: "Cosmos Innovation R&D" }],
  creator: "Cosmos Innovation R&D",
  publisher: "Cosmos Innovation R&D",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://landing.cosmos-rnd.uz",
    siteName: "Cosmos Innovation R&D",
    title: "Cosmos Innovation R&D | Ilg'or Texnologiyalar",
    description: "Cosmos Innovation R&D — ilg'or texnologiyalar va innovatsion yechimlar yaratishga ixtisoslashgan tadqiqot va ishlab chiqish markazi",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cosmos Innovation R&D",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmos Innovation R&D | Ilg'or Texnologiyalar",
    description: "Cosmos Innovation R&D — ilg'or texnologiyalar va innovatsion yechimlar yaratishga ixtisoslashgan tadqiqot va ishlab chiqish markazi",
    images: ["/images/og-image.jpg"],
    creator: "@cosmosinnovation",
  },
  alternates: {
    canonical: "https://landing.cosmos-rnd.uz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body
        className={`${orbitron.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
