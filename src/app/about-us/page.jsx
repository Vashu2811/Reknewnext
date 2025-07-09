import OurStory from "./About-us";

export const metadata = {
  title: "vashu Us - Woyce Avai",
  description:
    "vashu vashuvashuvashuvashuvashuvashuvashuvashuvashu more about Woyce Avai, our mission, vision, and the team behind our innovative solutions.",
  keywords: [
    "Woyce Avai",
    "About Us",
    "Company",
    "Team",
    "Mission",
    "Vision",
    "Story",
  ],
  authors: [{ name: "Woyce Avai Team" }],
  openGraph: {
    title: "About Us - Woyce Avai",
    description: "Discover the story, mission, and team behind Woyce Avai.",
    type: "website",
    url: "https://yourdomain.com/about-us",
    images: [
      {
        url: "https://yourdomain.com/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Us - Woyce Avai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Woyce Avai",
    description: "Discover the story, mission, and team behind Woyce Avai.",
    images: ["https://yourdomain.com/images/about-og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://yourdomain.com/about-us",
  },
};

export default function MyApp() {
  return (
    <div className="overflow-x-hidden">
      <OurStory />
    </div>
  );
}

