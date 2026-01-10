import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Noise from "@/components/ui/Noise";
import Cursor from "@/components/ui/Cursor";
import Terminal from "@/components/ui/Terminal";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hacker's Arsenal | Elite Bug Bounty Extensions",
  description: "Transform your bug bounty hunting workflow with impossible 3D geometry and elite tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-white`}
      >
        <Noise />
        <Cursor />
        {children}
        <Terminal />
      </body>
    </html>
  );
}
