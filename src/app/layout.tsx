import "./globals.css";
import type { Metadata } from "next";

import Header from "../components/header";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Masaki Fukunishi",
  description: "Masaki Fukunishi is a full-stack web developer based in Vancouver, Canada",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-pt-16 scroll-smooth">
      <body className="font-sans text-gray-50 bg-background">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
