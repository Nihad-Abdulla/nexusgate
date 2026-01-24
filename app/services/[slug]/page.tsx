import { services } from "@/data/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/core/hader-section";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: service.title,
        description: service.shortDescription,
        openGraph: {
            images: [service.image],
        },
    };
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            {/* HERO SECTION Using PageHeader */}
            <div className="p-2 bg-gray-100">
                <PageHeader
                    backgroundImage={service.image}
                    badge="NEXUSGATE SERVICES"
                    title={service.title}
                    subtitle={service.shortDescription}
                    height="lg"
                    alignment="left"
                />
            </div>

            {/* OVERVIEW SECTION */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary font-space font-bold uppercase tracking-widest text-sm mb-4 block">
                            Overview
                        </span>
                        <h2 className="font-space text-3xl md:text-4xl font-bold text-[#0f2a44] mb-8">
                            Comprehensive {service.title}
                        </h2>
                        <p className="font-arimo text-lg text-gray-600 leading-relaxed text-justify">
                            {service.fullDescription}
                        </p>

                        <div className="mt-10">
                            <Button asChild size="lg" className="bg-primary hover:bg-[#2c8c91] text-white rounded-full px-8">
                                <Link href="/contact">Get Free Consultation</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* KEY BENEFITS */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-space font-bold uppercase tracking-widest text-sm">
                            Benefits
                        </span>
                        <h2 className="font-space text-3xl md:text-4xl font-bold text-[#0f2a44] mt-3">
                            Why Choose This Service?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
                                <div className="bg-primary/10 p-2 rounded-full shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                </div>
                                <span className="font-arimo text-gray-700 font-medium text-sm">
                                    {benefit}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS STRIP */}
            <section className="py-24 bg-[#0f2a44] text-white">
                <div className="container mx-auto px-4">
                    <div className="mb-16">
                        <span className="text-white/60 font-space font-bold uppercase tracking-widest text-sm">
                            Process
                        </span>
                        <h2 className="font-space text-3xl md:text-4xl font-bold mt-3">
                            How We Deliver
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {service.process.map((step, idx) => (
                            <div key={idx} className="relative p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group">
                                <span className="text-6xl font-space font-bold text-white/5 absolute top-4 right-4 group-hover:text-primary transition-colors">
                                    {step.step}
                                </span>
                                <h3 className="font-space text-xl font-bold text-primary mb-4 relative z-10">
                                    {step.title}
                                </h3>
                                <p className="font-arimo text-gray-300 relative z-10">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center container mx-auto px-4">
                <div className="max-w-3xl mx-auto bg-primary rounded-3xl p-12 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                    <div className="relative z-10">
                        <h2 className="font-space text-3xl font-bold mb-6">Ready to proceed with {service.title}?</h2>
                        <p className="font-arimo text-white/90 mb-8 text-lg">
                            Get in touch with our experts today for a customized proposal.
                        </p>
                        <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-bold rounded-full px-10">
                            <Link href="/contact">Contact Us Now</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
