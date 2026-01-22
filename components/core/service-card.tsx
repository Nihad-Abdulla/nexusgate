import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

interface ServiceCardProps {
    image: string
    title: string
    description: string
    href?: string
    linkText?: string
}

export function ServiceCard({ image, title, description, href = "#", linkText = "Learn More" }: ServiceCardProps) {
    return (
        <div className="group flex flex-col bg-[#f5f7fa] rounded-2xl p-4 transition-all duration-300 min-w-[240px] max-w-[280px]">
            {/* Image container */}
            <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Title */}
            <h3 className="text-base font-bold text-[#1e3a5f] uppercase tracking-wide mb-2">{title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow font-arimo">{description}</p>

            {/* Link */}
            <Link
                href={href}
                className="inline-flex items-center gap-1 text-[#1e3a5f] font-space font-bold text-sm transition-all duration-300 hover:text-primary hover:gap-2"
            >
                {linkText}
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
        </div>
    )
}
