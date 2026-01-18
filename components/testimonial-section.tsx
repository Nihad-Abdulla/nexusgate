"use client"

import { useRef, useEffect, useState } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { TestimonialCard } from "./core/testimonial-card"

const testimonials = [
    {
        name: "Abhilash James",
        avatar: "/professional-man-headshot.png",
        timeAgo: "7 months ago",
        review:
            "I recently had the opportunity to work with NexusGate Business Consultant, and I'm pleased to share a positive experience. From the initial consultation to the final implementation, their team demonstrated expertise and professionalism.",
    },
    {
        name: "Mohammed Ghaleb",
        avatar: "/middle-eastern-man-headshot.jpg",
        timeAgo: "7 months ago",
        review:
            "Shams and bilal is really awsome, and they know the peaper works and all,also a d iam suggesting every one to go for Shams and bilal for your business setup in UAE.",
    },
    {
        name: "Arun Mozhi",
        avatar: "/indian-man-headshot.png",
        timeAgo: "7 months ago",
        review:
            "Working with Vishnu subhas made the entire setup process seamless. Their combined expertise and professionalism stood out from the beginning. Highly recommend their services!",
    },
    {
        name: "Ravi Sandhu",
        avatar: "/sikh-man-headshot.jpg",
        timeAgo: "7 months ago",
        review:
            "worked with amsal and their attention to detail is on point, super professional from start to finish, made everything feel easy and stress-free. Highly recommend!",
    },
    {
        name: "Sarah Johnson",
        avatar: "/professional-woman-headshot.png",
        timeAgo: "5 months ago",
        review:
            "Excellent service and support throughout the entire business setup process. The team was knowledgeable and always available to answer my questions. Would definitely recommend!",
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
