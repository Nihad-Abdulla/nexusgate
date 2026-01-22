'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        title: "Initial Consultation",
        description: "We discuss your business goals and identify the ideal legal structure and jurisdiction.",
        icon: "💬"
    },
    {
        title: "Trade Name Reservation",
        description: "Securing your unique business identity with the Department of Economy and Tourism.",
        icon: "📝"
    },
    {
        title: "Document Preparation",
        description: "Collecting and certifying all necessary legal documents for government submission.",
        icon: "📂"
    },
    {
        title: "License & Visa Issuance",
        description: "Receiving your official trade license and processing residency permits.",
        icon: "🏢"
    }
];

export function AnimatedJourney() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-space font-bold text-xs tracking-[0.2em] text-primary uppercase"
                    >
                        How It Works
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-space text-3xl md:text-5xl font-bold text-[#0f2a44] mt-4"
                    >
                        Your Setup Journey
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Background Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gray-100 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-gray-100 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-primary/10 transition-colors">
                                {step.icon}
                            </div>
                            <h3 className="font-space text-xl font-bold text-[#0f2a44] mb-4">
                                {step.title}
                            </h3>
                            <p className="font-arimo text-gray-600 leading-relaxed text-sm">
                                {step.description}
                            </p>
                            <div className="mt-6 flex items-center gap-2">
                                <span className="text-primary font-bold text-xs">STEP {index + 1}</span>
                                <div className="h-[1px] flex-grow bg-gray-100 group-hover:bg-primary/30 transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
