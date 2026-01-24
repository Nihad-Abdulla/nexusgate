'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
    { name: 'Dubai Economy', src: '/partners/images-11-3.jpeg' },
    { name: 'Dubai Municipality', src: '/partners/Dubai-Municipality-Logo.png' },
    { name: 'Federal Tax Authority', src: '/partners/image-2.png' },
    { name: 'Dubai Health Authority', src: '/partners/dubai-health-authority1.png' },
    { name: 'MOHRE', src: '/partners/unnamed.png' },
    { name: 'ICP', src: '/partners/images.png' },
];

export function PartnerLogos() {
    return (
        <section className="py-20 bg-gray-50/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <span className="font-space font-bold text-[10px] tracking-[0.3em] text-gray-400 uppercase">
                    Strategic Associations & Government Partners
                </span>
            </div>

            <div className="relative w-full">
                {/* Gradient Masks for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50/50 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50/50 to-transparent z-10" />

                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-8 md:gap-16 items-center shrink-0 pr-8 md:pr-16"
                        animate={{
                            x: ['0%', '-100%'],
                        }}
                        transition={{
                            duration: 25, // Slightly faster marquee for larger images
                            ease: 'linear',
                            repeat: Infinity,
                        }}
                    >
                        {/* First set of logos */}
                        {logos.map((logo, idx) => (
                            <div key={`logo-1-${idx}`} className="relative h-24 w-44 md:h-32 md:w-64 bg-white rounded-2xl p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-90 hover:opacity-100 border border-gray-100/50">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="flex gap-8 md:gap-16 items-center shrink-0 pr-8 md:pr-16"
                        animate={{
                            x: ['0%', '-100%'],
                        }}
                        transition={{
                            duration: 25,
                            ease: 'linear',
                            repeat: Infinity,
                        }}
                    >
                        {/* Second set of logos for seamless loop */}
                        {logos.map((logo, idx) => (
                            <div key={`logo-2-${idx}`} className="relative h-24 w-44 md:h-32 md:w-64 bg-white rounded-2xl p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-90 hover:opacity-100 border border-gray-100/50">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
