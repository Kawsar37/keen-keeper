import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen Keeper",
  description: "Keen Keeper NextJS App",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} h-full`}
    >
      <body cz-shortcut-listen="true">
        <Navbar />
        <main className="min-h-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
