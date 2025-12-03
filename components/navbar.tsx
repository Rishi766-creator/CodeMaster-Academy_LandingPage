"use client"

import { Menu, X, User } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setIsOpen(false)
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
            CodeMaster Academy
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
            >
              Contact
            </button>
            <button
              className="p-2 rounded-full bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/30 hover:border-purple-400 transition-all"
              aria-label="Profile"
            >
              <User size={20} className="text-purple-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium text-left"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium text-left"
            >
              Contact
            </button>
            <button className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors font-medium text-left">
              <User size={20} />
              Profile
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
