import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add the required font weights
});
export const metadata = {
  title: "ReKnew",
  description: "We help organizations reduce inefficiencies, automate workflows, and unlock growth opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Reimagine How Your Business Operates" />
        <meta property="og:site_name" content="ReKnew" />
        <meta property="og:url" content="https://reknew.ai" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta 
          property="og:image" 
          content="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAAAiCAMAAAC+/RGvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUdwTGZe6Wxe5mZe6P///2dd6mpc6GZe6WZe6aI32P///75L1mZd6f///////8BB38RC4v///+SEf////7k+3v///////////8hE4bU+3dNup959jMRbxemKdmWuB7YAAAAXdFJOUwD9GKEcvz+G3f4+ImboxHDbn0Bnqoavvwy+lwAAAt1JREFUWMPtl4luozAQhm0DtjkTmosr7/+aO2OPjcFApbbSot1OlMYmFvPln4sy9mu/9g9aWcoL2P1+v16nj7/DIB1At7A34aTe9m8hxN7mC3btrXV9SONwipezurnt3CHhMlirb4bI8QREwwYOWJt+hvNtGsuTL5CAJsR5tm37bJCn+QTnB2iAp+tyME80vZc4VpP0CcviEEfx5EdKquv63Brq897EYWkNQtnVowlzyeHMNAoWUmVZUgU14/divqw8fxX8EtlZgXKg6keAGccYhz2AwVyrXXanIY7i2t0v4yLjXHN4U6GZvaY9fE1+uY+zzgJ9Lp0XaDA0Bzh4qYZs8jwWR3nX6E/zCnYyIUShuYK9qDiSVLxyurpkk7xiKx4j0IQs2zhPm8s1lRgG7+FxQhrEEW4l7Ufl3IIKgmdOEidUwpf9iniA5r2Dg8uWsZsPUkorxFE8TGPvHdwn/u8cWXIOKpEqIiqCu+k4VppxGAKcApty8agtWUuagDW21MCDwsRQAY5LidIIUc2dSeIxac8m2gkVHFjwTJZmHLba4OtmGVZXEo7BEXwOf8b9zDDu4ETizOhgUspIooxQmd4YF1aewVgZ49QF28ExqRKUyYxTEg5kibPK5L0kSYxQYqt9CuSZhnGN06CRaxOsNl1M1oQS15bNljpqHQvjX2t3dp3IblzgvIrUSV2Vm8WcyhtdmQpqrY6Mfj2coCxGjRZNJ+aZhmmNkzY0srC+a7pUrGaWogpeq8O0P0IyAARJAhm0ajqLcQHhgleEY1Y3n05N2zbLNkgcaksdUEJbj5I+AdPVNiQ3F+yABy3CwSjZEXpzQ+LVrHGELfdIHcxzrZTK+BxYt5L8YPJeYKJv4zAvR9oaoOYRP34JE5ZIHZybOMLMqCAIX9s8bjoRT3n8EHD8uLr3EPuVB9dLDjxdeZr/KJDnRDjsnnf9iXBY1p8KR1xPhQM8p8JhpWD/vf0BoQpBI+Xz2KIAAAAASUVORK5CYII=" 
        />
      </Head>
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
