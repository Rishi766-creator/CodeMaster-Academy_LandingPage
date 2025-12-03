"use client"
import Image from "next/image";


import Navbar from "./navbar"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">
      <Navbar />

      <div className="absolute inset-0 z-0">
        <img src="/image.png" alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-purple-900/20 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-12 md:py-20 pt-20">
        <div className="flex flex-col gap-8 items-center text-center max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.05] bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Learn to Code Faster with AI Assistance
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Interactive lessons, real projects, and AI-powered guidance — your personal coding mentor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg font-semibold overflow-hidden transition-all shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105 text-base">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <a
              href="#demo"
              className="px-8 py-4 border-2 border-purple-500/50 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all text-base flex items-center justify-center"
            >
              Try AI Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
