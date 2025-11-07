// components/GetInTouch.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Linkedin, Github, Facebook, Instagram } from "lucide-react";

export default function GetTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section className="relative py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-white overflow-hidden mt-1">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-emerald-600 dark:text-green-400">
            Let's Work Together
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Get In Touch
          </h3>
          <p className="text-slate-700 dark:text-white/80 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from
            you. Let's create something amazing together.
          </p>
        </motion.div>

        {/* Contact Info + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-semibold text-green-400 mb-4">
              Contact Information
            </h4>
            <div className="space-y-4 text-slate-800 dark:text-white/90">
              <p className="flex items-center gap-3">
                <Mail size={20} className="text-green-400" />{" "}
                <span>ferdousmondol249@gmail.com</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={20} className="text-green-400" />{" "}
                <span>+8801762996015</span>
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={20} className="text-green-400" />{" "}
                <span>Mohammadpur, Dhaka, Bangladesh</span>
              </p>
              <p className="flex items-center gap-3">
                <Clock size={20} className="text-green-400" />{" "}
                <span>Response Time: Within 24 hours</span>
              </p>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg space-y-4 border border-slate-200 dark:border-transparent"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 border border-slate-300 dark:border-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 border border-slate-300 dark:border-transparent"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 border border-slate-300 dark:border-transparent"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 border border-slate-300 dark:border-transparent"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
              {status && <p className="text-emerald-600 dark:text-green-400 mt-2">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
