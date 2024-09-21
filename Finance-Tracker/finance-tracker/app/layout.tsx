import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/LangingPage/Footer";
import ToasterProvider from "@/components/ToastProvider/ToastProvider";
import Providers from "@/lib/SessionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
    <html lang="en">
      <body className={inter.className}>
          <ToasterProvider />
        {children}
        <Footer />
        </body>
    </html>
    </Providers>
  );
}
