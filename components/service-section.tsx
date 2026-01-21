"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"

import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "./core/service-card"
import { services } from "@/data/services"

export function ServicesSection() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        const scrollContainer = scrollRef.current
        if (!scrollContainer) return

        let animationId: number
        const scrollSpeed = 0.5

        const autoScroll = () => {
            if (!isPaused && scrollContainer) {
                scrollContainer.scrollLeft += scrollSpeed

                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                    scrollContainer.scrollLeft = 0
                }
            }
            animationId = requestAnimationFrame(autoScroll)
        }

        animationId = requestAnimationFrame(autoScroll)

        return () => cancelAnimationFrame(animationId)
    }, [isPaused])

    return (
        <section id="services" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
                    <div className="max-w-2xl">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f2a44] mb-3 italic font-space">
                            What can we do for you to setup business in UAE?
                        </h2>
                        <p className="text-gray-600 font-arimo">
                            We offer a complete package of services such as company formation, PRO, legal and HR services, all in a
                            single roof.
                        </p>
                    </div>
                    <Link href="/get-quote">
                        <Button className="bg-primary hover:bg-[#2c8c91] text-white rounded-full px-6 py-6 flex items-center gap-2 whitespace-nowrap font-space font-bold">
                            Get Quote for your business Setup
                            <ArrowUpRight className="w-5 h-5" />
                        </Button>
                    </Link>
                </div>

                {/* Cards Horizontal Scroll */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    {services.map((service, index) => (
                        <div
                            key={service.slug}
                            className="animate-fade-in-up flex-shrink-0"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <ServiceCard
                                image={service.image}
                                title={service.title}
                                description={service.shortDescription}
                                href={`/services/${service.slug}`}
                                linkText="Learn More"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
