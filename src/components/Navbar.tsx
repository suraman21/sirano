import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const navItems = [
  { key: 'home', id: 'home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { key: 'rooms', id: 'rooms', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
  { key: 'services', id: 'services', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
  { key: 'restaurant', id: 'restaurant', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { key: 'gallery', id: 'gallery', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { key: 'contact', id: 'contact', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
];

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = navItems.map(item => item.id);
      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop & Tablet Navigation - Top Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-stone-950/95 backdrop-blur-md shadow-2xl py-3' : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg md:text-xl font-serif">S</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white font-serif text-xl font-bold tracking-wide">Sirano</h1>
                <p className="text-amber-400 text-xs tracking-widest uppercase">Hotel</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors text-sm font-medium tracking-wide uppercase ${
                    activeSection === item.id 
                      ? 'text-amber-400' 
                      : 'text-white/80 hover:text-amber-400'
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-3 md:space-x-4">
              {/* Language Toggle */}
              <div className="flex items-center bg-white/10 rounded-full p-1">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs font-medium transition-all ${
                    language === 'en' 
                      ? 'bg-amber-500 text-white shadow-md' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('am')}
                  className={`px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs font-medium transition-all ${
                    language === 'am' 
                      ? 'bg-amber-500 text-white shadow-md' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  አማ
                </button>
              </div>

              {/* Book Now Button - Hidden on mobile */}
              <button
                onClick={() => scrollToSection('booking')}
                className="hidden md:block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-lg hover:shadow-amber-500/30 hover:scale-105"
              >
                {t('nav.book')}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-stone-950 border-t border-stone-800 safe-area-bottom">
        <div className="grid grid-cols-5 h-16">
          {/* Home */}
          <button
            onClick={() => scrollToSection('home')}
            className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
              activeSection === 'home' ? 'text-amber-400' : 'text-stone-400'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={navItems[0].icon} />
            </svg>
            <span className="text-[10px] font-medium">{t('nav.home')}</span>
          </button>

          {/* Rooms */}
          <button
            onClick={() => scrollToSection('rooms')}
            className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
              activeSection === 'rooms' ? 'text-amber-400' : 'text-stone-400'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-[10px] font-medium">{t('nav.rooms')}</span>
          </button>

          {/* Book Now - Center Prominent Button */}
          <button
            onClick={() => scrollToSection('booking')}
            className="flex flex-col items-center justify-center -mt-4"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-[10px] font-medium text-amber-400 mt-1">{t('nav.book')}</span>
          </button>

          {/* Gallery */}
          <button
            onClick={() => scrollToSection('gallery')}
            className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
              activeSection === 'gallery' ? 'text-amber-400' : 'text-stone-400'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={navItems[4].icon} />
            </svg>
            <span className="text-[10px] font-medium">{t('nav.gallery')}</span>
          </button>

          {/* Contact */}
          <button
            onClick={() => scrollToSection('contact')}
            className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
              activeSection === 'contact' ? 'text-amber-400' : 'text-stone-400'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={navItems[5].icon} />
            </svg>
            <span className="text-[10px] font-medium">{t('nav.contact')}</span>
          </button>
        </div>
      </nav>
    </>
  );
}
