import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/Context/ThemeContext";
import Image from "next/image";
import color from "../../public/assets/logo-left-2.webp";
import ScrollToBottomButton from "@/components/scrollBottom";
import ScrollToTopButton from "@/components/ScrollTop";
import Home from "./pages/page";

export default function MyApp() {
  return (
    <div className="overflow-x-hidden">
      <ThemeProvider>
        <Navbar />
        <ScrollToBottomButton />
        <>
          <div className="fixed inset-0 pointer-events-none z-0">
            <Image
              src={color}
              alt="color-sharp"
              className="absolute w-[200px] top-36 md:top-60 right-0 lg:w-[350px] lg:top-28 lg:right-56"
              style={{ zIndex: 1 }}
              loading="lazy"
            />
          </div>
          <div className="fixed inset-0 pointer-events-none z-0">
            <div
              className="absolute bottom-1 right-[10%] w-64 h-64 bg-gradient-to-br from-[#FF512F]/5 to-[#FF512F]/5 dark:from-[#FF512F]/5 dark:to-[#FF512F]/5 
                     rounded-full blur-3xl"
            />
            <div
              className="absolute bottom-[30%] left-[5%] w-64 h-64 bg-gradient-to-br from-[#FF512F]/5 to-[#FF512F]/5 dark:from-[#FF512F]/5 dark:to-[#FF512F]/5 
                     rounded-full blur-3xl"
            />
          </div>

          <Home />
        </>
        <ScrollToTopButton />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
