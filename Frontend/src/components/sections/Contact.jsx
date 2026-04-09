import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="py-32 bg-slate-100 dark:bg-surface-container-low transition-colors duration-300" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="mt-4 font-headline text-5xl font-bold text-slate-900 dark:text-on-surface leading-tight">
              Let's build something <span className="text-gradient">remarkable</span>.
            </h2>
            <p className="mt-8 text-slate-600 dark:text-on-surface-variant text-xl leading-relaxed">
              Looking for a dedicated developer to bring your vision to life? I'm available for freelance opportunities and full-time collaborations.
            </p>
            
            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4 text-slate-800 dark:text-on-surface hover:text-indigo-600 dark:hover:text-primary transition-colors">
                <span className="material-symbols-outlined">alternate_email</span>
                <span className="font-medium">parmardevendra2007@gmail.com</span>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/parmardevendra2007" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-lg bg-slate-200 dark:bg-surface-container-high flex items-center justify-center hover:bg-slate-300 dark:hover:bg-primary transition-all group shadow-sm text-slate-700 dark:text-on-surface">
                  <span className="font-medium font-body group-hover:text-indigo-700 dark:group-hover:text-on-primary-fixed">Gh</span>
                </a>
                <a href="https://www.linkedin.com/in/parmar-devendra-477ab0320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-lg bg-slate-200 dark:bg-surface-container-high flex items-center justify-center hover:bg-slate-300 dark:hover:bg-primary transition-all group shadow-sm text-slate-700 dark:text-on-surface">
                  <span className="font-medium font-body group-hover:text-indigo-700 dark:group-hover:text-on-primary-fixed">In</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass-effect bg-white/40 dark:bg-[#171f33]/60 p-10 rounded-2xl border border-slate-300 dark:border-outline-variant/15 shadow-2xl relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-on-surface-variant font-label">Full Name</label>
                  <input name="name" required className="w-full bg-slate-50 dark:bg-surface-container-lowest border-slate-200 dark:border-outline-variant/20 rounded-lg p-4 text-slate-900 dark:text-on-surface focus:border-indigo-500 dark:focus:border-primary focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-on-surface-variant font-label">Email Address</label>
                  <input name="email" required className="w-full bg-slate-50 dark:bg-surface-container-lowest border-slate-200 dark:border-outline-variant/20 rounded-lg p-4 text-slate-900 dark:text-on-surface focus:border-indigo-500 dark:focus:border-primary focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="john@company.com" type="email" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-on-surface-variant font-label">Message</label>
                <textarea name="message" required className="w-full bg-slate-50 dark:bg-surface-container-lowest border-slate-200 dark:border-outline-variant/20 rounded-lg p-4 text-slate-900 dark:text-on-surface focus:border-indigo-500 dark:focus:border-primary focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="Tell me about your project..." rows="5"></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full py-4 rounded-lg bg-indigo-600 dark:bg-gradient-to-r dark:from-primary dark:to-secondary text-white dark:text-on-primary-fixed font-black text-lg hover:shadow-xl hover:shadow-indigo-500/20 transition-all active:scale-95 disabled:opacity-70 flex justify-center items-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
                    Dispatching...
                  </>
                ) : status === 'success' ? (
                   <>
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Message Sent
                  </>
                ) : (
                  'Dispatch Message'
                )}
              </button>
            </form>
            
            {status === 'success' && (
              <div className="absolute inset-0 bg-slate-50/90 dark:bg-surface-container-high/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-8 text-center animate-pulse">
                <span className="material-symbols-outlined text-6xl text-indigo-600 dark:text-primary mb-4">check_circle</span>
                <h3 className="text-2xl font-bold font-headline text-slate-900 dark:text-on-surface">Message Received</h3>
                <p className="text-slate-600 dark:text-on-surface-variant mt-2">I will get back to you shortly.</p>
              </div>
            )}
             {status === 'error' && (
              <div className="absolute inset-0 bg-slate-50/90 dark:bg-surface-container-high/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-8 text-center">
                <span className="material-symbols-outlined text-6xl text-red-500 mb-4">error</span>
                <h3 className="text-2xl font-bold font-headline text-slate-900 dark:text-on-surface">Server Error</h3>
                <p className="text-slate-600 dark:text-on-surface-variant mt-2">Could not send email because backend is not running properly.</p>
                <button onClick={() => setStatus('idle')} className="mt-4 px-4 py-2 bg-slate-200 dark:bg-slate-800 rounded">Go Back</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
