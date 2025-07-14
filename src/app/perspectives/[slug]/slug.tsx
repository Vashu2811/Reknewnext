import { fetchBlogPosts } from '../api';
import BlogPostClient from './BlogPostClient';

// Required for static export - generates static params at build time
export async function GenerateStaticParams() {
    try {
        // Fetch all blog posts to get their slugs
        const posts = await fetchBlogPosts(1, 100); // Get a large number to cover all posts
        
        return posts.map((post) => ({
            slug: post.slug,
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        // Return empty array if there's an error
        return [];
    }
}

export default function BlogPostPage({ params }) {
    return <BlogPostClient slug={params.slug} />;
}
