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
                    backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
                    badge="INSIGHTS"
                    title="The Nexus of Strategy & Innovation"
                    subtitle="Expert perspectives on UAE's dynamic market, regulatory changes, and corporate excellence."
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
