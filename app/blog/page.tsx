import Link from "next/link";
import { BlogSection } from "@/components/blog-section";
import { PageHeader } from "@/components/core/hader-section";
import { blogs } from "@/data/blog";

export default function Blog() {
    const [featuredBlog, ...otherBlogs] = blogs;

    return (
        <>

            <div className="p-2 bg-gray-100">
                <PageHeader
                    backgroundImage="https://www.shutterstock.com/image-photo/museum-future-sunset-nicknamed-most-600nw-2483595635.jpg"
                    badge="ESTABLISHED 2008 • DUBAI"
                    title="The Standard of Excellence"
                    subtitle="A boutique consultancy firm dedicated to navigating the complexities of the Middle Eastern market with precision and local wisdom."
                    height="lg"
                    alignment="left"
                />
            </div>


            {featuredBlog && (
                <section className="max-w-6xl mx-auto px-6 py-16">
                    <div className="max-w-3xl">

                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-primary text-white text-xs font-semibold px-4 py-1 rounded-sm tracking-wider">
                                FEATURED
                            </span>
                            <span className="text-gray-400 text-sm uppercase tracking-widest">
                                {featuredBlog.publishedAt}
                            </span>
                        </div>


                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f2a44] leading-tight mb-6">
                            {featuredBlog.title}
                        </h2>


                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            {featuredBlog.description}
                        </p>


                        <Link
                            href={`/blog/${featuredBlog.slug}`}
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                        >
                            Read Article
                            <span className="text-xl">→</span>
                        </Link>
                    </div>
                </section>
            )}


            <BlogSection blogs={otherBlogs} />
        </>
    );
}
