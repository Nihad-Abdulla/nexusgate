"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Phone, Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const servicesItems = [
    {
        title: "Corporate Incorporation",
        slug: "corporate-incorporation",
        desc: "Mainland, Free Zone & Offshore setup",
        icon: "🏢"
    },
    {
        title: "Government Relations",
        slug: "government-relations",
        desc: "Expert PRO & Regulatory Liaison",
        icon: "🤝"
    },
    {
        title: "Global Mobility",
        slug: "global-mobility",
        desc: "Golden Visa & Executive Residency",
        icon: "🛂"
    },
    {
        title: "Taxation & Compliance",
        slug: "taxation-compliance",
        desc: "Corporate Tax & VAT Management",
        icon: "⚖️"
    },
    {
        title: "Financial Management",
        slug: "financial-management",
        desc: "Precision Bookkeeping & Reporting",
        icon: "📊"
    },
    {
        title: "Banking & Financial Support",
        slug: "banking-support",
        desc: "Corporate Account & Institutional Liaison",
        icon: "🏦"
    },
    {
        title: "Corporate Branding",
        slug: "corporate-branding",
        desc: "Elevating Your Market Presence",
        icon: "🎨"
    }
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const pathname = usePathname()

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/"
        return pathname.startsWith(href)
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50 p-3 md:p-4">
            <nav className="bg-primary backdrop-blur-sm text-white py-3 px-4 md:py-4 md:px-6 rounded-2xl md:rounded-xl shadow-lg border border-white/10">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                        <Image
                            src="/logo-white.svg"
                            alt="NexusGate Logo"
                            width={40}
                            height={40}
                            className="h-8 w-8 md:h-12 md:w-12 mt-2 object-contain transition-transform group-hover:scale-110"
                        />
                        <div>
                            <h1 className="text-base md:text-xl font-bold tracking-tight leading-none">NexusGate</h1>
                            <p className="text-[10px] md:text-xs text-gray-300 tracking-widest uppercase opacity-80 leading-none mt-1">Consulting</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        <Link
                            href="/"
                            className={`font-space text-[15px] font-semibold transition-all relative group py-2 ${isActive("/") ? "text-white" : "text-white/70 hover:text-white"}`}
                        >
                            Home
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isActive("/") ? "scale-x-100" : ""}`} />
                        </Link>

                        {/* Mega Menu Dropdown */}
                        <DropdownMenu onOpenChange={setServicesOpen}>
                            <DropdownMenuTrigger className={`flex items-center gap-1 font-space text-[15px] font-semibold outline-none transition-all relative group py-2 ${isActive("/services") ? "text-white" : "text-white/70 hover:text-white"}`}>
                                Our Services
                                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isActive("/services") ? "scale-x-100" : ""}`} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[600px] p-6 bg-[#0f2a44] border-white/10 rounded-2xl shadow-2xl mt-4 grid grid-cols-2 gap-4">
                                {servicesItems.map((item) => (
                                    <DropdownMenuItem key={item.slug} asChild className="p-0 focus:bg-transparent">
                                        <Link
                                            href={`/services/${item.slug}`}
                                            className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className="font-space font-bold text-white text-[14px] mb-1 group-hover:text-primary transition-colors">{item.title}</div>
                                                <div className="font-arimo text-[12px] text-gray-400 leading-snug">{item.desc}</div>
                                            </div>
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link
                            href="/about"
                            className={`font-space text-[15px] font-semibold transition-all relative group py-2 ${isActive("/about") ? "text-white" : "text-white/70 hover:text-white"}`}
                        >
                            About Us
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isActive("/about") ? "scale-x-100" : ""}`} />
                        </Link>
                        <Link
                            href="/blog"
                            className={`font-space text-[15px] font-semibold transition-all relative group py-2 ${isActive("/blog") ? "text-white" : "text-white/70 hover:text-white"}`}
                        >
                            Blog
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isActive("/blog") ? "scale-x-100" : ""}`} />
                        </Link>
                        <Link
                            href="/contact"
                            className={`font-space text-[15px] font-semibold transition-all relative group py-2 ${isActive("/contact") ? "text-white" : "text-white/70 hover:text-white"}`}
                        >
                            Contact
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isActive("/contact") ? "scale-x-100" : ""}`} />
                        </Link>
                    </div>

                    {/* CTA Section */}
                    <div className="hidden lg:flex items-center gap-6">
                        <Button asChild className="bg-white hover:bg-white/90 text-primary font-bold rounded-full px-8 py-6 text-sm shadow-lg transition-all hover:-translate-y-0.5 uppercase tracking-wider">
                            <Link href="/contact">CONTACT US</Link>
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden flex items-center gap-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden mt-4 pt-6 border-t border-white/10 space-y-4 animate-in slide-in-from-top-2 duration-200">
                        <Link href="/" className="block py-2 font-space font-bold text-lg border-b border-white/5" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>

                        <div>
                            <button
                                onClick={() => setServicesOpen(!servicesOpen)}
                                className="flex items-center justify-between w-full py-2 font-space font-bold text-lg border-b border-white/5"
                            >
                                <span>Our Services</span>
                                <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                            </button>
                            {servicesOpen && (
                                <div className="grid grid-cols-1 gap-2 mt-2 pl-2">
                                    {servicesItems.map((item) => (
                                        <Link
                                            key={item.slug}
                                            href={`/services/${item.slug}`}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="text-xl">{item.icon}</span>
                                            <span className="text-sm font-medium">{item.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link href="/about" className="block py-2 font-space font-bold text-lg border-b border-white/5" onClick={() => setIsOpen(false)}>
                            About Us
                        </Link>
                        <Link href="/blog" className="block py-2 font-space font-bold text-lg border-b border-white/5" onClick={() => setIsOpen(false)}>
                            Blog
                        </Link>
                        <Link href="/contact" className="block py-2 font-space font-bold text-lg border-b border-white/5" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>

                        <div className="pt-4">
                            <Button asChild className="w-full bg-white hover:bg-white/90 text-primary font-bold rounded-xl py-6 shadow-xl text-lg">
                                <Link href="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link>
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}