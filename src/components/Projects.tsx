'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import projects from '../data/projects';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import React, { useEffect, useState } from 'react';

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here are some of my recent works
          </p>
        </motion.div>
        <div className="relative">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem
                  key={project.title}
                  className="basis-full pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full flex flex-col min-h-[220px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[420px] justify-between px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-6">
                    <CardContent className="flex flex-col h-full p-0">
                      <div className="relative overflow-hidden rounded-t-xl mb-2 sm:mb-3 md:mb-4 aspect-video">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 md:mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-1 sm:mb-2 md:mb-4 text-xs sm:text-sm md:text-base">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 md:gap-2 mb-1 sm:mb-2 md:mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="skill-tag text-[9px] sm:text-[10px] md:text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-1 sm:gap-2 md:gap-4 mt-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 md:gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-xs md:text-base"
                        >
                          <FiGithub className="w-5 h-5" />
                          <span>Code</span>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 md:gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-xs md:text-base"
                        >
                          <FiExternalLink className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        {/* More Projects Icon */}
        <div className="flex justify-center mt-8">
          <a
            href="/projects"
            className="flex flex-col items-center text-primary hover:text-primary/80 transition-colors"
          >
            <FiExternalLink className="w-8 h-8 mb-1" />
            <span className="text-sm font-medium">more project</span>
          </a>
        </div>
      </div>
    </section>
  );
}