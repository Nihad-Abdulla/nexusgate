'use client';

import { useEffect, useState } from "react";
import { Magnetic } from "./animation/magnetic-motion";

function LogoSvg({ className = '' }: { className?: string }) {
    return (
        <svg
            viewBox="80 60 380 380"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            fill="currentColor"
        >
            <path d="M156.15,397.68c-16.38-26.98-31.81-52.38-31.81-82s12.22-54.97,35.33-72.85c17.53-13.56,41.83-22.91,68.41-26.34l4.18-.54-1.36-3.99c-4.93-14.36-7.43-27.45-7.43-38.87,0-34.24,10.55-60.79,31.35-78.95,7.2-6.27,15.54-11.49,25.01-15.62,9.46-4.14,20.04-7.2,31.7-9.19h.02c.44-.08,16.85-2.55,17.87-2.71h-147.46c-48.53,0-87.87,39.34-87.87,87.87v171.48c0,42.69,30.44,78.27,70.8,86.21l-.03-.04c-2.93-4.99-6-10.03-8.71-14.48Z" />
            <path d="M246.56,252.11c-19.88,2.01-38.02,8.59-51.08,18.53-10.39,7.89-22.75,21.87-22.75,43.59,0,22.96,14.4,46.07,32.64,75.31,3.81,6.1,7.71,12.37,11.78,19.1l3.15,5.22h133.13c.83,0,1.65-.01,2.47-.04l-107.07-161.94-2.27.22Z" />
            <path d="M427.81,107.7h-78.83c-65.76,0-79.57,33.44-79.57,61.5,0,33.94,26.07,71.95,59.07,120.07l.08.12c8.02,11.7,16.31,23.8,24.76,36.61,14,21.78,28.77,44.1,43.05,65.68l5.19,7.84c23.94-15.69,39.75-42.76,39.75-73.53v-171.48c0-17.21-4.95-33.25-13.49-46.81Z" />
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