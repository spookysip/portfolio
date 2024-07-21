import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matt Laughlin",
  description: "Full-Stack Developer",
};

const robotoBlack = localFont({
  src: "../public/fonts/Roboto-Black.woff2",
  display: "swap",
  variable: "--font-roboto-black",
});

const robotoBold = localFont({
  src: "../public/fonts/Roboto-Bold.woff2",
  display: "swap",
  variable: "--font-roboto-bold",
});

const robotoMedium = localFont({
  src: "../public/fonts/Roboto-Medium.woff2",
  display: "swap",
  variable: "--font-roboto-medium",
});

const robotoRegular = localFont({
  src: "../public/fonts/Roboto-Regular.woff2",
  display: "swap",
  variable: "--font-roboto-regular",
});

const montRegular = localFont({
  src: "../public/fonts/Montserrat-Regular.woff2",
  display: "swap",
  variable: "--font-mont-regular",
});

const montMedium = localFont({
  src: "../public/fonts/Montserrat-Medium.woff2",
  display: "swap",
  variable: "--font-mont-medium",
});

const montSemiBold = localFont({
  src: "../public/fonts/Montserrat-SemiBold.woff2",
  display: "swap",
  variable: "--font-mont-semibold",
});

const pixel = localFont({
  src: "../public/fonts/Pixel.woff2",
  display: "swap",
  variable: "--font-pixel",
});

const fat = localFont({
  src: "../public/fonts/Fat-Font-Slanted.woff2",
  display: "swap",
  variable: "--font-fat",
});

const sango = localFont({
  src: "../public/fonts/Sango-Static.woff2",
  display: "swap",
  variable: "--font-sango",
});

const canobis = localFont({
  src: "../public/fonts/Canobis.woff2",
  display: "swap",
  variable: "--font-canobis",
});

const quiny = localFont({
  src: "../public/fonts/Quiny.woff2",
  display: "swap",
  variable: "--font-quniy",
});

const raider = localFont({
  src: "../public/fonts/Raider.woff2",
  display: "swap",
  variable: "--font-raider",
});

const bogam = localFont({
  src: "../public/fonts/Bogam.woff2",
  display: "swap",
  variable: "--font-bogam",
});

const dela = localFont({
  src: "../public/fonts/Dela.woff2",
  display: "swap",
  variable: "--font-dela",
});

const joyride = localFont({
  src: "../public/fonts/Joyride.woff2",
  display: "swap",
  variable: "--font-joyride",
});

const dirtyline = localFont({
  src: "../public/fonts/Dirtyline.woff2",
  display: "swap",
  variable: "--font-dirtyline",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${robotoBlack.variable} ${robotoBold.variable} ${robotoMedium.variable} ${robotoRegular.variable} ${montSemiBold.variable} ${montMedium.variable} ${montRegular.variable} ${pixel.variable} ${fat.variable} ${sango.variable} ${canobis.variable} ${quiny.variable} ${raider.variable} ${bogam.variable} ${dela.variable} ${joyride.variable} ${dirtyline.variable}`}
    >
      <Head>
        <link rel="preload" href="/me.jpg" as="image" />
        <link rel="preload" href="/awards_1.jpg" as="image" />
        <link rel="preload" href="/awards_2.jpg" as="image" />
        <link rel="preconnect" href="https://vimeo.com/983668282" />
        <link rel="preconnect" href="https://vimeo.com/983677026" />
        <link rel="preconnect" href="https://vimeo.com/245921296" />
        <link rel="preconnect" href="https://vimeo.com/983671844" />
        <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/lite-vimeo-embed/+esm"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
