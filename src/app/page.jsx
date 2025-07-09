import MyHome from "./pages/page";
import Head from "next/head";

export default function MyApp() {
  // Example: determine current page (replace with your actual logic)
  // For demonstration, set page to "about" or other value
  const page = ""; // e.g., "about" or "" or "home"

  // Example dynamic meta data, replace with your logic as needed
  const meta = {
    title: "My Dynamic Page Title",
    description: "This is a dynamic description for SEO.",
    keywords: "dynamic, meta, tags, nextjs",
  };

  return (
    <>
      <Head>
        {page === "about" ? (
          // Do not change meta tags for about us page
          <>
            <title>About Us</title>
            <meta name="description" content="Learn more about us." />
            {/* ...other static meta tags for about us... */}
          </>
        ) : (
          <>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
            {/* Add more dynamic meta tags as needed */}
          </>
        )}
      </Head>
      <div className="overflow-x-hidden">
        <MyHome />
      </div>
    </>
  );
}
