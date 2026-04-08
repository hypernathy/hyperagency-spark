import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const variantMap = {
  'fade-up': fadeUp,
  'fade-in': fadeIn,
  'slide-left': slideLeft,
  'slide-right': slideRight,
  'scale-up': scaleUp,
};

type AnimationType = keyof typeof variantMap;

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'p' | 'h2' | 'span';
}

export default function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.7,
  className,
  as = 'div',
}: ScrollRevealProps) {
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      variants={variantMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}

// Stagger container for child animations
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  as?: 'div' | 'ul' | 'section';
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.12,
  as = 'div',
}: StaggerContainerProps) {
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </Component>
  );
}

// Stagger item (must be child of StaggerContainer)
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  variant?: AnimationType;
  duration?: number;
}

export function StaggerItem({
  children,
  className,
  variant = 'fade-up',
  duration = 0.6,
}: StaggerItemProps) {
  return (
    <motion.div
      variants={variantMap[variant]}
      transition={{ duration, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
