import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
// import Head from "next/head";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});
export const metadata = {
  title: "ReKnew",
  description: "We help organizations reduce inefficiencies, automate workflows, and unlock growth opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      
      <body
        className={montserrat.variable}
      >
        {children}
      </body>
    </html>
  );
}
