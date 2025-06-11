import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EcoNova - Sustainable Technology",
  description: "Discover EcoNova, the innovative sustainable technology product that's changing the world.",
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang || 'en'}>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <LanguageSwitcher />
          {children}
        </div>
      </body>
    </html>
  );
}
