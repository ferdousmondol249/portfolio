// components/ProjectsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCode } from "react-icons/fa";
import { SiReact, SiPython } from "react-icons/si";

// Import your project images
import doctorAppImg from "../assets/image3.png";
import failureAcademyImg from "../assets/image4.png";
import onlineShoeShopImg from "../assets/image5.png";
import electrofixImg from "../assets/image6.png";
import foodSellingImg from "../assets/image7.png";
import carPrice from '../assets/carPrice.png'
import customerChurn from '../assets/customerChurn.png'
import spamDetection from '../assets/spam.png'
import fashionRecommender from '../assets/Fashionn.png'
import handWrittenDigit from '../assets/hand.png'
import graduateAdmission from '../assets/Graduate.png'
import whatsappChat from '../assets/whatsapp.png'
import kaggleBank from '../assets/Bank.png'
// --- Web Development Projects ---
const webProjects = [
  {
    title: "Doctor Appointment",
    image: doctorAppImg,
    description:
      "A full-stack medical appointment booking system integrating ML models to predict patient no-shows and optimize scheduling. Built with React, FastAPI, and MongoDB.",
    link: "https://github.com/ferdousmondol249/doctor-appointment",
    tags: ["React", "FastAPI", "MongoDB", "ML"],
  },
  {
    title: "Failure Academy",
    image: failureAcademyImg,
    description:
      "An online education platform where students can purchase courses, access PDFs, and track progress. Built using React, Redux Toolkit, Node.js, and MongoDB.",
    link: "https://github.com/ferdousmondol249/failure-academy",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
  },
  {
    title: "Online Shoe Shop",
    image: onlineShoeShopImg,
    description:
      "A modern e-commerce platform for selling shoes with a responsive UI and integrated payment gateway.",
    link: "https://github.com/ferdousmondol249/online-shoe-shop",
    tags: ["React", "E-commerce", "Payment Integration"],
  },
  {
    title: "Electrofix",
    image: electrofixImg,
    description:
      "Full-stack e-commerce platform for electronics with seamless UX and clean UI using React & TailwindCSS.",
    link: "https://github.com/ferdousmondol249/electrofix",
    tags: ["React", "TailwindCSS", "Full-Stack"],
  },
  {
    title: "Online Food Selling Website",
    image: foodSellingImg,
    description: "Complete food ordering and management system.",
    link: "https://github.com/ferdousmondol249/online-food-selling",
    tags: ["React", "Node.js", "MongoDB"],
  },
];

// --- Machine Learning Projects ---
const mlProjects = [
  {
    title: "Car Price Prediction",
    image: carPrice,
    description:
      "Regression model to predict car prices based on historical data.",
    link: "https://github.com/ferdousmondol249/Car-price-prediction",
    tags: ["Python", "ML", "Regression"],
  },
  {
    title: "Customer Churn Analysis",
    image: customerChurn,
    description:
      "Classification model predicting bank customer churn using ML algorithms.",
    link: "https://github.com/ferdousmondol249/Customer-churn-of-Bank",
    tags: ["Python", "Scikit-learn", "ML"],
  },
  {
    title: "Spam Detection (NLP)",
    image: spamDetection,
    description:
      "NLP-based SMS spam filtering using machine learning models.",
    link: "https://github.com/ferdousmondol249/Spam-detection-using-machine-learning",
    tags: ["NLP", "Python", "ML"],
  },
  {
    title: "Fashion Recommender System",
    image: fashionRecommender,
    description:
      "Product-based recommendation system for fashion items.",
    link: "https://github.com/ferdousmondol249/Fashion-Recommender-System",
    tags: ["Python", "Deep Learning", "Recommender"],
  },
  {
    title: "Handwritten Digit Classification",
    image: handWrittenDigit,
    description:
      "CNN model trained on MNIST dataset to classify digits accurately.",
    link: "https://github.com/ferdousmondol249/Hand-Written-Digit-Classification",
    tags: ["CNN", "Deep Learning", "Python"],
  },
  {
    title: "Graduate Admission Prediction",
    image: graduateAdmission,
    description:
      "Regression model predicting graduate admission chances based on GRE and GPA.",
    link: "https://github.com/ferdousmondol249/Graduate-Admission-",
    tags: ["Regression", "ML", "Python"],
  },
  {
    title: "WhatsApp Chat Analysis",
    image: whatsappChat,
    description:
      "NLP-based data analysis of chat datasets to extract insights.",
    link: "https://github.com/ferdousmondol249/WhatsApp-chat-Analysis",
    tags: ["Python", "NLP", "EDA"],
  },
  {
    title: "Kaggle Bank Classification",
    image: kaggleBank,
    description:
      "Binary classification ML project for Kaggle banking dataset.",
    link: "https://github.com/ferdousmondol249/kaggle-Binary-classifiication-on-a-bank",
    tags: ["ML", "Classification", "Python"],
  },
];

export default function ProjectsSection() {
  return (
    <>
      {/* ====== Web Projects Section ====== */}
      <section className="relative py-20 bg-white dark:bg-slate-900 overflow-hidden mt-1">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-center flex justify-center items-center gap-3">
            <SiReact size={40} /> Web Development Projects
          </h2>
          <motion.p
            className="mb-12 text-center"
            animate={{ color: ["#475569", "#2563eb", "#475569"] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            Full-stack and frontend projects showcasing scalable and modern web applications.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center justify-between">
                    {project.title}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 dark:text-green-400 hover:text-green-800"
                    >
                      <FaGithub size={22} />
                    </a>
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== ML Projects Section ====== */}
      <section className="relative py-20 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-center flex justify-center items-center gap-3">
            <SiPython size={40} /> Machine Learning Projects
          </h2>
          <motion.p
            className="mb-12 text-center"
            animate={{ color: ["#475569", "#0ea5e9", "#475569"] }}
            transition={{ duration: 6, repeat: Infinity, delay: 0.4 }}
          >
            A collection of my ML & AI projects focusing on predictive modeling, NLP, and data-driven insights.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mlProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center justify-between">
                    {project.title}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                    >
                      <FaGithub size={22} />
                    </a>
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-emerald-100 dark:bg-emerald-700 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
