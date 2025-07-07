import { Nunito } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/Context/ThemeContext";
import Image from "next/image";
import color from "../../public/assets/logo-left-2.webp";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"], // Add weights as needed
});

export const metadata = {
  title: {
    default:
      "ReKnew - AI-Powered Enterprise Transformation & Intelligent Automation",
    template: "%s | ReKnew",
  },
  description:
    "Transform your enterprise with ReKnew's AI-powered solutions. We help businesses reduce inefficiencies, automate workflows, and unlock growth opportunities through intelligent automation and data-driven insights.",
  keywords: [
    "AI enterprise transformation",
    "intelligent automation",
    "business process optimization",
    "workflow automation",
    "AI-powered solutions",
    "enterprise AI",
    "digital transformation",
    "business efficiency",
    "ReKnew AI",
  ],
  authors: [{ name: "ReKnew" }],
  creator: "ReKnew",
  publisher: "ReKnew",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reknew.ai",
    title:
      "ReKnew - AI-Powered Enterprise Transformation & Intelligent Automation",
    description:
      "Transform your enterprise with ReKnew's AI-powered solutions. We help businesses reduce inefficiencies, automate workflows, and unlock growth opportunities through intelligent automation and data-driven insights.",
    siteName: "ReKnew",
    images: [
      {
        url: "https://reknew.ai/assets/reknew-logo-white.png",
        width: 1200,
        height: 630,
        alt: "ReKnew - Enterprise AI Transformation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ReKnew - AI-Powered Enterprise Transformation & Intelligent Automation",
    description:
      "Transform your enterprise with AI-powered solutions. Reduce inefficiencies, automate workflows, and unlock growth opportunities with ReKnew's intelligent automation platform.",
    creator: "@ReKnewAI",
    site: "@ReKnewAI",
    images: ["https://reknew.ai/assets/reknew-logo-white.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#FF512F",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://reknew.ai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.remove('light', 'dark');
                document.documentElement.classList.add(theme);
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </head>
      <Script
        strategy="lazyOnload"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NRS9PX9R2K"
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-NRS9PX9R2K');
          `}
      </Script>

      <body className={`${nunito.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
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
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
