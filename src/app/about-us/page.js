// ...existing imports...
import OurStory from './About-us';

export const metadata = {
  title: "About-us | ReKnew",
  description: "Learn more about ReKnew—our mission, our values, and how we empower better business transformation.",
  alternates: {
    canonical: "https://reknew.ai/about-us",
  },
  openGraph: {
    title: "About-us | ReKnew",
    description: "Learn more about ReKnew—our mission, our values, and how we empower better business transformation.",
    url: "https://reknew.ai/about-us",
    type: "website",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/7b51162a-d886-4727-b920-6942b1bce177.jpg?token=h6uIKapL9RvEAZTxnfwWQiFT-B-wXH55jnK67eFe54o&height=800&width=1200&expires=33287797796",
        width: 1200,
        height: 630,
        alt: "About ReKnew",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About-us | ReKnew",
    description: "Learn more about ReKnew—our mission, our values, and how we empower better business transformation.",
    images: [
      "https://opengraph.b-cdn.net/production/images/7b51162a-d886-4727-b920-6942b1bce177.jpg?token=h6uIKapL9RvEAZTxnfwWQiFT-B-wXH55jnK67eFe54o&height=800&width=1200&expires=33287797796",
    ],
  },
};

export default function Page() {
  return <OurStory />;
}
