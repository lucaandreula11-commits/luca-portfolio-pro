"use client";

import { motion } from "framer-motion";
import { variants, transition } from "../lib/animations"; // CORRETTO: ../ per uscire da app
import { ArrowUpRight, Mail, Instagram, Linkedin } from "lucide-react";

export default function PortfolioPage() {
  return (
    <main className="relative bg-black text-white">
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center px-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={variants} transition={transition}>
          <span className="text-blue-500 font-mono tracking-[0.3em] uppercase text-xs mb-6 block">
            Luca Andreula — Creative Developer
          </span>
          <h1 className="text-[15vw] md:text-[12vw] font-bold leading-[0.8] tracking-tighter uppercase italic">
            POR<br />TFO<br />LIO
          </h1>
        </motion.div>
      </section>

      {/* PROJECTS GRID */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1, 2].map((item) => (
            <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={variants} className="group cursor-pointer">
              <div className="aspect-video bg-zinc-900 rounded-2xl border border-zinc-800 mb-6 flex items-center justify-center">
                <span className="text-zinc-700 font-mono text-xs">Project_0{item}_Preview</span>
              </div>
              <h3 className="text-2xl font-bold uppercase">Progetto {item}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center border-t border-zinc-900">
        <h2 className="text-5xl font-bold mb-10 italic">Let's Talk</h2>
        <a href="mailto:hello@lucaandreula.it" className="text-blue-500 text-2xl underline">hello@lucaandreula.it</a>
      </footer>
    </main>
  );
}
