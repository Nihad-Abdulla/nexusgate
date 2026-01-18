import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Gradient Overlay for readability */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/dubai-skyline.png')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
                    <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded font-space">#1</span>
                    <span className="text-white text-sm font-space tracking-wide">Business Consultants in Dubai</span>
                </div>

                {/* Heading */}
                <h1 className="font-space text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
                    NexusGate <span className="text-primary">Business</span>
                    <br />
                    Consultants in Dubai
                </h1>

                {/* Subtitle */}
                <p className="font-arimo text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-10 text-pretty leading-relaxed">
                    Business Consultants in Dubai who genuinely care, guiding you step by step with personalized advice to turn
                    your business dream into reality.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        asChild
                        size="lg"
                        className="bg-primary hover:bg-[#2c8c91] text-white font-space font-semibold px-8 py-6 rounded-full text-lg transition-all transform hover:scale-105"
                    >
                        <Link href="/consultation">
                            <Users className="mr-2 h-5 w-5" />
                            Free Consultation
                        </Link>
                    </Button>

                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/30 font-space font-semibold px-8 py-6 rounded-full text-lg"
                    >
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
