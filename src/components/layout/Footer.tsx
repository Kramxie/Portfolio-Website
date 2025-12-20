"use client";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { personalInfo, socialLinks, navLinks } from "@/data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-dark-200 border-t border-gray-200 dark:border-dark-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <motion.a
              href="#home"
              className="text-2xl font-bold inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gradient">{`<${personalInfo.firstName}/>`}</span>
            </motion.a>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {personalInfo.role}
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              {personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Connect With Me
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-dark-300 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
              {personalInfo.email}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-300 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center justify-center gap-1">
            © {currentYear} {personalInfo.name}. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
