export default function Projects() {
  return (
    <section className="py-32 bg-slate-50 dark:bg-surface-container-lowest transition-colors duration-300" id="projects">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="mt-4 font-headline text-5xl font-bold text-slate-900 dark:text-on-surface">MERN Projects</h2>
          </div>
        </div>
        
        <div className="space-y-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center group">
            <a 
              href="https://to-do-app-full-stack-ume7.vercel.app/" 
              target="_blank" 
              rel="noreferrer" 
              className="relative rounded-2xl overflow-hidden aspect-video bg-white dark:bg-[#1e1e2d] border border-slate-300 dark:border-outline-variant/10 shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 block"
            >
              <img 
                src="/screen.png" 
                alt="Full Stack To-Do App" 
                className="w-full h-full object-contain p-4 transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <span className="text-white dark:text-primary font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  Launch Demo
                </span>
              </div>
            </a>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold font-headline text-slate-800 dark:text-white">Full Stack To-Do App</h3>
              <p className="text-slate-600 dark:text-on-surface-variant text-lg leading-relaxed">
                A complete task management ecosystem featuring secure user authentication, CRUD operations, and persistent state. Designed for seamless productivity tracking.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-surface-container-high text-xs font-semibold text-indigo-600 dark:text-primary">MongoDB</span>
                <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-surface-container-high text-xs font-semibold text-indigo-600 dark:text-primary">Express</span>
                <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-surface-container-high text-xs font-semibold text-indigo-600 dark:text-primary">React</span>
                <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-surface-container-high text-xs font-semibold text-indigo-600 dark:text-primary">Node.js</span>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://to-do-app-full-stack-ume7.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 dark:bg-primary text-white dark:text-on-primary-fixed font-bold hover:scale-105 transition-transform shadow-md">
                  <span className="material-symbols-outlined text-sm">rocket_launch</span> Live Demo
                </a>
                <a href="https://github.com/parmardevendra2007/TO-DO-APP-Full-Stack" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-100 dark:bg-surface-container-high border border-slate-300 dark:border-outline-variant/15 font-bold hover:bg-slate-200 dark:hover:bg-surface-bright transition-all text-slate-800 dark:text-white shadow-sm">
                  <span className="material-symbols-outlined text-sm">code</span> Source
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center group lg:flex-row-reverse">
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl font-bold font-headline text-slate-800 dark:text-white">Portfolio Website</h3>
              <p className="text-slate-600 dark:text-on-surface-variant text-lg leading-relaxed">
                Personal website to showcase projects and skills. Focused on responsive design, clean UI architecture, and seamless user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-surface-container-high text-xs font-semibold text-indigo-600 dark:text-primary">React</span>
                <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-surface-container-high text-xs font-semibold text-indigo-600 dark:text-primary">Tailwind CSS</span>
                <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-surface-container-high text-xs font-semibold text-indigo-600 dark:text-primary">Javascript</span>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://github.com/parmardevendra2007" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-100 dark:bg-surface-container-high border border-slate-300 dark:border-outline-variant/15 font-bold hover:bg-slate-200 dark:hover:bg-surface-bright transition-all text-slate-800 dark:text-white shadow-sm">
                  <span className="material-symbols-outlined text-sm">code</span> Source Code
                </a>
              </div>
            </div>
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-video bg-indigo-50 dark:bg-surface-container-high border border-slate-300 dark:border-outline-variant/10 shadow-lg flex items-center justify-center">
               <div className="p-8 text-center drop-shadow-sm">
                  <span className="material-symbols-outlined text-6xl text-indigo-500 dark:text-primary mb-4 block">code_blocks</span>
                  <span className="text-2xl font-bold text-slate-800 dark:text-white font-headline">Portfolio UI</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
