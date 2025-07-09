import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/Context/ThemeContext";
import Image from "next/image";
import color from "../../public/assets/logo-left-2.webp";
import ScrollToBottomButton from "@/components/scrollBottom";
import ScrollToTopButton from "@/components/ScrollTop";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"], // Add weights as needed
});


export const metadata = {
  title: "ReKnew - AI-Powered Enterprise Transformation & Intelligent Automation",
  description: "Transform your enterprise with ReKnew's AI-powered solutions. We help businesses reduce inefficiencies, automate workflows, and unlock growth opportunities through intelligent automation and data-driven insights.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} font-sans`} suppressHydrationWarning>
       
          <main className="min-h-screen transition-colors duration-300 overflow-x-hidden">
            {children}
          </main>
         
      </body>
    </html>
  );
}
