'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, User, ChevronRight } from 'lucide-react';
import { fetchBlogPosts } from './api';
import CanvasDots from '../../components/canvas';
import Link from 'next/link';

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const loadPosts = useCallback(async () => {
        try {
            setLoading(true);
            const blogPosts = await fetchBlogPosts(currentPage, 9);
            setPosts(blogPosts);
        } catch (err) {
            setError('Failed to load blog posts');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [currentPage]);

    useEffect(() => {
        document.title = 'Perspectives | ReKnew';
        loadPosts();
    }, [loadPosts]);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const stripHtml = (html) => {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#FF512F]"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                        Oops! Something went wrong
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="hidden sm:block">
                <CanvasDots />
            </div>
            <div className="min-h-screen py-20">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#374151] dark:text-gray-100">
                            Our
                            <span className="relative inline-block mx-2">
                                <span className="relative z-10 text-[#FF512F] dark:text-[#FF512F]">Perspectives</span>
                                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path
                                        d="M0 5c30-5 70-5 100 0"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        className="text-[#FF512F] dark:text-[#FF512F]"
                                    />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Insights, updates, and thought leadership on data modernization, AI adoption, and enterprise transformation.
                        </p>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {posts.map((post) => (
                            <Link 
                                key={post.id}
                                href={`/perspectives/${post.slug}`}
                                className="block group cursor-pointer"
                            >
                                <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                                    {/* Featured Image */}
                                    {post.featuredImage && (
                                        <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
                                            <img
                                                src={post.featuredImage}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    )}
                                    
                                    {/* Fallback when no featured image */}
                                    {!post.featuredImage && (
                                        <div className="aspect-video overflow-hidden bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 flex items-center justify-center">
                                            <div className="text-[#FF512F] text-4xl font-bold">
                                                {post.title.charAt(0).toUpperCase()}
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Meta Info */}
                                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={16} />
                                                <span>{formatDate(post.date)}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <User size={16} />
                                                <span>{post.author}</span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-[#FF512F] transition-colors">
                                            {post.title}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                            {stripHtml(post.excerpt)}
                                        </p>

                                        {/* Read More Link */}
                                        <div className="inline-flex items-center gap-2 text-[#FF512F] hover:text-[#FF8A63] font-medium transition-colors">
                                            Read More
                                            <ChevronRight size={16} />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination (Basic) */}
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-6 py-2 rounded-lg bg-[#FF512F] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#FF8A63] transition-colors"
                        >
                            Previous
                        </button>
                        <span className="px-4 py-2 text-gray-600 dark:text-gray-400">
                            Page {currentPage}
                        </span>
                        <button
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            disabled={posts.length < 9}
                            className="px-6 py-2 rounded-lg bg-[#FF512F] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#FF8A63] transition-colors"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogList;
        