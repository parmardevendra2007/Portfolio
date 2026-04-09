export default function About() {
  return (
    <section className="py-32 bg-slate-100 dark:bg-surface-container-low transition-colors duration-300" id="about">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid gap-12">
          
          <div className="space-y-6 max-w-4xl">
            <h2 className="font-headline text-4xl font-bold text-slate-900 dark:text-on-surface mb-8">About Me</h2>
            <p className="text-xl text-slate-700 dark:text-on-surface-variant leading-relaxed">
              Computer Engineering student at LD College of Engineering (2024–2028), focused on building real-world web applications and improving problem-solving skills through DSA.
            </p>
            <p className="text-xl text-slate-700 dark:text-on-surface-variant leading-relaxed">
              I enjoy creating efficient, user-friendly solutions and continuously exploring how systems work to build better and more scalable applications. I am always learning, experimenting, and growing as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
