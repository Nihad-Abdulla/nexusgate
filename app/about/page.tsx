import { PageHeader } from "@/components/core/hader-section";


export default function About() {
    return (
        <>
            {/* ===== HEADER ===== */}
            <div className="p-2 bg-gray-100">
                <PageHeader
                    backgroundImage="https://www.shutterstock.com/image-photo/museum-future-sunset-nicknamed-most-600nw-2483595635.jpg"
                    badge="ESTABLISHED 2008 • DUBAI"
                    title="The Standard of Excellence"
                    subtitle="A boutique consultancy firm dedicated to navigating the complexities of the Middle Eastern market with precision and local wisdom."
                    height="lg"
                    alignment="left"
                />
            </div>

            {/* ===== OUR MISSION ===== */}
            <section className="max-w-4xl mx-auto px-6 py-24 text-center">
                <h2 className="font-space font-bold text-sm tracking-[0.3em] text-primary uppercase mb-8">
                    Our Mission
                </h2>
                <blockquote className="font-space text-3xl md:text-5xl font-bold text-[#0f2a44] leading-tight mb-8">
                    “To bridge global innovation with regional heritage, fostering growth for the Emirates’ future.”
                </blockquote>
                <div className="w-20 h-1 bg-[#35A8AD] mx-auto mb-10"></div>
                <p className="font-arimo text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    We provide world-class consultancy services that build the infrastructure of tomorrow’s commerce today, ensuring sustainable prosperity.
                </p>
            </section>

            {/* ===== WHO WE ARE (Split Layout) ===== */}
            <section className="w-full bg-white py-24 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Narrative */}
                    <div>
                        <span className="font-space font-bold text-xs tracking-[0.2em] text-primary uppercase block mb-4">
                            Who We Are
                        </span>
                        <h2 className="font-space text-4xl md:text-5xl font-bold text-[#0f2a44] mb-8 leading-none">
                            A Trusted Gateway to <br /> the Middle East.
                        </h2>
                        <div className="font-arimo text-gray-600 text-lg space-y-6 leading-relaxed">
                            <p>
                                NexusGate is a Dubai-based business consultancy helping organizations navigate regulatory complexity, market entry, and long-term growth across the GCC and wider MENA region.
                            </p>
                            <p>
                                We advise startups, family offices, and multinational enterprises on entering and expanding within Middle Eastern markets. Our expertise spans market entry strategy, regulatory advisory, corporate structuring, and strategic transformation.
                            </p>
                        </div>
                    </div>

                    {/* Right: Key Points */}
                    <div className="bg-gray-50 p-10 rounded-2xl md:p-12">
                        <h3 className="font-space text-xl font-bold text-[#0f2a44] mb-8">
                            Why Partner With Us?
                        </h3>
                        <ul className="space-y-6 font-arimo text-gray-700">
                            {[
                                "Deep-rooted understanding of GCC regulations",
                                "Partner-led advisory with senior engagement",
                                "Cross-border experience (Europe, Asia, ME)",
                                "Long-term strategic focus on sustainability",
                                "Direct access to government entities"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#35A8AD]/10 text-[#35A8AD] flex items-center justify-center text-sm font-bold mt-0.5">
                                        ✓
                                    </span>
                                    <span className="text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== OUR APPROACH (Process Strip) ===== */}
            <section className="py-28 bg-[#0f2a44] text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="font-space font-bold text-xs tracking-[0.3em] text-primary uppercase opacity-80">
                            Our Methodology
                        </span>
                        <h2 className="font-space text-3xl md:text-4xl font-bold mt-4">
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
                            <div key={idx} className="relative group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                                <span className="absolute -top-6 left-8 font-space text-5xl font-bold text-white/10 group-hover:text-primary transition-colors">
                                    {item.step}
                                </span>
                                <h3 className="font-space text-2xl font-bold mb-4 mt-4 text-primary">
                                    {item.title}
                                </h3>
                                <p className="font-arimo text-gray-300 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== EXPERTISE (Minimal Grid) ===== */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <span className="font-space font-bold text-xs tracking-[0.2em] text-primary uppercase">
                        Expertise
                    </span>
                    <h2 className="font-space text-4xl font-bold text-[#0f2a44] mt-3">
                        Industries We Advise
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        'Financial Services & Family Offices',
                        'Technology & Digital Platforms',
                        'Healthcare & Life Sciences',
                        'Real Estate & Infrastructure',
                        'Energy & Sustainability',
                        'Government & Semi-Government Entities'
                    ].map((industry, i) => (
                        <div key={i} className="group p-8 bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300 rounded-xl">
                            <h3 className="font-space text-lg font-bold text-[#0f2a44] group-hover:text-primary transition-colors">
                                {industry}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== PHILOSOPHY (Feature Box) ===== */}
            <section className="pb-24 px-6 max-w-7xl mx-auto">
                <div className="bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center rounded-3xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#0f2a44]/90"></div>
                    <div className="relative z-10 p-12 md:p-20 text-center">
                        <span className="font-space font-bold text-xs tracking-[0.25em] text-white/70 mb-6 block">
                            OUR PHILOSOPHY
                        </span>
                        <h2 className="font-space text-2xl md:text-5xl font-bold text-white leading-tight mb-8 max-w-4xl mx-auto">
                            “Strategy succeeds when global ambition is aligned with regional intelligence.”
                        </h2>
                        <p className="font-arimo text-lg text-gray-300 max-w-2xl mx-auto">
                            We guide organizations through complex regulatory, cultural, and commercial environments—transforming uncertainty into sustainable growth.
                        </p>
                    </div>
                </div>
            </section>


        </>
    );
}
