"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { SectionWrapper, SectionHeader } from "@/components/ui/Section";
import { experiences } from "@/data/portfolioData";

type ExperienceType = "all" | "experience" | "education" | "certification";

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState<ExperienceType>("all");

  const filters: { type: ExperienceType; label: string; icon: typeof FaBriefcase }[] = [
    { type: "all", label: "All", icon: FaBriefcase },
    { type: "experience", label: "Experience", icon: FaBriefcase },
    { type: "education", label: "Education", icon: FaGraduationCap },
    { type: "certification", label: "Certifications", icon: FaCertificate },
  ];

  const filteredExperiences =
    activeFilter === "all"
      ? experiences
      : experiences.filter((exp) => exp.type === activeFilter);

  const getIcon = (type: string) => {
    switch (type) {
      case "experience":
        return FaBriefcase;
      case "education":
        return FaGraduationCap;
      case "certification":
        return FaCertificate;
      default:
        return FaBriefcase;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "experience":
        return "bg-blue-500";
      case "education":
        return "bg-green-500";
      case "certification":
        return "bg-purple-500";
      default:
        return "bg-primary-500";
    }
  };

  return (
    <SectionWrapper id="experience">
      <SectionHeader
        title="Experience & Education"
        subtitle="My professional journey and academic background"
      />

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {filters.map((filter) => (
          <motion.button
            key={filter.type}
            onClick={() => setActiveFilter(filter.type)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
              activeFilter === filter.type
                ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25"
                : "bg-gray-100 dark:bg-dark-300 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-400"
            }`}
          >
            <filter.icon size={16} />
            {filter.label}
          </motion.button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-400 transform md:-translate-x-1/2" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            {filteredExperiences.map((item, index) => {
              const Icon = getIcon(item.type);
              const iconColor = getIconColor(item.type);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={`relative flex items-start gap-4 md:gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Icon */}
                  <div
                    className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10 w-8 h-8 rounded-full ${iconColor} flex items-center justify-center text-white shadow-lg`}
                  >
                    <Icon size={14} />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isEven ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="card p-6 relative"
                    >
                      {/* Arrow Pointer */}
                      <div
                        className={`hidden md:block absolute top-4 ${
                          isEven ? "-right-2" : "-left-2"
                        } w-4 h-4 bg-white dark:bg-dark-200 transform rotate-45`}
                      />

                      {/* Type Badge */}
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                          item.type === "experience"
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                            : item.type === "education"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                            : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                        }`}
                      >
                        <Icon size={12} />
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {item.title}
                      </h3>

                      {/* Organization */}
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {item.organization}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt size={12} />
                          {item.startDate}
                          {item.endDate && ` - ${item.endDate}`}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt size={12} />
                          {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="space-y-2">
                          {item.highlights.map((highlight, hIndex) => (
                            <li
                              key={hIndex}
                              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  </div>

                  {/* Empty Space for Alignment */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
