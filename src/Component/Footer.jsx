// components/Footer.jsx
import React from "react";
import { Linkedin, Github, Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Bio Section */}
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-teal-400">Ferdous Mondol</h4>
          <p className="text-white/80 font-medium">
            Aspiring Full-Stack & Machine Learning Engineer
          </p>
          <p className="text-white/60 text-sm">
            Crafting digital experiences with passion and precision. Let's
            build something amazing together.
          </p>
          <div className="flex items-center gap-4 mt-4 text-white/80">
            <a href="https://www.linkedin.com/in/ferdous-mondol-86a4a22b1/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-500 transition">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/ferdousmondol249" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-500 transition">
              <Github size={24} />
            </a>
            <a href="https://www.facebook.com/ferdousmondol249" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/ferdous4022/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-500 transition">
              <Instagram size={24} />
            </a>
            <a href="mailto:ferdousmondol249@gmail.com" className="text-green-400 hover:text-green-500 transition">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3 md:gap-2">
          <h4 className="text-xl font-semibold text-orange-400 mb-2">Quick Links</h4>
          <a href="#about" className="hover:text-orange-300 transition">About</a>
          <a href="#projects" className="hover:text-orange-300 transition">Projects</a>
          <a href="#skills" className="hover:text-orange-300 transition">Skills</a>
          <a href="#experience" className="hover:text-orange-300 transition">Experience</a>
          <a href="#contact" className="hover:text-orange-300 transition">Contact</a>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col justify-center items-start md:items-end gap-4">
          <h4 className="text-xl font-semibold text-green-400">Let's Work Together</h4>
          <a
            href="mailto:ferdousmondol249@gmail.com"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
          >
            Available for Projects
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-white/50 text-sm">
        Made with ❤️ by Ferdous Mondol © 2025
      </div>
      <div className="mt-2 text-center">
        <a href="#top" className="text-green-400 hover:text-green-500 font-semibold transition">
          Back to top
        </a>
      </div>
    </footer>
  );
}
