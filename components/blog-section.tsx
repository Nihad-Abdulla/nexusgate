import { BlogCard } from "./core/blog-card";

interface BlogCardProps {
    slug: string;
    image: string;
    title: string;
    description: string;
    href?: string;
    linkText?: string;
    icon?: string;
}
interface BlogSectionProps {
    blogs: BlogCardProps[];
    title?: string;
    subtitle?: string;
}

export function BlogSection({
    blogs,
    title = "Welcome to My Dental Blog!",
    subtitle = "Discover expert tips and insights for maintaining optimal dental health"
}: BlogSectionProps) {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
                    {blogs.map((blog, index) => (
                        <BlogCard
                            key={index}
                            slug={blog.slug}
                            image={blog.image}
                            title={blog.title}
                            description={blog.description}
                            href={blog.href}
                            linkText={blog.linkText}
                            icon={blog.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}