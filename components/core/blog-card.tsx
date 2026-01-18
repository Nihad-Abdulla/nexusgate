
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// BlogCard Component
interface BlogCardProps {
    slug: string;
    image: string;
    title: string;
    description: string;
    href?: string;
    linkText?: string;
    icon?: string;
}

export function BlogCard({
    slug,
    image,
    title,
    description,
    href = "#",
    linkText = "Read More",
    icon
}: BlogCardProps) {
    return (
        <div className="group flex flex-col bg-[#f5f7fa] rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full max-w-[600px]">
            {/* Image container */}
            <div className="relative w-full h-80 rounded-xl overflow-hidden mb-6">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Title with optional icon */}
            <div className="flex items-start gap-2 mb-2">
                {icon && <span className="text-xl flex-shrink-0">{icon}</span>}
                <h3 className="text-base font-bold text-[#1e3a5f] uppercase tracking-wide">
                    {title}
                </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow line-clamp-3">
                {description}
            </p>

            {/* Link */}
            <Link
                href={`/blog/${slug}`}
                className="inline-flex items-center gap-1 text-[#1e3a5f] font-semibold text-sm transition-all duration-300 hover:text-primary hover:gap-2"
            >
                {linkText}
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
        </div>
    );
}