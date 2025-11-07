import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Brain, Code, Cpu } from "lucide-react"; // icons

const experiences = [
  {
    title: "Full-Stack Web Development Intern",
    company: "SoftLab IT, Dhaka, Bangladesh",
    duration: "2025 – Present",
    description: [
      "Developed full-stack web applications using modern technologies.",
      "Collaborated with team members on feature design and implementation.",
      "Improved problem-solving and debugging skills through real-world projects.",
    ],
  },
  {
    title: "Math Teacher (Part-Time)",
    company: "Udvash, Dhaka, Bangladesh",
    duration: "2022 – Present",
    description: [
      "Taught advanced mathematics to high school and college-level students.",
      "Enhanced communication and leadership skills through interactive teaching.",
    ],
  },
  {
    title: "Machine Learning Researcher",
    company: "AI Research Group – University Project",
    duration: "Jan 2024 – May 2024",
    description: [
      "Worked on model optimization for car price prediction and customer churn analysis.",
      "Used Scikit-learn, Pandas, and NumPy for regression and classification tasks.",
      "Focused on data preprocessing and hyperparameter tuning for better accuracy.",
    ],
  },
];

const education = {
  degree: "B.Sc. in Computer Science and Engineering",
  university: "University of Dhaka, Bangladesh",
  duration: "2021 – Present (Expected: December 2025)",
  details: "Currently 4th Year, 2nd Semester",
};

export default function MyExperience() {
  return (
    <section className="relative py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-white overflow-hidden mt-1">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-emerald-600 dark:text-green-400">
            Professional Summary
          </h2>
          <motion.p
            className="max-w-4xl mx-auto leading-relaxed text-lg"
            animate={{ color: ["#334155", "#059669", "#334155"] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            A passionate and dedicated <span className="text-green-300 font-semibold">Computer Science and Engineering</span> student at the University of Dhaka. 
            Strong interest in <span className="text-green-300 font-semibold">Machine Learning, Deep Learning, and Full-Stack Development</span>. 
            Skilled in developing real-world applications and solving data-driven problems.
            Actively seeking opportunities to apply my knowledge through internships or collaborative projects.
          </motion.p>
        </motion.div>

        {/* Experience Section */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 flex justify-center items-center gap-3">
          <Briefcase size={38} className="text-green-400" />
          My Experience
        </h2>
        <motion.p
          className="text-center mb-12"
          animate={{ color: ["#475569", "#10b981", "#475569"] }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.3 }}
        >
          A journey of learning, teaching, and building impactful solutions.
        </motion.p>

        <div className="relative border-l-4 border-green-500 pl-8 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-green-500/20 transition-all duration-300 border border-slate-200 dark:border-transparent"
            >
              <h3 className="text-2xl font-semibold text-emerald-700 dark:text-green-400">{exp.title}</h3>
              <p className="text-lg text-slate-800 dark:text-white/90">{exp.company}</p>
              <p className="text-sm text-emerald-600 dark:text-green-300 mb-4">{exp.duration}</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-white/80">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 justify-center">
            <GraduationCap size={32} className="text-green-400" /> Education
          </h3>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg max-w-3xl mx-auto hover:shadow-green-500/20 transition-all duration-300 border border-slate-200 dark:border-transparent"
          >
            <h4 className="text-2xl font-semibold text-emerald-700 dark:text-green-400">{education.degree}</h4>
            <p className="text-slate-800 dark:text-white/90">{education.university}</p>
            <p className="text-emerald-600 dark:text-green-300">{education.duration}</p>
            <p className="text-slate-700 dark:text-white/80 mt-2">{education.details}</p>
          </motion.div>
        </div>

        {/* Research Interests */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-4 flex justify-center items-center gap-3">
            <Brain size={32} className="text-green-400" /> Current Research
          </h3>
          <motion.p
            className="max-w-3xl mx-auto leading-relaxed text-center md:text-left"
            animate={{ color: ["#334155", "#2563eb", "#334155"] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            Currently researching on <span className="text-green-300 font-semibold">Device-to-Device Power Optimization</span> 
            to improve energy efficiency and optimize resource allocation in distributed systems.
            Exploring how Machine Learning can be combined with optimization algorithms for adaptive, scalable solutions.
          </motion.p>
        </div>

        {/* Skills */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-6 flex justify-center items-center gap-3">
            <Code size={32} className="text-green-400" /> Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-slate-800 dark:text-white/90 max-w-4xl mx-auto">
            {[
              "JavaScript", "TypeScript", "C++", "Python", "Node.js", "React",
              "Angular", "Redux Toolkit", "FastAPI", "MongoDB", "SQL", "Docker",
              "GitHub", "TailwindCSS", "PyTorch", "Scikit-learn", "Pandas","NestJs",
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-slate-800/70 rounded-lg py-3 text-center hover:bg-green-100 dark:hover:bg-green-500/20 border border-slate-200 dark:border-slate-700"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research Interests */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-4 flex justify-center items-center gap-3">
            <Cpu size={32} className="text-green-400" /> Research Interests
          </h3>
          <motion.p
            className="max-w-3xl mx-auto leading-relaxed"
            animate={{ color: ["#334155", "#22c55e", "#334155"] }}
            transition={{ duration: 6, repeat: Infinity, delay: 0.4 }}
          >
            • Machine Learning & Deep Learning <br />
            • Cloud Computing Resource Optimization <br />
            • Blockchain-Based Decentralized Systems
          </motion.p>
        </div>
      </div>
    </section>
  );
}
