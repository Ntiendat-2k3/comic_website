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
      data-extension-installed=""
      data-extension-id="fakegmdomhmegokfomgmkbopjibonfcp"
      data-extension-version="2.0.3"
      data-extension-manifest-version="3"
      cz-shortcut-listen="true"
      fdprocessedid="sr8vem"
      fdprocessedid="xchmh"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
