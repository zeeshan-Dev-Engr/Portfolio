'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Developer',
    company: 'Fiverr',
    period: '03/2025 - Present',
    type: 'work'
  },
  {
    title: 'Web Developer',
    company: 'Panacloud',
    location: 'Islamabad, Pakistan',
    period: '08/2023 - 09/2024',
    type: 'work'
  },
  {
    title: 'BS Computer Science',
    company: 'Virtual University',
    location: 'Pakistan',
    period: '09/2023 - Present',
    type: 'education'
  },
  {
    title: 'Certified Agentic & Robotic AI Engineer',
    company: 'PIAIC',
    period: '06/2023 - Present',
    type: 'education'
  }
];

const certifications = [
  {
    category: 'Web Development',
    items: [
      'Meta Front-End professional certificate',
      'Software Engineering Essentials – Coursera',
      'Programming with Javascript by coursera',
      'Advanced React by Meta'
    ]
  },
  {
    category: 'AI & Python',
    items: [
      'IBM AI developer professional certificate',
      'Python for Data Science, AI & Development – IBM',
      'Introduction to AI – IBM',
      'Generative AI – IBM, Coursera'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${exp.company}`}
                initial={{ opacity: 0, x: exp.type === 'work' ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center gap-8 mb-8 ${
                  exp.type === 'work' ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${exp.type === 'work' ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                  <h4 className="text-lg font-semibold mb-1">{exp.company}</h4>
                  {exp.location && (
                    <p className="text-gray-600 dark:text-gray-400 mb-1">{exp.location}</p>
                  )}
                  <p className="text-gray-500 dark:text-gray-500">{exp.period}</p>
                </div>

                <div className="relative flex items-center justify-center w-8 h-8">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <div className="absolute w-1 h-24 bg-gray-200 dark:bg-gray-700 -z-10" />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                >
                  <h4 className="text-xl font-bold mb-4">{cert.category}</h4>
                  <ul className="space-y-2">
                    {cert.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-gray-600 dark:text-gray-400"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}