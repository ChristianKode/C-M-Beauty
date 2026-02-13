import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "C&M Beauty Salon | Tidløs Eleganse",
  description: "Opplev førsteklasses skjønnhetsbehandlinger i en elegant og avslappende atmosfære.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} antialiased font-sans`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
