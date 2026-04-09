import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll handler
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Active section handler
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      let currentSection = 'hero';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0b1326]/60 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_rgba(6,14,32,0.4)] transition-colors duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleScrollTo(e, 'hero')}>
          {/* Logo removed as requested */}
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['hero', 'about', 'skills', 'projects', 'experience', 'contact'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleScrollTo(e, id)}
              className={`font-inter text-sm tracking-wide transition-colors ${activeSection === id
                ? 'text-indigo-600 dark:text-indigo-300 font-bold border-b-2 border-indigo-500 pb-1'
                : 'text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-100'
                }`}
            >
              {id === 'hero' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}

          <span
            className="material-symbols-outlined text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800/50 p-2 rounded-full cursor-pointer transition-all duration-200"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
        </div>
      </div>
    </nav>
  );
}
