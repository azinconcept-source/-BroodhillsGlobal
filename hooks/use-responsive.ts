"use client";

import { useState, useEffect } from "react";

export function useResponsive() {
    const [width, setWidth] = useState<number>(1200);

    useEffect(() => {
        const update = () => setWidth(window.innerWidth);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return {
        isMobile: width <= 768,
        isTablet: width <= 1024,
        width,
    };
}
