export default function Skills() {
  return (
    <section className="py-32 bg-white dark:bg-background transition-colors duration-300" id="skills">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="mt-4 font-headline text-4xl font-bold text-slate-900 dark:text-on-surface">Skills</h2>
          <p className="mt-4 text-slate-600 dark:text-on-surface-variant max-w-2xl mx-auto">
            A precise toolkit focused on delivering high-performance digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Frontend */}
          <div className="bg-slate-50 dark:bg-surface-container-high p-8 rounded-2xl border border-slate-200 dark:border-outline-variant/10 hover:border-indigo-400 dark:hover:border-primary/30 transition-all shadow-sm">
            <h3 className="text-xl font-bold mb-6 font-headline text-slate-800 dark:text-white">Frontend</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-primary"></div>
                <span className="text-slate-700 dark:text-slate-300">HTML</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-primary"></div>
                <span className="text-slate-700 dark:text-slate-300">CSS</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-primary"></div>
                <span className="text-slate-700 dark:text-slate-300">JavaScript</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-primary"></div>
                <span className="text-slate-700 dark:text-slate-300">React</span>
              </div>
            </div>
          </div>
          
          {/* Backend */}
          <div className="bg-slate-50 dark:bg-surface-container-low p-8 rounded-2xl border border-slate-200 dark:border-outline-variant/10 hover:border-purple-400 dark:hover:border-secondary/30 transition-all shadow-sm">
            <h3 className="text-xl font-bold mb-6 font-headline text-slate-800 dark:text-white">Backend</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-secondary"></div>
                <span className="text-slate-700 dark:text-slate-300">Node.js</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-secondary"></div>
                <span className="text-slate-700 dark:text-slate-300">Express</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-secondary"></div>
                <span className="text-slate-700 dark:text-slate-300">MongoDB</span>
              </div>
            </div>
          </div>
          
          {/* Core Concepts */}
          <div className="bg-slate-50 dark:bg-surface-container-low p-8 rounded-2xl border border-slate-200 dark:border-outline-variant/10 hover:border-pink-400 dark:hover:border-tertiary/30 transition-all shadow-sm">
            <h3 className="text-xl font-bold mb-6 font-headline text-slate-800 dark:text-white">Core Concepts</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 dark:bg-tertiary"></div>
                <span className="text-slate-700 dark:text-slate-300">Data Structures &amp; Algorithms</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 dark:bg-tertiary"></div>
                <span className="text-slate-700 dark:text-slate-300">System Design Basics</span>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-slate-50 dark:bg-surface-container-low p-8 rounded-2xl border border-slate-200 dark:border-outline-variant/10 hover:border-emerald-400 dark:hover:border-emerald-500/30 transition-all shadow-sm">
            <h3 className="text-xl font-bold mb-6 font-headline text-slate-800 dark:text-white">Tools</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-500"></div>
                <span className="text-slate-700 dark:text-slate-300">Git</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-500"></div>
                <span className="text-slate-700 dark:text-slate-300">GitHub</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-500"></div>
                <span className="text-slate-700 dark:text-slate-300">VS Code</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
