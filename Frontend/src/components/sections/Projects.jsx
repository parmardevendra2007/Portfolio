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
                <a href="https://portfolio-tau-swart-0ksz5zj551.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 dark:bg-primary text-white dark:text-on-primary-fixed font-bold hover:scale-105 transition-transform shadow-md">
                  <span className="material-symbols-outlined text-sm">rocket_launch</span> Live Demo
                </a>
                <a href="https://github.com/parmardevendra2007" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-100 dark:bg-surface-container-high border border-slate-300 dark:border-outline-variant/15 font-bold hover:bg-slate-200 dark:hover:bg-surface-bright transition-all text-slate-800 dark:text-white shadow-sm">
                  <span className="material-symbols-outlined text-sm">code</span> Source Code
                </a>
              </div>
            </div>
            <a 
              href="https://portfolio-tau-swart-0ksz5zj551.vercel.app/" 
              target="_blank" 
              rel="noreferrer" 
              className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-video bg-[#0f172a] border border-slate-300 dark:border-outline-variant/10 shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 block group/link"
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-4 relative overflow-hidden transition-all duration-700 group-hover/link:scale-105 text-center z-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/30 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600/30 blur-3xl rounded-full"></div>
                
                <div className="z-10 bg-slate-800/50 border border-slate-700/50 rounded-full px-3 py-1 mb-3 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                  <span className="text-[8px] sm:text-[10px] text-slate-300 uppercase tracking-widest">Available for Projects</span>
                </div>
                <h4 className="text-white font-extrabold text-2xl sm:text-3xl leading-tight mb-2 tracking-tight">
                  Devendra <br className="sm:hidden" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Parmar</span>
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm px-4 mb-4 font-medium">Computer Eng Student <span className="hidden sm:inline">|</span><br className="sm:hidden" /> Web Developer</p>
                <div className="flex gap-2 z-10">
                  <div className="px-3 py-1.5 bg-indigo-600 rounded text-[10px] sm:text-xs text-white font-bold shadow-md">View Projects</div>
                  <div className="px-3 py-1.5 bg-slate-800 border border-slate-600 rounded text-[10px] sm:text-xs text-white font-bold">Contact Me</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8 z-10">
                <span className="text-white dark:text-primary font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  Launch Demo
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
