"use client"

import { useRef, useEffect, useState } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { TestimonialCard } from "./core/testimonial-card"

const testimonials = [
    {
        name: "Rahul Nair",
        avatar: "",
        timeAgo: "2 months ago",
        review:
            "Exceptional service! They made our Dubai company formation incredibly smooth. Highly recommend Shams and the team for their dedication.",
    },
    {
        name: "Anjali Pillai",
        avatar: "",
        timeAgo: "3 months ago",
        review:
            "The level of professionalism and local expertise at NexusGate is unmatched. They handled everything from visas to licensing flawlessly.",
    },
    {
        name: "Vishnu Prasad",
        avatar: "",
        timeAgo: "4 months ago",
        review:
            "Fast, reliable, and transparent. NexusGate is the best partner for anyone looking to set up business in the UAE. Truly a turnkey solution.",
    },
    {
        name: "Meera Krishnan",
        avatar: "",
        timeAgo: "5 months ago",
        review:
            "I was worried about the paperwork, but Vishnu Subhas and the pro team made it feel effortless. Great experience from start to finish!",
    },
    {
        name: "Arjun Das",
        avatar: "",
        timeAgo: "6 months ago",
        review:
            "Highly efficient team. They reserved our trade name and got our license issued in record time. Professional guys with great integrity!",
    },
    {
        name: "Swapna Joseph",
        avatar: "",
        timeAgo: "7 months ago",
        review:
            "NexusGate provided end-to-end support for our startup. Their transparent pricing and strategic advice were key to our successful launch.",
    },
]

export function TestimonialsSection() {
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

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 340
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            })
        }
    }

    return (
        <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-2xl md:text-4xl font-bold text-center text-[#1e3a5f] mb-8 md:mb-12">Testimonials</h2>

                {/* Cards Container */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors hidden md:block"
                    >
                        <ChevronLeft className="w-5 h-5 text-[#1e3a5f]" />
                    </button>

                    {/* Scrollable Cards */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                    >
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                name={testimonial.name}
                                avatar={testimonial.avatar}
                                timeAgo={testimonial.timeAgo}
                                review={testimonial.review}
                            />
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors hidden md:block"
                    >
                        <ChevronRight className="w-5 h-5 text-[#1e3a5f]" />
                    </button>
                </div>
            </div>
        </section>
    )
}
