import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./styles.module.css";
import { BlogProvider } from "../context/context";
const font = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Blog Task",
  description: "Blog Task",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <BlogProvider>
      <html lang="tr" className={font.className}>
        <body className={styles.container}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </BlogProvider>
  );
};

export default RootLayout;
