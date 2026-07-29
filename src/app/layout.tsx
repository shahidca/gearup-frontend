import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import StripeProvider from "@/providers/StripeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "GearUp | Sports & Outdoor Gear Rental Marketplace",
    template: "%s | GearUp",
  },

  description:
    "Rent premium sports and outdoor equipment easily. Browse camping gear, bicycles, trekking equipment, cameras, and more with GearUp.",

  keywords: [
    "gear rental",
    "sports equipment",
    "camping gear",
    "bike rental",
    "camera rental",
    "outdoor gear",
    "GearUp",
  ],

  authors: [
    {
      name: "Md. Shahid Hossain",
    },
  ],

  creator: "Md. Shahid Hossain",

  openGraph: {
    title: "GearUp Rental Marketplace",

    description:
      "Rent sports & outdoor equipment easily.",

    url: "https://your-domain.com",

    siteName: "GearUp",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "GearUp Rental Marketplace",

    description:
      "Rent sports & outdoor equipment online.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
         <StripeProvider>
        <Providers>
          {children}
        </Providers>
        </StripeProvider>
      </body>
    </html>
  );
}