export default function Experience() {
  return (
    <section className="py-32 bg-slate-50 dark:bg-surface-container-lowest transition-colors duration-300" id="experience">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Learning Journey */}
          <div>
            <h2 className="font-headline text-4xl font-bold text-slate-900 dark:text-on-surface mb-12">Learning Journey</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-outline-variant/30 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white dark:border-background bg-indigo-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10"></div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-6 rounded-2xl bg-white dark:bg-surface-container shadow-sm border border-slate-200 dark:border-outline-variant/10">
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white">Practicing DSA regularly</h3>
                  <p className="text-slate-600 dark:text-on-surface-variant mt-2 text-sm leading-relaxed">Continuously leveling up analytical problem-solving skills to write more efficient and optimized code.</p>
                </div>
              </div>
              
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white dark:border-background bg-purple-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10"></div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-6 rounded-2xl bg-white dark:bg-surface-container shadow-sm border border-slate-200 dark:border-outline-variant/10">
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white">Building real-world projects</h3>
                  <p className="text-slate-600 dark:text-on-surface-variant mt-2 text-sm leading-relaxed">Applying theories strictly to practical challenges to deliver end-to-end full-stack applications.</p>
                </div>
              </div>

               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white dark:border-background bg-pink-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10"></div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-6 rounded-2xl bg-white dark:bg-surface-container shadow-sm border border-slate-200 dark:border-outline-variant/10">
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white">Exploring system behavior</h3>
                  <p className="text-slate-600 dark:text-on-surface-variant mt-2 text-sm leading-relaxed">Focusing heavily on architecture patterns, performance tuning, and scalable design methodology.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="bg-white dark:bg-surface-container p-10 rounded-3xl border border-slate-200 dark:border-outline-variant/10 shadow-sm h-full">
              <h2 className="font-headline text-3xl font-bold text-slate-900 dark:text-on-surface mb-8">Achievements &amp; Certifications</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <a 
                  href="/certificate.png" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group relative p-2 rounded-xl bg-slate-50 dark:bg-surface-container-high border border-slate-200 dark:border-outline-variant/30 flex items-center justify-center transition-all hover:border-indigo-500 hover:shadow-lg hover:-translate-y-1 block cursor-pointer aspect-[4/3] overflow-hidden"
                >
                  <img src="/certificate.png" alt="Certificate" className="w-full h-full object-cover rounded-lg group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-white text-3xl">zoom_in</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
