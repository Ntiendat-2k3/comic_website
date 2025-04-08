import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website Truyện Hay",
  description: "Đọc truyện online...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
      cz-shortcut-listen="true"
      cz-shortcut="true"
      cz-shortcut-autofocus="true"
      cz-shortcut-autofocus-allow="true"
      cz-shortcut-autofocus-allow-true="true"
      cz-shortcut-autofocus-allow-false="false"
      cz-shortcut-autofocus-allow-true-true="true"
      cz-shortcut-autofocus-allow-false-false="false"
      cz-shortcut-autofocus-allow-true-false="false"
      cz-shortcut-autofocus-allow-false-true="true"
      cz-shortcut-autofocus-allow-true-true-true="true"
      cz-shortcut-autofocus-allow-false-false-false="false"
      cz-shortcut-autofocus-allow-true-false-false="false"
      cz-shortcut-autofocus-allow-false-true-true="true"
      cz-shortcut-autofocus-allow-true-true-false="false"
      cz-shortcut-autofocus-allow-false-false-true="true"
      cz-shortcut-autofocus-allow-true-false-true="true"
      cz-shortcut-autofocus-allow-false-true-false="false"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
