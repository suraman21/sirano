import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showLine, setShowLine] = useState(false);

  // Images to preload
  const imagesToPreload = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800',
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800',
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800',
    'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
    'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800',
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  ];

  useEffect(() => {
    // Staggered reveal animations
    setTimeout(() => setShowLogo(true), 200);
    setTimeout(() => setShowLine(true), 600);
    setTimeout(() => setShowTagline(true), 900);

    let loadedCount = 0;
    const totalImages = imagesToPreload.length;

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / totalImages) * 100));
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / totalImages) * 100));
          resolve();
        };
        img.src = src;
      });
    };

    // Preload all images
    Promise.all(imagesToPreload.map(preloadImage)).then(() => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          onComplete();
        }, 800);
      }, 500);
    });

    // Fallback timeout
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onComplete();
      }, 800);
    }, 6000);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-1000 ease-out ${
        fadeOut ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
      }}
    >
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)',
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Decorative Top Ornament */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <svg width="80" height="20" viewBox="0 0 80 20" className="text-amber-500/60">
            <path d="M0 10 L15 10 M20 10 L25 5 L30 10 L25 15 L20 10 M35 10 L45 10" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="40" cy="10" r="2" fill="currentColor"/>
            <path d="M45 10 L55 10 M55 10 L60 5 L65 10 L60 15 L55 10 M65 10 L80 10" stroke="currentColor" strokeWidth="1" fill="none" transform="scale(-1,1) translate(-80,0)"/>
          </svg>
        </div>

        {/* Logo Mark */}
        <div className={`relative mb-6 transition-all duration-1000 ${showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Outer Frame */}
          <div className="relative w-28 h-28 md:w-36 md:h-36">
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-500/80" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-500/80" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-500/80" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-500/80" />
            
            {/* Inner Logo */}
            <div className="absolute inset-4 flex items-center justify-center">
              <span 
                className="text-5xl md:text-6xl font-serif font-light tracking-wide"
                style={{
                  background: 'linear-gradient(180deg, #f5d485 0%, #d4af37 50%, #b8860b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 40px rgba(212,175,55,0.3)',
                }}
              >
                S
              </span>
            </div>
          </div>
        </div>

        {/* Hotel Name */}
        <div className={`text-center mb-2 transition-all duration-1000 delay-200 ${showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-3xl md:text-5xl font-serif font-light tracking-[0.3em] text-white mb-1">
            SIRANO
          </h1>
          <p className="text-xs md:text-sm tracking-[0.5em] text-amber-500/80 font-light uppercase">
            Hotel & Resort
          </p>
        </div>

        {/* Amharic Name */}
        <div className={`mb-8 transition-all duration-1000 delay-500 ${showTagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-lg md:text-xl text-stone-400 font-light tracking-widest">
            ስራኖ ሆቴል
          </p>
        </div>

        {/* Decorative Line */}
        <div className={`relative w-48 md:w-64 h-px mb-8 overflow-hidden transition-all duration-1000 delay-700 ${showLine ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
          <div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-amber-300 to-transparent"
            style={{
              animation: 'shimmer 2s infinite',
            }}
          />
        </div>

        {/* Tagline */}
        <div className={`text-center mb-12 transition-all duration-1000 delay-700 ${showTagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-stone-500 text-xs md:text-sm tracking-[0.4em] uppercase font-light">
            Where Elegance Meets Comfort
          </p>
        </div>

        {/* Elegant Loading Indicator */}
        <div className={`flex flex-col items-center transition-all duration-1000 delay-1000 ${showTagline ? 'opacity-100' : 'opacity-0'}`}>
          {/* Three Dots Loader */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500/80 animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500/80 animate-pulse" style={{ animationDelay: '0.3s' }} />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500/80 animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>
          
          {/* Thin Progress Line */}
          <div className="w-32 h-[1px] bg-stone-800 rounded-full overflow-hidden mb-3">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #b8860b, #d4af37, #f5d485)',
              }}
            />
          </div>
          
          {/* Subtle Loading Text */}
          <p className="text-stone-600 text-[10px] tracking-[0.3em] uppercase">
            Preparing your experience
          </p>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className={`flex items-center space-x-6 transition-all duration-1000 delay-1000 ${showTagline ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-stone-700" />
          <svg width="16" height="16" viewBox="0 0 16 16" className="text-amber-500/40">
            <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" fill="currentColor"/>
          </svg>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-stone-700" />
        </div>
      </div>

      {/* Floating Golden Particles - More Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float-slow"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              background: 'radial-gradient(circle, rgba(212,175,55,0.6) 0%, transparent 70%)',
              boxShadow: '0 0 10px rgba(212,175,55,0.3)',
            }}
          />
        ))}
      </div>

      {/* Inline Styles for Animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.2);
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-40px) translateX(-5px) scale(1);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-20px) translateX(-15px) scale(0.8);
            opacity: 0.6;
          }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
