import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/#services" },
    { label: "Business Setup", href: "/services/corporate-incorporation" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
]

const services = [
    { label: "Corporate Incorporation", href: "/services/corporate-incorporation" },
    { label: "Government Relations", href: "/services/government-relations" },
    { label: "Global Mobility", href: "/services/global-mobility" },
    { label: "Taxation & Compliance", href: "/services/taxation-compliance" },
    { label: "Financial Management", href: "/services/financial-management" },
]

export function Footer() {
    return (
        <div className="px-3 md:px-4">
            <footer className="bg-primary text-white rounded-t-2xl md:rounded-t-xl overflow-hidden">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Image
                                    src="/logo-white.svg"
                                    alt="NexusGate Logo"
                                    width={40}
                                    height={40}
                                    className="h-10 w-10 object-contain mt-2"
                                />
                                <div>
                                    <h2 className="text-lg font-bold font-space leading-none">NexusGate</h2>
                                    <p className="text-xs text-white/60 tracking-wider font-space leading-none mt-1">Consulting</p>
                                </div>
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed font-arimo">
                                Your trusted partner for business setup and corporate services in the UAE. We help entrepreneurs and
                                businesses establish and grow their presence.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-white font-space">Quick Links</h3>
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm font-arimo">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-white font-space">Our Services</h3>
                            <ul className="space-y-2">
                                {services.map((service) => (
                                    <li key={service.href}>
                                        <Link href={service.href} className="text-white/70 hover:text-white transition-colors text-sm font-arimo">
                                            {service.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-white font-space">Contact Us</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-white/70 text-sm font-arimo">
                                    <MapPin className="h-5 w-5 text-white shrink-0 mt-0.5" />
                                    <span>
                                        Office 09, UB Building<br />
                                        Sheikh Rashid Rd, Al Garhoud,<br />
                                        Dubai, United Arab Emirates
                                    </span>
                                </li>
                                <li>
                                    <a
                                        href="tel:+971588975654"
                                        className="flex items-start gap-3 text-white/70 hover:text-white transition-colors font-arimo"
                                    >
                                        <Phone className="h-5 w-5 text-white shrink-0 mt-0.5" />
                                        <span className="text-sm">+971 58 897 5654</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:office@nexusgateuae.com"
                                        className="flex items-start gap-3 text-white/70 hover:text-white transition-colors font-arimo"
                                    >
                                        <Mail className="h-5 w-5 text-white shrink-0 mt-0.5" />
                                        <span className="text-sm">office@nexusgateuae.com</span>
                                    </a>
                                </li>
                            </ul>
                            {/* Social Links */}
                            <div className="flex gap-4 mt-6">

                                <a href="https://x.com/Nexusgateuae" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/nexusgate.ae?igsh=MTFwcnJuY2RuNHU5aQ==" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
                                    <Instagram className="h-4 w-4" />
                                </a>
                                <a href="https://www.linkedin.com/company/nexusgate-ae/" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
                                    <Linkedin className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
                            <p>&copy; {new Date().getFullYear()} NexusGate. All rights reserved.</p>
                            <div className="flex gap-6">
                                <Link href="#" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

