import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Business Setup", href: "/business-setup" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
]

const services = [
    { label: "Company Formation", href: "/business-setup/company-formation" },
    { label: "Free Zone Setup", href: "/business-setup/free-zone" },
    { label: "PRO Services", href: "/services/pro-services" },
    { label: "Visa Services", href: "/services/visa" },
    { label: "Accounting", href: "/services/accounting" },
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
                                    src="/LOGO FILES_SECONDARY LOGO-05.svg"
                                    alt="NexusGate Logo"
                                    width={32}
                                    height={32}
                                    className="h-8 w-8 object-contain brightness-0 invert"
                                />
                                <div>
                                    <h2 className="text-lg font-bold font-space">NexusGate</h2>
                                    <p className="text-xs text-white/60 tracking-wider font-space">Consulting</p>
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
                                    <span>UAE 055 19, United Arab Emirates</span>
                                </li>
                                <li>
                                    <a
                                        href="tel:+971505459200"
                                        className="flex items-start gap-3 text-white/70 hover:text-white transition-colors font-arimo"
                                    >
                                        <Phone className="h-5 w-5 text-white shrink-0 mt-0.5" />
                                        <span className="text-sm">+971 50 545 9200</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:info@gokitepro.com"
                                        className="flex items-start gap-3 text-white/70 hover:text-white transition-colors font-arimo"
                                    >
                                        <Mail className="h-5 w-5 text-white shrink-0 mt-0.5" />
                                        <span className="text-sm">info@gokitepro.com</span>
                                    </a>
                                </li>
                            </ul>
                            {/* Social Links */}
                            <div className="flex gap-4 mt-6">
                                <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
                                    <Facebook className="h-4 w-4" />
                                </a>
                                <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
                                    <Twitter className="h-4 w-4" />
                                </a>
                                <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
                                    <Instagram className="h-4 w-4" />
                                </a>
                                <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
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
                                <Link href="/privacy" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="hover:text-white transition-colors">
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

