import { GenerateStaticParams } from "./slug";

export const metadata = {
  title: "Context Is All You Need – ReKnew's Answer to Failing AI Projects",
  description:
    "If your AI efforts are failing, it’s likely due to lack of context. ReKnew’s Context Engineering™ approach is helping Enterprises overcome the Context Chasm.",
  openGraph: {
    type: "website",
    url: "https://reknew.ai/context-is-all-you-need-reknews-answer-to-failing-ai-projects",
    title: "Context Is All You Need – ReKnew’s Answer to Failing AI Projects",
    description:
      "If your AI efforts are failing, it’s likely due to lack of context. ReKnew’s Context Engineering™ approach is helping Enterprises overcome the Context Chasm.",
    images: [
      {
        url: "https://blog.reknew.ai/wp-content/uploads/2025/06/ReKnew.AI-Overview.001.png",
        width: 1200,
        height: 630,
        alt: "ReKnew",
      },
    ],
    siteName: "ReKnew",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ReKnew",
    creator: "@ReKnew",
    title: "Context Is All You Need – ReKnew’s Answer to Failing AI Projects",
    description:
      "If your AI efforts are failing, it’s likely due to lack of context. ReKnew’s Context Engineering™ approach is helping Enterprises overcome the Context Chasm.",
    images: [
      "https://blog.reknew.ai/wp-content/uploads/2025/06/ReKnew.AI-Overview.001.png",
    ],
    url: "https://reknew.ai/context-is-all-you-need-reknews-answer-to-failing-ai-projects",
  },
  robots: "index, follow",
  authors: [{ name: "ReKnew" }],
  alternates: {
    canonical:
      "https://reknew.ai/context-is-all-you-need-reknews-answer-to-failing-ai-projects",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
};

export default function MyApp() {
  return (
    <>
      <div className="overflow-x-hidden">
        <GenerateStaticParams />
      </div>
    </>
  );
}
