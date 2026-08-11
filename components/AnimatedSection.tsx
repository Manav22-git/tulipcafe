"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, CSSProperties } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  style?: CSSProperties;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0.1,
  direction = "up",
  duration = 0.5,
  style
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 }
        };
      case "left":
        return {
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 }
        };
      case "right":
        return {
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 }
        };
      case "none":
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
