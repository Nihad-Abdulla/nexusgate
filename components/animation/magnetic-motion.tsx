'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, type SpringOptions } from 'framer-motion';

interface MagneticProps {
    children: React.ReactNode;
    intensity?: number;
    range?: number;
    springOptions?: SpringOptions;
    className?: string;
}

const DEFAULT_SPRING_CONFIG: SpringOptions = {
    stiffness: 26.7,
    damping: 4.1,
    mass: 0.2
};

export function Magnetic({
    children,
    intensity = 0.6,
    range = 100,
    springOptions = DEFAULT_SPRING_CONFIG,
    className = ''
}: MagneticProps) {
    const [isHovered, setIsHovered] = useState(true);
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, springOptions);
    const springY = useSpring(y, springOptions);

    useEffect(() => {
        const calculateDistance = (e: MouseEvent) => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const distanceX = e.clientX - centerX;
                const distanceY = e.clientY - centerY;

                const absoluteDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

                if (isHovered && absoluteDistance <= range) {
                    const scale = 1 - absoluteDistance / range;
                    x.set(distanceX * intensity * scale);
                    y.set(distanceY * intensity * scale);
                } else {
                    x.set(0);
                    y.set(0);
                }
            }
        };

        document.addEventListener('mousemove', calculateDistance);

        return () => {
            document.removeEventListener('mousemove', calculateDistance);
        };
    }, [isHovered, intensity, range, x, y]);

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{ x: springX, y: springY }}
        >
            {children}
        </motion.div>
    );
}