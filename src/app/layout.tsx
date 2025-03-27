import type { Metadata } from "next";
import { Geist, Geist_Mono, Lusitana } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client_layout"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lusitana = Lusitana({
  variable: "--font-lusitana",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Showcasing my projects & skills",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${lusitana.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout> 
      </body>
    </html>
  );
}
