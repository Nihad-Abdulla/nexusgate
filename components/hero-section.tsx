"use client"

import { Button } from "@/components/ui/button"
import { Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f2a44] pt-24 md:pt-32">
            {/* Background Layer with Parallax-ready Skyline */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
                style={{
                    backgroundImage: `url('/dubai-skyline.png')`,
                }}
            >
                {/* Advanced Multi-layered Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a44] via-[#0f2a44]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a44] via-transparent to-transparent" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 container mx-auto px-6">
                <div className="max-w-4xl">
                    {/* Badge / Top Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 md:gap-3 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full px-4 py-1.5 md:px-5 md:py-2 mb-10 hover:bg-primary/20 transition-colors"
                    >
                        <span className="bg-primary text-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full font-space tracking-tighter uppercase whitespace-nowrap">Premier Choice</span>
                        <span className="text-white text-[10px] md:text-xs font-space tracking-[0.1em] uppercase opacity-90 whitespace-nowrap">Consultants in Dubai</span>
                    </motion.div>

                    {/* Main Title Section */}
                    <div className="relative mb-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="font-space text-4xl md:text-7xl lg:text-[100px] font-bold text-white leading-[1.1] md:leading-[0.9] tracking-tight text-balance"
                        >
                            Elevating <br />
                            <span className="text-primary italic">Ambition</span> in <br />
                            The Middle East.
                        </motion.h1>

                        {/* Decorative Underline/Bar */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "120px" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-2 bg-primary mt-10 rounded-full"
                        />
                    </div>

                    {/* Sub-description with Glassy effect on larger screens */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="max-w-2xl mb-12"
                    >
                        <p className="font-arimo text-gray-300 text-base md:text-xl leading-relaxed text-pretty">
                            NexusGate provides specialized corporate advisory for global investors navigating the UAE's high-growth economy. From dynamic startups to established enterprises, we build foundations that last.
                        </p>
                    </motion.div>

                    {/* CTA Group */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center gap-4 md:gap-6"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto bg-primary hover:bg-[#2c8c91] text-white font-space font-bold px-8 py-6 md:px-10 md:py-7 rounded-full text-base md:text-lg shadow-lg transition-all hover:-translate-y-1 active:scale-95"
                        >
                            <Link href="/contact">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="ghost"
                            className="w-full sm:w-auto text-white hover:text-primary font-space font-bold text-base md:text-lg hover:bg-transparent transition-colors group"
                        >
                            <Link href="/contact" className="flex items-center">
                                Our Services
                                <div className="ml-3 w-8 h-[2px] bg-white group-hover:bg-primary transition-all group-hover:w-12" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Side Element (Right side of screen) */}
            <div className="hidden lg:block absolute right-[5%] bottom-[10%] opacity-20 pointer-events-none">
                <div className="font-space text-[20vw] font-black text-white leading-none select-none">
                    NEXUS
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="font-space text-[10px] text-white/40 uppercase tracking-[0.3em]">Explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
                </div>
            </motion.div>
        </section>
    )
}
