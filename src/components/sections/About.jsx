import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub, FaJsSquare } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPython, SiFirebase, SiTypescript, SiFlutter, SiNextdotjs } from 'react-icons/si';

export default function About() {
  return (
    <section id="About" className="py-20 bg-black text-white">
      <div className="max-w-5xl w-full mx-auto px-4 flex flex-col items-center text-center">

        <motion.img
          src="/certificates/about1.JPG"
          alt="Praveen Kumar Singh – WebDevPraveen | Praveen SRMU"
          className="w-36 h-36 rounded-full object-cover border-4 border-blue-500 shadow-xl mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        {/* Visible bio — clean & professional */}
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto text-lg mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I'm a BCA student at <strong className="text-white">Shri Ramswaroop Memorial University (SRMU)</strong>, Lucknow,
          and a full-stack developer focused on building real-world web and mobile applications.
          I contribute to open source and love shipping products that actually matter.
        </motion.p>

        {/* Hidden SEO — Google reads, user can't see */}
        <span style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: 0, pointerEvents: 'none' }}>
          Praveen Kumar Singh known as WebDevPraveen and praveenksingh, developer at SRMU Lucknow (Praveen SRMU).
          Open-source contributor Linux Kernel, Facebook Docusaurus, NVIDIA NeMo. GSoC 2026 aspirant.
          Built Ping2Bro, gitpersonality.com, LedgerAttend. SIH 2025 participant at SRMU.
        </span>

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tech <span className="text-blue-500">Stack</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex flex-col items-center">
            <FaReact className="text-4xl text-blue-400 mb-2" /><p>React</p>
          </div>
          <div className="flex flex-col items-center">
            <SiTypescript className="text-4xl text-blue-500 mb-2" /><p>TypeScript</p>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-4xl text-green-500 mb-2" /><p>Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <SiFirebase className="text-4xl text-yellow-400 mb-2" /><p>Firebase</p>
          </div>
          <div className="flex flex-col items-center">
            <SiFlutter className="text-4xl text-blue-300 mb-2" /><p>Flutter</p>
          </div>
          <div className="flex flex-col items-center">
            <SiNextdotjs className="text-4xl text-white mb-2" /><p>Next.js</p>
          </div>
          <div className="flex flex-col items-center">
            <FaJsSquare className="text-4xl text-yellow-400 mb-2" /><p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-4xl text-cyan-400 mb-2" /><p>Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb className="text-4xl text-green-400 mb-2" /><p>MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <SiExpress className="text-4xl text-gray-300 mb-2" /><p>Express</p>
          </div>
          <div className="flex flex-col items-center">
            <SiPython className="text-4xl text-yellow-300 mb-2" /><p>Python</p>
          </div>
          <div className="flex flex-col items-center">
            <FaGithub className="text-4xl text-white mb-2" /><p>Open Source</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}