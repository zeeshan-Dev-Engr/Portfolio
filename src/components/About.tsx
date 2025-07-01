'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'React.js', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Python', icon: FaPython },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
];

const skillCategories = [
  {
    title: 'Programming Languages & Technologies',
    items: ['C++', 'Python', 'JavaScript', 'TypeScript', 'HTML, HTML5', 'CSS, Tailwind CSS']
  },
  {
    title: 'Web Development & Frameworks',
    items: ['Next.js', 'Express.js', 'Full-Stack Development', 'MERN Stack', 'Front-End Development']
  },
  {
    title: 'AI & Data Science',
    items: ['Generative AI', 'Prompt Engineering']
  }
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center">
            I'm a Computer Science student with a strong passion for building impactful, intelligent software.
            I specialize in full-stack development using the MERN stack and am actively expanding my expertise
            in Python and AI technologies.
          </p>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform"
                >
                  <skill.icon className="w-12 h-12 text-primary mb-3" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                      className="skill-tag"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}