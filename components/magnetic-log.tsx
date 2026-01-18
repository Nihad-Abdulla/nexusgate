'use client';

import { useEffect, useState } from "react";
import { Magnetic } from "./animation/magnetic-motion";

function LogoSvg({ className = '' }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 320 300"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            fill="currentColor"
        >
            <path d="M32 0h193.6c17.7 0 32 14.3 32 32v41.6c0 35.3-28.7 64-64 64h-25.6c-17.7 0-32 14.3-32 32v73.6c0 17.7 14.3 32 32 32h73.6c17.7 0 32 14.3 32 32V300c0 17.7-14.3 32-32 32H128c-53 0-96-43-96-96V32C32 14.3 46.3 0 64 0h-32zm96 32c-17.7 0-32 14.3-32 32v41.6c0 35.3 28.7 64 64 64 35.3 0 64-28.7 64-64V64c0-17.7-14.3-32-32-32h-64z" />
            <path d="M288 32h-25.6c17.7 0 32 14.3 32 32v41.6c0 35.3-28.7 64-64 64-35.3 0-64 28.7-64 64V300h73.6c53 0 96-43 96-96V64c0-17.7-14.3-32-32-32h-16z" />
        </svg>
    );
}

// Demo Component
export default function MagneticLogoGrid() {
    const [items, setItems] = useState<number[]>([]);
    const [currentCols, setCurrentCols] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            let cols;
            if (window.innerWidth >= 1536) {
                cols = 13;
            } else if (window.innerWidth >= 1280) {
                cols = 11;
            } else if (window.innerWidth >= 1024) {
                cols = 9;
            } else if (window.innerWidth >= 768) {
                cols = 7;
            } else if (window.innerWidth >= 640) {
                cols = 5;
            } else {
                cols = 3;
            }
            setCurrentCols(cols);
            setItems(Array.from({ length: cols * 5 }, (_, i) => i));
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isCenterLogo = (index: number) => {
        const row = Math.floor(index / currentCols);
        const col = index % currentCols;
        const centerRow = 2;
        const centerCol = Math.floor(currentCols / 2);

        return row === centerRow && col === centerCol;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center py-20 px-4">
            <div className="w-full max-w-7xl">

                <div className="grid grid-cols-3 grid-rows-5 gap-7 sm:grid-cols-5 md:grid-cols-7 md:gap-7 lg:grid-cols-9 xl:grid-cols-11 2xl:grid-cols-[repeat(13,minmax(0,1fr))]">
                    {items.map((index) => {
                        const isCenter = isCenterLogo(index);

                        return (
                            <Magnetic
                                key={`logo-${index}`}
                                range={270}
                                intensity={isCenter ? 0.18 : 0.24}
                                springOptions={{
                                    mass: 0.2,
                                    damping: 2.2,
                                    stiffness: 20,
                                }}
                            >
                                <LogoSvg
                                    className={`w-full h-full transition-all duration-150 ${isCenter ? 'text-primary' : 'text-[#ebebeb]'
                                        }`}
                                />
                            </Magnetic>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}