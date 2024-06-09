import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${robotoBlack.variable} ${robotoBold.variable} ${robotoMedium.variable} ${robotoRegular.variable} ${montSemiBold.variable} ${montMedium.variable} ${montRegular.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
