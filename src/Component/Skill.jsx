import React from "react";
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiAngular, SiAntdesign, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiNestjs, SiFastapi, SiMongodb, SiFirebase, SiMysql, SiPostgresql, SiSqlite,
  SiJavascript, SiPython, SiCplusplus, SiC,
  SiDocker, SiGit, SiGithub, SiPytest
} from "react-icons/si";
import { FaBrain, FaRobot, FaChartLine, FaNetworkWired, FaMobileAlt, FaJava, FaLeaf } from "react-icons/fa";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

// Skill data
const skills = [
  {
    title: "Frontend Development",
    icon: <SiReact className="text-blue-500" />,
    items: [
      { name: "React", icon: <SiReact className="text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
      { name: "Angular", icon: <SiAngular className="text-red-500" /> },
      { name: "Material UI", icon: <FaLeaf className="text-blue-700" /> },
      { name: "Ant Design", icon: <SiAntdesign className="text-blue-600" /> },
      { name: "Shadcn", icon: <FaChartLine className="text-purple-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    ],
  },
  {
    title: "Backend Development",
    icon: <SiNodedotjs className="text-green-500" />,
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Nest.js", icon: <SiNestjs className="text-red-600" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-blue-500" /> },
      { name: "Spring Boot", icon: <FaLeaf className="text-green-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
      { name: "SQLite", icon: <SiSqlite className="text-blue-300" /> },
    ],
  },
  {
    title: "Programming Languages",
    icon: <SiJavascript className="text-yellow-400" />,
    items: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Python", icon: <SiPython className="text-blue-500" /> },
      { name: "Java", icon: <FaJava className="text-red-600" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
      { name: "C", icon: <SiC className="text-gray-500" /> },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <FaBrain className="text-purple-500" />,
    items: [
      { name: "Machine Learning", icon: <FaRobot className="text-blue-500" /> },
      { name: "Artificial Intelligence", icon: <FaBrain className="text-purple-500" /> },
      { name: "LangChain", icon: <FaChartLine className="text-green-500" /> },
      { name: "LangGraph", icon: <FaChartLine className="text-green-600" /> },
      { name: "No-Code AI Agent Development", icon: <FaRobot className="text-red-500" /> },
      { name: "Algorithms", icon: <FaNetworkWired className="text-blue-600" /> },
      { name: "Data Structures", icon: <FaNetworkWired className="text-teal-500" /> },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <SiDocker className="text-blue-500" />,
    items: [
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-black" /> },
      { name: "Pytest", icon: <SiPytest className="text-purple-500" /> },
    ],
  },
  {
    title: "Mobile Development",
    icon: <FaMobileAlt className="text-green-500" />,
    items: [
      { name: "Android", icon: <FaMobileAlt className="text-green-500" /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="relative py-20 bg-cyan-600 dark:bg-slate-900 overflow-hidden mt-1">
      {/* Header */}
      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-0">
        {/* Left Image */}
        <div className="hidden md:block w-24 md:w-32 opacity-70">
          <img src={image1} alt="decoration" className="w-full h-auto" />
        </div>

        {/* Text */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-3">
            <SiReact size={36} /> Skills & Technologies
          </h2>
          <motion.p
            className="mt-3 text-lg"
            animate={{ color: ["rgba(255,255,255,0.9)", "#c7d2fe", "rgba(255,255,255,0.9)"] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            A comprehensive toolkit of modern technologies and frameworks I use to build scalable, efficient, and innovative solutions.
          </motion.p>
        </div>

        {/* Right Image */}
        <div className="hidden md:block w-24 md:w-32 opacity-70">
          <img src={image2} alt="decoration" className="w-full h-auto" />
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto flex flex-col gap-8 mt-12">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white dark:bg-slate-700 rounded-2xl shadow-lg p-6 border-l-4 border-indigo-500 dark:border-indigo-400 hover:scale-105 transform transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{skill.title}</h3>
              <span className="ml-auto text-sm text-slate-500 dark:text-slate-400">
                {skill.items.length} Technologies
              </span>
            </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {skill.items.map((item) => (
                <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-green-100 dark:bg-gray-900 text-green-900 dark:text-green-200 px-3 py-2 rounded-lg shadow-sm transition"
                >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
                </motion.div>
            ))}
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
