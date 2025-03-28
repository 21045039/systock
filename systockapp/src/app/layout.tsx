import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "./dashboardWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SyStock",
  description: "Generated by create next app",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs" , "next14", "pwa", "next-pwa"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardWrapper>{children}</DashboardWrapper>
        
        </body>
    </html>
  );
}
