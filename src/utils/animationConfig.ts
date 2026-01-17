// Optimized animation configurations for better scroll performance
export const animationConfig = {
    // Viewport configuration - triggers when 30% of element is visible
    viewport: {
        once: true,
        amount: 0.3, // Reduced from default 0.5 to trigger earlier and reduce simultaneous animations
        margin: "0px 0px -10% 0px" // Start animation slightly before element enters viewport
    },

    // Giant background text animations
    giantText: {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 0.8, ease: "easeOut" }
    },

    // Section title animations
    title: {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" }
    },

    // Card/Grid item animations
    card: {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        transition: (index: number) => ({
            duration: 0.4,
            delay: index * 0.05,
            ease: "easeOut"
        })
    },

    // Hover effects for cards
    cardHover: {
        whileHover: { y: -2, scale: 1.01 },
        transition: { duration: 0.2, ease: "easeInOut" }
    },

    // Button animations
    button: {
        whileHover: { scale: 1.02, y: -1 },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.2, ease: "easeInOut" }
    }
};

// CSS classes for performance optimization
export const performanceClasses = {
    // Add to animated elements to hint browser about upcoming transforms
    willChange: "will-change-transform",
    // Add to elements with opacity animations
    willChangeOpacity: "will-change-opacity",
    // GPU acceleration
    gpuAccelerated: "transform-gpu"
};
