"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader = ({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`text-center mb-12 md:mb-16 ${className}`}
    >
      <h2 className="heading-secondary text-gray-900 dark:text-gray-100 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex justify-center">
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full" />
      </div>
    </motion.div>
  );
};

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  bgColor?: "white" | "gray";
}

export const SectionWrapper = ({
  id,
  children,
  className = "",
  bgColor = "white",
}: SectionWrapperProps) => {
  const bgClass =
    bgColor === "gray"
      ? "bg-gray-50 dark:bg-dark-200"
      : "bg-white dark:bg-dark-100";

  return (
    <section id={id} className={`section-padding ${bgClass} ${className}`}>
      <div className="container-custom">{children}</div>
    </section>
  );
};

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedCard = ({
  children,
  className = "",
  delay = 0,
}: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`card ${className}`}
    >
      {children}
    </motion.div>
  );
};
