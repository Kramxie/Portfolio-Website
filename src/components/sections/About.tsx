"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLaptopCode, FaRocket } from "react-icons/fa";
import { SectionWrapper, SectionHeader } from "@/components/ui/Section";
import { aboutMe, personalInfo } from "@/data/portfolioData";

const About = () => {
  const features = [
    {
      icon: FaLaptopCode,
      title: "Software Development",
      description: "Full-stack web development with modern frameworks",
    },
    {
      icon: FaRocket,
      title: "Problem Solving",
      description: "Analytical thinking and innovative solutions",
    },
  ];

  return (
    <SectionWrapper id="about" bgColor="gray">
      <SectionHeader title={aboutMe.title} subtitle={aboutMe.subtitle} />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Image/Illustration Area */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-700/20 rounded-2xl transform rotate-3" />
          
          {/* Main Card */}
          <div className="relative bg-white dark:bg-dark-200 rounded-2xl p-8 shadow-xl">
            {/* Profile Area */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary-500/30 shadow-lg">
                <Image
                  src={personalInfo.avatar || "/images/avatar.png"}
                  alt={personalInfo.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {personalInfo.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium">
                  {personalInfo.role.split("|")[0].trim()}
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {aboutMe.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-gray-50 dark:bg-dark-300"
                >
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    {highlight.label}
                  </p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {highlight.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full opacity-50" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary-700 rounded-full opacity-50" />
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Description */}
          <div className="space-y-4 mb-8">
            {aboutMe.description.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-white dark:bg-dark-300 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-3">
                  <feature.icon size={20} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
