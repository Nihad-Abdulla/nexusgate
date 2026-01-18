'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function Loader() {
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        if (!isHome) {
            setIsLoading(false);
            return;
        }

        // Simulate initial loading time or wait for resources
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds splash screen

        return () => clearTimeout(timer);
    }, [isHome]);

    if (!isHome) return null;

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }}
                        exit={{ scale: 1.2, opacity: 0, transition: { duration: 0.3 } }}
                        className="flex flex-col items-center gap-4"
                    >
                        {/* Logo */}
                        <div className="bg-white p-4 rounded-2xl shadow-xl">
                            <svg viewBox="0 0 40 40" className="h-16 w-16 text-primary" fill="currentColor">
                                <path d="M20 5 L35 20 L20 35 L5 20 Z M20 10 L30 20 L20 30 L10 20 Z" />
                                <path d="M20 15 L25 20 L20 35 M20 20 L5 20" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </div>

                        {/* Pulsing Text */}
                        <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                            <h1 className="text-2xl font-bold tracking-widest text-white">
                                NEXUSGATE
                            </h1>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
