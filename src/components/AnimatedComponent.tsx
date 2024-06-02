import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedComponentProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    initial?: object;
    animate?: object;
    transition?: object;
    whileHover?: object;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children, delay = 0, className, initial, animate, transition, whileHover }) => {
    const ref = React.useRef(null);

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={animate}
            transition={transition}
            whileInView="onscreen"
            className={className} 
            whileHover={whileHover}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedComponent;
