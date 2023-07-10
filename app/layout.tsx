import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Blog Task",
  description: "Blog Task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className={styles.container}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
