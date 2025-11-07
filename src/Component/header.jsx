import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import resumePdf from '../Resume/Ferdous_Mondol_CV_ upadated.pdf'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark')
  const [showStack, setShowStack] = useState(false)
  const [pinned, setPinned] = useState(false)
  const [activeStack, setActiveStack] = useState('')
  const stackRef = useRef(null)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (stackRef.current && !stackRef.current.contains(e.target)) {
        setShowStack(false)
        setPinned(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const menu = [
    { href: '#top', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  const stackData = {
    Languages: ['JavaScript', 'TypeScript', 'C', 'C++', 'Python', 'Java', 'Kotlin'],
    Backend: ['Node.js', 'Nest.js', 'FastAPI', 'REST APIs'],
    Frontend: ['React', 'Angular', 'Redux Toolkit', 'Context', 'HTML', 'CSS', 'TailwindCSS'],
    'Frameworks/Libraries': ['MERN Stack', 'PyTorch', 'Scikit-learn', 'Pandas'],
    Databases: ['MongoDB', 'SQL'],
    Tools: ['Git', 'GitHub', 'Docker', 'Hugging Face'],
    'Operating Systems': ['Linux', 'Windows'],
    'Other Skills': ['Numerical Methods', 'Calculus', 'Linear Algebra', 'Data Analysis', 'Networking', 'Data Structures', 'Statistics & Algorithms'],
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-b border-slate-200 dark:border-transparent shadow-md transition-all duration-500 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-lg shadow-md transition-transform duration-300 hover:scale-110">
              F
            </span>
            <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              Ferdous
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 relative">
            {menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative group transition font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
              </a>
            ))}

            {/* Tech Stack dropdown */}
            <div
              ref={stackRef}
              onMouseEnter={() => setShowStack(true)}
              onMouseLeave={() => !pinned && setShowStack(false)}
              className="relative"
            >
              <button
                onClick={() => setPinned((prev) => !prev)}
                className="relative group transition font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                aria-expanded={showStack}
                aria-haspopup="true"
              >
                Tech Stack
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
              </button>

              {showStack && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-[-50px] mt-3 w-[400px] max-w-[95vw] rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl overflow-hidden z-50 flex"
                >
                  {/* Categories column */}
                  <div className="flex flex-col w-1/2 border-r border-slate-200 dark:border-slate-700">
                    {Object.keys(stackData).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveStack(cat)}
                        className={`px-4 py-2 text-left transition font-medium ${
                          activeStack === cat
                            ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Sub-items */}
                  <div className="w-1/2 p-4">
                    {activeStack && (
                      <>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                          {activeStack}
                        </h4>
                        <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
                          {stackData[activeStack].map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={resumePdf}
              download
              className="rounded-lg border px-4 py-2 transition font-medium text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Resume
            </a>

            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <a
                href="#contact"
                className="rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-4 py-2 text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Hire Me
              </a>
            </motion.div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-3 h-9 w-9 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3a9 9 0 0 0 0 18c4.97 0 9-4.03 9-9a9 9 0 0 0-9-9zm0 16a7 7 0 0 1 0-14 7 7 0 0 1 0 14z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-slate-800 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06M12 7.5a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 space-y-3">
            {menu.map((item) => (
              <a
                key={item.href}
                onClick={() => setOpen(false)}
                href={item.href}
                className="block text-slate-700 dark:text-slate-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {item.label}
              </a>
            ))}

            {/* Tech Stack (mobile accordion) */}
            <details className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <summary className="cursor-pointer select-none px-4 py-2 text-slate-800 dark:text-slate-200 font-semibold bg-slate-50 dark:bg-slate-800/60">Tech Stack</summary>
              <div className="px-4 py-3 space-y-3 bg-white dark:bg-slate-900">
                {Object.keys(stackData).map((cat) => (
                  <div key={cat}>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{cat}</h4>
                    <ul className="list-disc pl-5 text-sm text-slate-700 dark:text-slate-300">
                      {stackData[cat].map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>

            <div className="pt-3 flex gap-3">
              <a
                href={resumePdf}
                download
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2 text-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Resume
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-4 py-2 text-center text-white dark:text-white font-medium hover:scale-105 transition-transform duration-300"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
