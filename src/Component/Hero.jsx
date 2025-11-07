import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import heroImg from "../assets/profile.jpg";

export default function Hero() {
  const names = ["Ferdous", "Mondol"];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % names.length);
    }, 1600); // swap every ~1.6s
    return () => clearInterval(t);
  }, []);
  return (
   <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 py-10 md:py-16 min-h-[70vh] md:h-[80vh] bg-gradient-to-b from-blue-50 via-blue-100 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden shadow-lg mt-2">

      
      {/* Text part */}
      <div className="text-center md:text-left space-y-5 z-10 max-w-xl">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white transition duration-500 hover:text-blue-600"
        >
          Hi, I'm
          {' '}
          <span className="relative inline-block h-[1em] overflow-hidden align-baseline text-blue-600">
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-block"
              >
                {names[idx]}
              </motion.span>
            </AnimatePresence>
          </span>{' '}
          👋
        </motion.h1>

        {/* Role / Summary with Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300"
        >
          <Typewriter
            options={{
              strings: [
                "Full Stack Web Developer...",
                "React Developer...",
                "Angular...",
                "Node.js...",
                "FastAPI...",
                "Machine Learning & NLP...",
                "Python...",
                "Nest.js...",
                "MongoDb...",
                "SQL...",
                "Deep Learning...",
                "Hugging Face..."
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 20,
            }}
          />
        </motion.div>

        {/* Skills summary */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed"
        >
          I build modern, interactive, and scalable web applications using React, Angular, Node.js, and FastAPI. Experienced in frontend & backend development with knowledge in Machine Learning, Data Science, and databases like MongoDB & SQL. Skilled in modern tools and frameworks, creating efficient and responsive solutions.
        </motion.p>

        {/* Highlighted key skills as badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start"
        >
          {["React","Angular","Node.js","NestJs","Deep Learning","FastAPI","Python","ML & NLP","MongoDB","SQL"].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm transition duration-300 hover:bg-blue-200 dark:hover:bg-blue-700 cursor-default">
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Button */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('projects') || document.querySelector('[id="projects"]');
            const header = document.querySelector('header');
            const headerOffset = header ? header.offsetHeight : 80;
            if (el) {
              const rect = el.getBoundingClientRect();
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              const targetY = rect.top + scrollTop - headerOffset;
              window.scrollTo({ top: targetY, behavior: 'smooth' });
              if (typeof history !== 'undefined' && typeof history.pushState === 'function') {
                history.pushState(null, '', '#projects');
              }
            } else {
              window.location.hash = 'projects';
            }
          }}
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View My Work
        </motion.a>
      </div>

      {/* Image part */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative z-10 mb-8 md:mb-0 transition-transform duration-500 hover:scale-105 flex-shrink-0"
      >
        <img
          src={heroImg}
          alt="Ferdous"
          className="w-40 sm:w-52 md:w-72 max-w-full h-auto rounded-full border-4 border-blue-500 shadow-lg object-cover"
        />


          {/* Experience / Roles below image */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="mt-4 text-center text-sm md:text-base text-slate-700 dark:text-slate-300 space-y-1"
            >
                <motion.p
                  animate={{ color: ["#475569", "#2563eb", "#475569"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Udvash - Math Teacher
                </motion.p>
                <motion.p
                  animate={{ color: ["#475569", "#0ea5e9", "#475569"] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.4 }}
                >
                  Intern at SoftLab It
                </motion.p>
                <motion.p
                  animate={{ color: ["#475569", "#22c55e", "#475569"] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.8 }}
                >
                  CTO of Failure Academy
                </motion.p>
            </motion.div>
      </motion.div>

 


      {/* Background floating shapes */}
      <div className="absolute -top-24 -left-20 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-16 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute top-10 right-20 w-32 h-32 bg-pink-200 dark:bg-pink-900 rounded-full opacity-30 blur-2xl animate-pulse"></div>



    </section>
    
  );
}
