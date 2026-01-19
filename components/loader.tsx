'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

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
                        <div className="p-4 rounded-2xl">
                            <Image
                                src="/LOGO FILES_SECONDARY LOGO-05.svg"
                                alt="NexusGate Logo"
                                width={128}
                                height={128}
                                className="h-32 w-32 object-contain brightness-0 invert"
                            />
                        </div>


                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
