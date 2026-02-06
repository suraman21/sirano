import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/img 3.jpg"
          alt="Sirano Hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      {/* Animated Particles/Stars Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          <div className="w-2 h-2 bg-amber-400 rotate-45 mx-4" />
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        </div>

        {/* Welcome Text */}
        <p className="text-amber-400 text-lg md:text-xl tracking-[0.3em] uppercase mb-4 font-light">
          {t('hero.welcome')}
        </p>

        {/* Hotel Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 tracking-wide">
          {t('hero.name')}
        </h1>

        {/* Location Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
          <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-white/90 text-sm tracking-wide">Welkite, Ethiopia</span>
        </div>

        {/* Tagline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white/90 mb-4 font-light">
          {t('hero.tagline')}
        </h2>

        {/* Subtitle */}
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={() => scrollToSection('rooms')}
            className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide transition-all shadow-2xl hover:shadow-amber-500/40 hover:scale-105 flex items-center space-x-3"
          >
            <span>{t('hero.explore')}</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="group border-2 border-white/30 hover:border-amber-400 text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide transition-all hover:bg-white/5 flex items-center space-x-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{t('hero.virtual')}</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Side Decorations */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-amber-400 to-transparent" />
          <span className="text-white/50 text-xs tracking-widest rotate-90 origin-center whitespace-nowrap">LUXURY STAY</span>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-amber-400 to-transparent" />
        </div>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-amber-400 to-transparent" />
          <span className="text-white/50 text-xs tracking-widest -rotate-90 origin-center whitespace-nowrap">SINCE 2020</span>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-amber-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}
