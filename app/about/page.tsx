import { PageHeader } from "@/components/core/hader-section";
import { BadgeCheck, Heart, Scale, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about NexusGate's mission to bridge the gap between global investors and the UAE market through expert corporate consultancy.",
};

export default function About() {
    return (
        <>
            {/* ===== HEADER ===== */}
            <div className="p-2 bg-gray-100">
                <PageHeader
                    backgroundImage="/images/about-header.jpg"
                    badge="OUR STORY"
                    title="The Architects of Business Excellence"
                    subtitle="Founded on precision and deep local expertise, NexusGate is the premier boutique consultancy firm for global investors in the UAE."
                    height="lg"
                    alignment="left"
                />
            </div>

            {/* ===== OUR STORY ===== */}
            <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="font-space font-bold text-xs tracking-[0.2em] text-primary uppercase block mb-4">
                        OUR STORY
                    </span>
                    <h2 className="font-space text-4xl md:text-5xl font-bold text-[#0f2a44] mb-8 leading-tight">
                        Bridging High-Level Strategy & Local Compliance
                    </h2>
                    <div className="font-arimo text-gray-600 text-lg space-y-6 leading-relaxed">
                        <p>
                            Nexusgate Consulting was founded by three senior partners, each bringing nearly a decade of individual expertise to a market lacking true end-to-end service.
                        </p>
                        <p>
                            Our name represents a "Gateway to Growth," reflecting our commitment to managing every layer of corporate setup and residency administration.
                        </p>
                        <p>
                            We established this firm to bridge the gap between high-level strategy and the complexities of local compliance. At Nexusgate, we provide the elite market knowledge you need to hand over the keys & grow with confidence.
                        </p>
                    </div>
                </div>
                <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        src="/images/about-story.jpg"
                        alt="NexusGate Office"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0f2a44]/20"></div>
                </div>
            </section>

            {/* ===== MISSION & VISION ===== */}
            <section className="py-16 md:py-24 bg-[#0f2a44] text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="font-space font-bold text-xs tracking-[0.3em] text-primary uppercase opacity-80">
                        OUR PURPOSE
                    </span>
                    <h2 className="font-space text-3xl md:text-4xl font-bold mt-4 mb-12 md:mb-16">
                        Mission & Vision
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-left">
                        {/* Mission */}
                        <div className="bg-white/5 p-6 md:p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <h3 className="font-space text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary flex items-center gap-3">
                                <BadgeCheck className="w-5 h-5 md:w-6 md:h-6" /> Our Mission
                            </h3>
                            <p className="font-arimo text-gray-300 leading-relaxed text-sm md:text-base">
                                Nexusgate Consulting empowers global investors and businesses by simplifying the complexities of the UAE business landscape. We provide comprehensive, turnkey advisory services that bridge the gap between international vision and local execution, managing every operational detail to ensure our clients achieve accelerated and sustainable growth.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white/5 p-6 md:p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <h3 className="font-space text-xl md:text-2xl font-bold mb-4 md:mb-6 text-secondary flex items-center gap-3">
                                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" /> Our Vision
                            </h3>
                            <p className="font-arimo text-gray-300 leading-relaxed text-sm md:text-base">
                                To be the preeminent gateway for global ambition, serving as the definitive partner for international entities seeking to capitalize on the UAE's dynamic growth through seamless, end-to-end strategic excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== OUR APPROACH (Methodology) ===== */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="font-space font-bold text-xs tracking-[0.3em] text-primary uppercase">
                            Our Methodology
                        </span>
                        <h2 className="font-space text-3xl md:text-4xl font-bold mt-4 text-[#0f2a44]">
                            Clarity. Precision. Execution.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Diagnose",
                                desc: "We begin by deeply understanding your objectives, market position, and regulatory environment."
                            },
                            {
                                step: "02",
                                title: "Design",
                                desc: "We craft tailored strategies rooted in regional intelligence and global best practices."
                            },
                            {
                                step: "03",
                                title: "Deliver",
                                desc: "We work alongside leadership teams to ensure decisive execution and measurable impact."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="relative group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                                <span className="absolute -top-6 left-8 font-space text-5xl font-bold text-gray-100 group-hover:text-primary/20 transition-colors">
                                    {item.step}
                                </span>
                                <h3 className="font-space text-2xl font-bold mb-4 mt-4 text-primary">
                                    {item.title}
                                </h3>
                                <p className="font-arimo text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CORE VALUES ===== */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="font-space font-bold text-xs tracking-[0.2em] text-primary uppercase">
                        Our DNA
                    </span>
                    <h2 className="font-space text-4xl font-bold text-[#0f2a44] mt-3">
                        Core Values
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Integrity",
                            icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                            desc: "We uphold the highest ethical standards in every interaction, ensuring that the trust our clients place in us is met with absolute honesty & professional honour."
                        },
                        {
                            title: "Accountability",
                            icon: <BadgeCheck className="w-8 h-8 text-primary" />,
                            desc: "We take full ownership of the \"turnkey\" promise, managing every operational detail with precision & taking responsibility for the results we deliver from start to finish."
                        },
                        {
                            title: "Compassion",
                            icon: <Heart className="w-8 h-8 text-primary" />,
                            desc: "We approach every partnership with empathy, recognizing the human ambition behind every business and treating our clients' goals with the same care as our own."
                        }
                    ].map((value, i) => (
                        <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                {value.icon}
                            </div>
                            <h3 className="font-space text-xl font-bold text-[#0f2a44] mb-4">
                                {value.title}
                            </h3>
                            <p className="font-arimo text-gray-600 leading-relaxed">
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== OUR SERVICES ===== */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <span className="font-space font-bold text-xs tracking-[0.2em] text-primary uppercase">
                            What We Do
                        </span>
                        <h2 className="font-space text-4xl font-bold text-[#0f2a44] mt-3">
                            Our Services
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                slug: "corporate-incorporation",
                                title: "Corporate Incorporation & Licensing",
                                desc: "We facilitate seamless company formation across UAE Mainland and Free Zones, overseeing the entire lifecycle from initial trade license acquisition to seamless annual renewals."
                            },
                            {
                                slug: "government-relations",
                                title: "Government Relations & Regulatory Liaison",
                                desc: "Our experts manage all essential interactions with authorities and departments, securing the critical approvals required for your business to operate legally."
                            },
                            {
                                slug: "global-mobility",
                                title: "Global Mobility & Residency Solutions",
                                desc: "We manage end-to-end residency cycle, specializing in Golden visa and executive residencies including all government administration for both corporate sponsors and dependents."
                            },
                            {
                                slug: "taxation-compliance",
                                title: "Taxation & Statutory Compliance",
                                desc: "Our team ensures your business adheres to the latest UAE fiscal regulations through expert Tax registration and ongoing compliance management for both VAT and Corporate Tax."
                            },
                            {
                                slug: "financial-management",
                                title: "Financial Management & Bookkeeping",
                                desc: "We deliver precise accounting and bookkeeping services that safeguard your financial integrity and ensure your records meet international standards and local regulatory requirements."
                            },
                            {
                                slug: "banking-support",
                                title: "Banking & Financial Support",
                                desc: "We bridge the gap between your business and financial institutions, providing strategic support to streamline the corporate bank account opening process and ongoing banking needs."
                            },
                            {
                                slug: "corporate-branding",
                                title: "Corporate Branding",
                                desc: "Beyond administration, we help establish your market presence through professional branding services that build a strong and recognizable identity for your new venture."
                            }
                        ].map((service, i) => (
                            <Link
                                href={`/services/${service.slug}`}
                                key={i}
                                className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="flex-grow">
                                    <h3 className="font-space text-xl font-bold text-[#0f2a44] mb-4 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="font-arimo text-gray-600 leading-relaxed text-sm">
                                        {service.desc}
                                    </p>
                                </div>
                                <div className="mt-6 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                                    View Details <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CALL TO ACTION ===== */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="bg-[#0f2a44] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                    <div className="relative z-10">
                        <h2 className="font-space text-4xl md:text-5xl font-bold text-white mb-8">
                            Ready to Build Your Future in the UAE?
                        </h2>
                        <p className="font-arimo text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                            Partner with the experts who bridge high-level strategy and local compliance.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-space font-bold transition-all group"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
