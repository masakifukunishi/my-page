import "./globals.css";
import type { Metadata } from "next";

import Header from "../components/header";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Masaki Fukunishi",
  description: "Masaki Fukunishi is a full-stack web developer based in Japan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-pt-16 scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-gray-50 bg-background">
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
