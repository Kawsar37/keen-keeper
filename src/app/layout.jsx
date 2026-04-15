import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContextProvider from "./context/ContextProvider";
import { ToastContainer } from "react-toastify";

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
        <ContextProvider>
          <Navbar />
          <main className="min-h-full">{children}</main>
          <Footer />
        </ContextProvider>
        <ToastContainer position="top-center" />
      </body>
    </html>
  );
}
