import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub, FaJsSquare } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPython, SiPandas, SiNumpy, SiTensorflow, SiJupyter, SiScikitlearn } from 'react-icons/si';

export default function About() {
  return (
    <section id="About" className="py-20 bg-black text-white">
      <div className="max-w-5xl w-full mx-auto px-4 flex flex-col items-center text-center">

        {/* Profile Photo */}
        <motion.img
          src="/certificates/about1.JPG" // <-- Replace this with your actual image path
          alt="Praveen Kumar Singh"
          className="w-36 h-36 rounded-full object-cover border-4 border-blue-500 shadow-xl mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          className="text-gray-300 max-w-3xl mx-auto text-lg mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I’m a BCA student with a strong interest in web development and digital creativity. I enjoy building websites that not only look good but actually solve real problems. WordPress is my favorite tool - it allows me to turn simple ideas into full working projects without limits.

<br />

I’ve spent time understanding how design, structure, and performance come together to make a great user experience. Every new project I take helps me learn something new — whether it’s improving site speed, designing clean layouts, or experimenting with plugins.

<br />

Right now, I’m focused on becoming a complete web developer — someone who understands both the creative and technical sides of building on the web. I love what I do, and I’m excited to keep growing with every line of code I write.
          </motion.p>
{/* Heading */}
        <motion.h9
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Want to <span className="text-blue-500">Learn</span> :
        </motion.h9>
        {/* Skills with Icons */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex flex-col items-center">
            <FaReact className="text-4xl text-blue-400 mb-2" />
            <p>React</p>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-4xl text-green-500 mb-2" />
            <p>Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <SiExpress className="text-4xl text-gray-300 mb-2" />
            <p>Express</p>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb className="text-4xl text-green-400 mb-2" />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <FaJsSquare className="text-4xl text-yellow-400 mb-2" />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-4xl text-cyan-400 mb-2" />
            <p>Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <SiPython className="text-4xl text-yellow-300 mb-2" />
            <p>Python</p>
          </div>
          <div className="flex flex-col items-center">
            <SiPandas className="text-4xl text-yellow-300 mb-2" />
            <p>Pandas</p>
          </div>
          <div className="flex flex-col items-center">
            <SiNumpy className="text-4xl text-yellow-300 mb-2" />
            <p>Numpy</p>
          </div>
          <div className="flex flex-col items-center">
            <SiScikitlearn className="text-4xl text-yellow-300 mb-2" />
            <p>Scikitlearn</p>
          </div>
          <div className="flex flex-col items-center">
            <SiTensorflow className="text-4xl text-yellow-300 mb-2" />
            <p>Tensorflow</p>
          </div>
          <div className="flex flex-col items-center">
            <SiJupyter className="text-4xl text-yellow-300 mb-2" />
            <p>Jupyter</p>
          </div>


        </motion.div>
      </div>
    </section>
  );
}
