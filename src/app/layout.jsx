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


export const metaData = {
  "/about-us": {
    title: "About Us | ReKnew",
    description: "Learn about ReKnew's mission and team.",
    image: "https://yourdomain.com/about-og-image.jpg"
  },
  "/contact": {
    title: "Contact Us | ReKnew",
    description: "Get in touch with us for support and queries.",
    image: "https://yourdomain.com/contact-og-image.jpg"
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} font-sans`} suppressHydrationWarning>
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
          </>
          <main className="min-h-screen transition-colors duration-300 overflow-x-hidden">
            {children}
          </main>
          <ScrollToTopButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
