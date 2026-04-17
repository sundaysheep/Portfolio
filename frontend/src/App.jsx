// frontend/src/App.jsx
import React from 'react';

function App() {
  return (
    <div className="min-h-screen selection:bg-accent/10 selection:text-accent">
      
      {/* 1. Modern Sticky Navigation with Glassmorphism */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-borderlite">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <a href="#" className="text-xl font-extrabold tracking-tighter text-accent group">
            A<span className="text-txtdark group-hover:text-accent transition-colors">S</span>K
          </a>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#featured" className="text-txtdark hover:text-accent transition-colors">Featured Work</a>
            <a href="#contact" className="text-txtdark hover:text-accent transition-colors">Contact</a>
            {/* Call to action button */}
            <a href="mailto:your.email@example.com" className="bg-accent text-white px-4 py-2 rounded-full text-xs hover:bg-accent/90 transition-all shadow-sm">
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* 2. Sleek Hero Section */}
      <header className="px-6 py-24 md:py-24 max-w-7xl mx-auto">
        <div className="border-l-4 border-accent pl-6 mb-8">
          <p className="text-lg text-accent font-medium tracking-tight mb-2">Portfolio of</p>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-none text-txtdark">
            Aditya Sivam<br /> Kashyap.
          </h1>
        </div>
        <div className="max-w-3xl ml-10">
          <p className="text-xl md:text-2xl text-txtmuted leading-relaxed font-light mb-10">
            A software engineer specializing in modern full-stack web architectures and high-impact climate data visualization platforms.
          </p>
          <div className="flex gap-4">
            <a href="#featured" className="text-accent font-semibold flex items-center gap-2 group">
              View my work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. Dedicated Project Sections (Alternating) */}
      <section id="featured" className="py-20 bg-cardlite border-t border-borderlite">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-16 flex items-center gap-3">
            <span className="w-10 h-px bg-accent"></span>
            Featured Projects
          </h2>

          {/* PROJECT SECTION 1: ClimaMetrics */}
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center mb-32">
            {/* Text Details (Left on desktop) */}
            <div className="md:col-span-6 space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-mono text-5xl font-extralight text-borderlite">01</span>
                <div>
                  <h3 className="text-4xl font-extrabold tracking-tighter text-txtdark">ClimaMetrics</h3>
                  <p className="text-lg text-accent font-medium">Climate Data Display & Emissions Platform</p>
                </div>
              </div>
              
              <p className="text-txtmuted leading-relaxed">
                A sophisticated platform engineered to calculate greenhouse gas inventories at the subnational level for Indian states, translating complex climate models into actionable insights.
              </p>
              
              <ul className="space-y-3 text-txtmuted list-inside pl-1 marker:text-accent">
                {/* Custom marker effect in Tailwind v4 */}
                <li className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-accent">React-based subsector GHG Inventory Calculator.</li>
                <li className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-accent">Hybrid Tier 1 & Tier 2 calculation engine with automated conversion.</li>
                <li className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-accent">Multi-level data visualizations using Plotly and Recharts.</li>
              </ul>

              <div className="flex gap-2 pt-4">
                {['React', 'Plotly', 'Recharts', 'Node.js', 'Vite'].map(tech => (
                  <span key={tech} className="bg-white border border-borderlite text-txtmuted text-xs font-medium px-3 py-1 rounded-full shadow-inner">{tech}</span>
                ))}
              </div>
            </div>

            {/* Image Placeholder Container (Right on desktop) */}
            <div className="md:col-span-6 order-first md:order-last">
              <div className="project-image-placeholder relative group overflow-hidden">
                <span className="font-medium text-sm group-hover:scale-110 transition-transform">
                  ClimaMetrics Screenshot (Coming Soon)
                </span>
                {/* Subtle dynamic overlay on hover */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>

          {/* PROJECT SECTION 2: Revive Makeup Studio */}
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image Placeholder Container (Left on desktop, alternates) */}
            <div className="md:col-span-6">
              <div className="project-image-placeholder relative group overflow-hidden">
                <span className="font-medium text-sm group-hover:scale-110 transition-transform">
                  Revive Studio Screenshot (Coming Soon)
                </span>
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            {/* Text Details (Right on desktop) */}
            <div className="md:col-span-6 space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-mono text-5xl font-extralight text-borderlite">02</span>
                <div>
                  <h3 className="text-4xl font-extrabold tracking-tighter text-txtdark">Revive Makeup Studio</h3>
                  <p className="text-lg text-accent font-medium">Salon Client Project</p>
                </div>
              </div>
              
              <p className="text-txtmuted leading-relaxed">
                A sleek, responsive client project focused on delivering a polished user experience with robust security measures for a local business.
              </p>
              
              <ul className="space-y-3 text-txtmuted list-inside pl-1 marker:text-accent">
                <li className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-accent">Responsive UIs ensuring cross-device compatibility.</li>
                <li className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-accent">Implemented client-side validation and input sanitization.</li>
                <li className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-accent">Integrated security measures (spam prevention, secure forms).</li>
              </ul>

              <div className="flex gap-2 pt-4">
                {['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'].map(tech => (
                  <span key={tech} className="bg-white border border-borderlite text-txtmuted text-xs font-medium px-3 py-1 rounded-full shadow-inner">{tech}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Minimal Footer / Contact */}
      <footer id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center">
        <div className="animate-float"> {/* Subtle animation applied here */}
          <h2 className="text-5xl font-extrabold tracking-tighter text-txtdark mb-6">Let's Connect.</h2>
          <p className="text-lg text-txtmuted mb-10 max-w-md mx-auto">
            I'm currently open to new opportunities and collaborations in web development or climate tech.
          </p>
          <a href="mailto:your.email@example.com" className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5">
            Send me an Email
          </a>
        </div>
        <div className="mt-20 pt-8 border-t border-borderlite text-sm text-txtmuted font-mono">
          © 2026 Aditya Sivam Kashyap. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;