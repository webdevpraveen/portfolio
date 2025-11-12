import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [

  {
    title: 'Alumni Connect SIH 2025',
    description: 'Alumni Management System - A centralized platform for connecting alumni and managing college networks.',
    tech: ['Reactjs', 'Typescripts', 'HTML', 'CSS', 'Firebase'],
    github: 'https://github.com/webdevpraveen/alumniconnectsih25',
  },
  {
    title: 'Readme File',
    description: 'A Simple README File',
    tech: ['HTML', 'HTML'],
    github: 'https://github.com/PremKumarY/Construction.git',
  },
  {
    title: 'My Portfolio',
    description: 'A personal portfolio showcasing my projects, skills, and experience.',
    tech: ['Python', 'Django','HTML', 'CSS', 'Js','Bootstrap'],
    github: 'https://github.com/webdevpraveen/portfolio',
  },
  {
    title: 'Websites for Local Businesses',
    description: 'A portfolio Website for Local Businesses of Cyber Cafe',
    tech: ['HTML', 'CSS','Blogspot'],
    github: 'https://drishtionlinegkp.blogspot.com/',
  },
];

export default function Projects() {
  return (
    <section id="Projects" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          --- <br /> <span className="text-blue-500">
          My </span>Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-white/10 rounded-full text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex items-center gap-1 text-sm"
                >
                  <FaGithub /> View Code
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
