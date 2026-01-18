import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock } from 'lucide-react';
import { blogs } from '@/data/blog';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogDetails({ params }: PageProps) {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) return notFound();

    return (
        <article>
            {/* ===== BLOG HEADER ===== */}
            <section className="relative w-full h-[520px]">
                {/* Background Image */}
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    priority
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-end px-6 pb-12">
                    {/* Category Badge */}
                    <span className="inline-block w-fit mb-4 bg-primary text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-md">
                        {blog.category}
                    </span>

                    {/* Title */}
                    <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
                        {blog.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex items-center gap-6 mt-6 text-gray-200 text-sm">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{blog.publishedAt}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{blog.readTime}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BLOG CONTENT ===== */}
            <section className="max-w-3xl mx-auto px-6 py-16">
                <div className="space-y-10">

                    {blog.content.map((block, index) => {
                        switch (block.type) {
                            case 'heading':
                                return (
                                    <h2
                                        key={index}
                                        className="text-2xl font-bold text-[#1e3a5f]"
                                    >
                                        {block.text}
                                    </h2>
                                );

                            case 'paragraph':
                                return (
                                    <p
                                        key={index}
                                        className="text-gray-700 leading-relaxed text-base md:text-lg"
                                    >
                                        {block.text}
                                    </p>
                                );

                            case 'quote':
                                return (
                                    <blockquote
                                        key={index}
                                        className="border-l-4 border-teal-500 pl-6 italic text-gray-800 bg-teal-50 py-6 rounded-md"
                                    >
                                        <p className="mb-4">“{block.text}”</p>
                                        {block.author && (
                                            <span className="block text-sm font-semibold text-teal-700">
                                                — {block.author}
                                            </span>
                                        )}
                                    </blockquote>
                                );

                            case 'list':
                                return (
                                    <ul key={index} className="space-y-3">
                                        {block.items?.map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3 text-gray-700"
                                            >
                                                <span className="mt-1 h-5 w-5 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs">
                                                    ✓
                                                </span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                );

                            default:
                                return null;
                        }
                    })}

                </div>
            </section>

        </article>
    );
}
