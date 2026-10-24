import type { Metadata } from "next";
import type { ReactNode } from "react";
import "modern-normalize/modern-normalize.css";
import "./globals.css";
import TanStackProvider from "../components/TanStackProvider/TanStackProvider";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "NoteHub",
  description: "A simple app for managing personal notes",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
