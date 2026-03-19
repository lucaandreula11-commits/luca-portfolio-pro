"use client";

import { motion } from "framer-motion";
import { variants, transition } from "@/lib/animations";
import { ArrowUpRight, MousePointer2, Mail, Instagram, Linkedin } from "lucide-react";

export default function PortfolioPage() {
  return (
    <main className="relative">
      {/* --- HERO SECTION --- */}
      <section className="h-screen flex flex-col justify-center items-center px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={transition}
          className="z-10"
        >
          <span className="text-accent font-mono tracking-[0.3em] uppercase text-xs mb-6 block">
            Luca Andreula — Creative Developer
          </span>
          <h1 className="text-[15vw] md:text-[12vw] font-bold leading-[0.8] tracking-tighter uppercase italic">
            POR<br />TFO<br />LIO
          </h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <div className="w-px h-24 bg-gradient-to-b from-accent to-transparent" />
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Scorri per esplorare</p>
          </motion.div>
        </motion.div>

        {/* Sfondo decorativo */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full" />
        </div>
      </section>

      {/* --- PRESENTAZIONE --- */}
      <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold tracking-tight">L'approccio.</h2>
            <p className="text-zinc-400 text-xl leading-relaxed">
              Trasformo idee complesse in interfacce digitali memorabili. 
              La mia filosofia si basa sull'equilibrio tra **estetica brutale** e **funzionalità millimetrica**. 
              Niente fronzoli, solo performance e design.
            </p>
          </motion.div>
          {/* Placeholder Foto Profilo (1:1) */}
          <div className="aspect-square bg-zinc-900 rounded-3xl border border-zinc-800 flex items-center justify-center group overflow-hidden relative">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-zinc-700 font-mono text-xs uppercase tracking-widest">Profile_Image_Placeholder</span>
          </div>
        </div>
      </section>

      {/* --- PROGETTI --- */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-baseline mb-20 border-b border-zinc-800 pb-10">
          <h2 className="text-5xl font-bold tracking-tighter uppercase italic">Works</h2>
          <p className="text-zinc-500 font-mono text-sm">Selected Projects (04)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={variants}
              className="group cursor-pointer"
            >
              {/* Placeholder Immagine Progetto (16:9) */}
              <div className="aspect-video bg-zinc-900 rounded-2xl border border-zinc-800 mb-6 overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-mono text-xs uppercase">
                   Project_0{item}_Preview
                 </div>
                 <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center">
                    <ArrowUpRight size={48} className="text-white" />
                 </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">Progetto Alpha {item}</h3>
                  <p className="text-zinc-500 text-sm mt-2 uppercase tracking-widest">UI/UX Design • Development</p>
                </div>
                <span className="text-zinc-700 font-mono text-lg">/0{item}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CONTATTI / FOOTER --- */}
      <footer id="contact" className="py-40 px-6 border-t border-zinc-900 bg-[#080808]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase mb-12 italic">
              Let's <span className="text-accent underline">Talk</span>
            </h2>
            <a 
              href="mailto:luca@example.com" 
              className="text-2xl md:text-4xl font-light hover:text-accent transition-colors flex items-center justify-center gap-4"
            >
              <Mail className="text-accent" /> hello@lucaandreula.it
            </a>
            
            <div className="flex justify-center gap-12 mt-24">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 uppercase text-xs tracking-widest">
                <Instagram size={16} /> Instagram
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 uppercase text-xs tracking-widest">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
