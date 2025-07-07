"use client";
import OurStory from "./About-us";
import Head from "next/head";

export default function MyApp() {
  return (
    <>
      <Head>
        <title>About Us - Woyce Avai</title>
        <meta name="description" content="Learn more about Woyce Avai, our mission, vision, and the team behind our innovative solutions." />
        <meta name="keywords" content="Woyce Avai, About Us, Company, Team, Mission, Vision, Story" />
        <meta name="author" content="Woyce Avai Team" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="About Us - Woyce Avai" />
        <meta property="og:description" content="Discover the story, mission, and team behind Woyce Avai." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/about-us" />
        <meta property="og:image" content="https://yourdomain.com/images/about-og.jpg" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Woyce Avai" />
        <meta name="twitter:description" content="Discover the story, mission, and team behind Woyce Avai." />
        <meta name="twitter:image" content="https://yourdomain.com/images/about-og.jpg" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://yourdomain.com/about-us" />
      </Head>
      <div className="overflow-x-hidden">
        <OurStory />
      </div>
    </>
  );
}
