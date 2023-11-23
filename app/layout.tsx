import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taylor Laughlin",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${robotoBlack.variable} ${robotoBold.variable} ${robotoMedium.variable} ${robotoRegular.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
