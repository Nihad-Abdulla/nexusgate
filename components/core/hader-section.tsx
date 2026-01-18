import React from 'react';
import Image from 'next/image';

interface PageHeaderProps {
    backgroundImage: string;
    badge?: string;
    title: string;
    subtitle?: string;
    overlay?: boolean;
    overlayOpacity?: number;
    height?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    alignment?: 'left' | 'center' | 'right';
}

export function PageHeader({
    backgroundImage,
    badge,
    title,
    subtitle,
    overlay = true,
    overlayOpacity = 60,
    height = 'lg',
    alignment = 'left'
}: PageHeaderProps) {
    const heightClasses = {
        sm: 'h-[300px]',
        md: 'h-[400px]',
        lg: 'h-[500px]',
        xl: 'h-[600px]',
        full: 'h-screen'
    };

    const alignmentClasses = {
        left: 'text-left items-start',
        center: 'text-center items-center',
        right: 'text-right items-end'
    };

    return (
        <section className={`relative w-full ${heightClasses[height]} overflow-hidden rounded-2xl`}>
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Overlay */}
            {overlay && (
                <div
                    className="absolute inset-0 bg-black"
                    style={{ opacity: overlayOpacity / 100 }}
                />
            )}

            {/* Content - Positioned at bottom */}
            <div className={`relative z-10 h-full flex flex-col justify-end ${alignmentClasses[alignment]} px-8 md:px-16 lg:px-24 py-12`}>
                {/* Badge */}
                {badge && (
                    <div className="mb-6">
                        <span className="text-white text-sm font-semibold tracking-widest uppercase">
                            {badge}
                        </span>
                    </div>
                )}

                {/* Title */}
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif italic mb-6 max-w-3xl">
                    {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}