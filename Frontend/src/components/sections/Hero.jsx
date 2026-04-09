import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-background transition-colors duration-300" id="hero">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 dark:bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 dark:bg-secondary/20 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-8 flex flex-col items-center justify-center relative z-10 w-full text-center">
        <motion.div 
          className="space-y-8 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-surface-container-high border border-slate-300 dark:border-outline-variant/15">
            <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-tertiary"></span>
            <span className="text-[0.75rem] font-medium tracking-widest uppercase text-slate-600 dark:text-on-surface-variant font-label">Available for Projects</span>
          </div>
          
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-on-surface">
            Devendra <br />
            <span className="text-gradient">Parmar</span>
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-xl md:text-3xl font-medium text-indigo-600 dark:text-primary font-headline">Computer Engineering Student</span>
            <span className="text-xl md:text-3xl font-light text-slate-400 dark:text-slate-600">|</span>
            <span className="text-xl md:text-3xl font-medium text-slate-700 dark:text-secondary font-headline">Web Developer</span>
          </div>
          
          <div className="space-y-4 max-w-2xl">
            <p className="text-lg md:text-xl text-slate-600 dark:text-on-surface-variant leading-relaxed font-body">
              Building real-world web applications with a focus on clean design and efficiency. 
            </p>
            <p className="text-base md:text-lg text-slate-500 dark:text-on-surface-variant/80 leading-relaxed font-body">
              Currently sharpening problem-solving skills through Data Structures &amp; Algorithms and actively exploring modern web technologies.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-lg bg-indigo-600 dark:bg-gradient-to-r dark:from-primary dark:to-secondary text-white dark:text-on-primary-fixed font-bold shadow-lg transition-all active:scale-95 flex items-center gap-2"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-lg bg-slate-800 dark:bg-surface-container-high border border-slate-700 dark:border-outline-variant/15 text-white dark:text-on-surface font-bold hover:bg-slate-700 dark:hover:bg-surface-bright transition-all active:scale-95 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
