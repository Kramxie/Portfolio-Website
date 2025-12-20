"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/Section";
import { skillCategories } from "@/data/portfolioData";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <SectionWrapper id="skills">
      <SectionHeader
        title="Skills & Tech Stack"
        subtitle="Technologies and tools I've worked with"
      />

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {skillCategories.map((category, index) => (
          <motion.button
            key={category.title}
            onClick={() => setActiveCategory(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
              activeCategory === index
                ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25"
                : "bg-gray-100 dark:bg-dark-300 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-400"
            }`}
          >
            {category.title}
          </motion.button>
        ))}
      </div>

      {/* Skills Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Category Description */}
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {skillCategories[activeCategory].description}
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group relative"
              >
                <div className="card p-4 text-center h-full flex flex-col items-center justify-center gap-3 hover:border-primary-500 dark:hover:border-primary-400 border-2 border-transparent">
                  {/* Icon */}
                  <div className="text-4xl text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    <skill.icon />
                  </div>

                  {/* Name */}
                  <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                    {skill.name}
                  </span>

                  {/* Skill Level Bar */}
                  <div className="w-full h-1.5 bg-gray-200 dark:bg-dark-400 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.05 + 0.3, duration: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"
                    />
                  </div>

                  {/* Level Percentage (shows on hover) */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {skill.level}%
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* All Skills Overview (Mini badges) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h3 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
          Full Tech Stack Overview
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {skillCategories.flatMap((category) =>
            category.skills.map((skill) => (
              <motion.span
                key={`${category.title}-${skill.name}`}
                whileHover={{ scale: 1.1 }}
                className="skill-badge"
              >
                <skill.icon size={16} />
                {skill.name}
              </motion.span>
            ))
          )}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
