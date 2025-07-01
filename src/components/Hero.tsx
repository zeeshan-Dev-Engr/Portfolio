'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiCoursera } from 'react-icons/si';
import Image from 'next/image';

const socialLinks = [
  {
    icon: FiGithub,
    href: 'https://github.com/zeeshan-Dev-Engr?tab=repositories',
    label: 'GitHub'
  },
  {
    icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/zeeshan-anwar-73a8a828a/',
    label: 'LinkedIn'
  },
  {
    icon: SiCoursera,
    href: 'https://www.credly.com/users/zeeshan-anwar.af7e7562/edit',
    label: 'Credly'
  },
  {
    icon: FiMail,
    href: 'mailto:anwarzeeshan484@gmail.com',
    label: 'Email'
  }
];

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-48 h-48 mx-auto mb-8 relative"
        >
          <Image
            src="/profile.png"
            alt="Zeeshan Anwar"
            fill
            priority
            className="rounded-full object-cover shadow-xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Zeeshan Anwar
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
            Full-Stack Developer | AI Enthusiast
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8"
        >
          I'm a Computer Science student passionate about building impactful, intelligent software.
          Specializing in full-stack development with MERN stack and exploring AI technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-6 mb-8"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="/resume.pdf"
            download
            className="btn btn-primary inline-flex items-center"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}