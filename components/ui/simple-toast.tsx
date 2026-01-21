'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { useEffect } from 'react';

interface ToastProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
}

export function Toast({ message, isVisible, onClose }: ToastProps) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0f2a44] text-white px-6 py-4 rounded-xl shadow-2xl border border-white/10"
                >
                    <div className="bg-green-500/20 p-2 rounded-full">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm">Success</h4>
                        <p className="text-sm text-gray-300">{message}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="ml-4 hover:bg-white/10 p-1 rounded-full transition-colors"
                    >
                        <X className="w-4 h-4 text-gray-400" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
