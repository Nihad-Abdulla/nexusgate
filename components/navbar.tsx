"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Phone, Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const businessSetupItems = [
    { label: "Company Formation", href: "/business-setup/company-formation" },
    { label: "Free Zone Setup", href: "/business-setup/free-zone" },
    { label: "Mainland Setup", href: "/business-setup/mainland" },
    { label: "Offshore Company", href: "/business-setup/offshore" },
]

const servicesItems = [
    { label: "PRO Services", href: "/services/pro-services" },
    { label: "Visa Services", href: "/services/visa" },
    { label: "Accounting", href: "/services/accounting" },
    { label: "Legal Services", href: "/services/legal" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [businessSetupOpen, setBusinessSetupOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const pathname = usePathname()

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/"
        return pathname.startsWith(href)
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50 p-3 md:p-4">
            <nav className="bg-primary backdrop-blur-sm text-white py-3 px-4 md:py-4 md:px-6 rounded-2xl md:rounded-xl shadow-lg">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 md:gap-3">
                        <Image
                            src="/LOGO FILES_SECONDARY LOGO-05.svg"
                            alt="NexusGate Logo"
                            width={40}
                            height={40}
                            className="h-8 w-8 md:h-10 md:w-10 object-contain brightness-0 invert"
                        />
                        <div>
                            <h1 className="text-base md:text-xl font-bold tracking-wide">NexusGate</h1>
                            <p className="text-[10px] md:text-xs text-gray-300 tracking-widest">Consulting</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {/* Business Setup Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger className={`flex items-center gap-1 hover:text-white/80 transition-colors ${isActive("/business-setup") ? "border-b-2 border-white pb-1" : ""}`}>
                                Business Setup <ChevronDown className="h-4 w-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#1e3a5f] border-[#2d4a6f]">
                                {businessSetupItems.map((item) => (
                                    <DropdownMenuItem key={item.href} asChild>
                                        <Link href={item.href} className="text-white hover:bg-[#2d4a6f] cursor-pointer">
                                            {item.label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Our Services Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger className={`flex items-center gap-1 hover:text-white/80 transition-colors ${isActive("/services") ? "border-b-2 border-white pb-1" : ""}`}>
                                Our Services <ChevronDown className="h-4 w-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#1e3a5f] border-[#2d4a6f]">
                                {servicesItems.map((item) => (
                                    <DropdownMenuItem key={item.href} asChild>
                                        <Link href={item.href} className="text-white hover:bg-[#2d4a6f] cursor-pointer">
                                            {item.label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link href="/about" className={`hover:text-white/80 transition-colors ${isActive("/about") ? "border-b-2 border-white pb-1" : ""}`}>
                            About Us
                        </Link>
                        <Link href="/blog" className={`hover:text-white/80 transition-colors ${isActive("/blog") ? "border-b-2 border-white pb-1" : ""}`}>
                            Blog
                        </Link>
                        <Link href="/contact" className={`hover:text-white/80 transition-colors ${isActive("/contact") ? "border-b-2 border-white pb-1" : ""}`}>
                            Contact Us
                        </Link>
                    </div>

                    {/* CTA Button - Desktop */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Button className="bg-white hover:bg-white/90 text-primary font-semibold px-6">
                            CONTACT US
                        </Button>
                    </div>

                    <div className="lg:hidden flex items-center gap-4">
                        <a href="tel:+971505197200" className="text-white">
                            <Phone className="h-5 w-5" />
                        </a>
                        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden mt-4 pt-4 border-t border-white/20">
                        <div className="flex flex-col gap-2">
                            <div>
                                <button
                                    onClick={() => setBusinessSetupOpen(!businessSetupOpen)}
                                    className="flex items-center justify-between w-full py-2 hover:text-white/80 transition-colors"
                                >
                                    <span>Business Setup</span>
                                    <ChevronDown
                                        className={`h-4 w-4 transition-transform duration-200 ${businessSetupOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {businessSetupOpen && (
                                    <div className="pl-4 flex flex-col gap-2 mt-1 mb-2">
                                        {businessSetupItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="text-sm text-gray-300 hover:text-white py-1"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div>
                                <button
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                    className="flex items-center justify-between w-full py-2 hover:text-white/80 transition-colors"
                                >
                                    <span>Our Services</span>
                                    <ChevronDown
                                        className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {servicesOpen && (
                                    <div className="pl-4 flex flex-col gap-2 mt-1 mb-2">
                                        {servicesItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="text-sm text-gray-300 hover:text-white py-1"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Link href="/about" className="py-2 hover:text-white/80" onClick={() => setIsOpen(false)}>
                                About Us
                            </Link>
                            <Link href="/blog" className="py-2 hover:text-white/80" onClick={() => setIsOpen(false)}>
                                Blog
                            </Link>
                            <Link href="/contact" className="py-2 hover:text-white/80" onClick={() => setIsOpen(false)}>
                                Contact Us
                            </Link>
                            <Button className="bg-white hover:bg-white/90 text-primary font-semibold w-full mt-2">
                                CONTACT US
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}