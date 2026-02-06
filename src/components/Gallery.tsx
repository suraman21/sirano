import { useState, useCallback, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const galleryImages = [
  {
    src: '/images/img 3.jpg',
    category: 'exterior',
    title: 'Hotel Exterior',
  },
  {
    src: '/images/img 13.jpg',
    category: 'rooms',
    title: 'Luxury Suite',
  },
  {
    src: '/images/img 2.jpg',
    category: 'rooms',
    title: 'Deluxe Room',
  },
  {
    src: '/images/img 10.jpg',
    category: 'exterior',
    title: 'Rooftop Pool',
  },
  {
    src: '/images/img 7.png',
    category: 'restaurant',
    title: 'Fine Dining',
  },
  {
    src: '/images/img 14.jpg',
    category: 'rooms',
    title: 'VIP Suite',
  },
  {
    src: '/images/img 9.jpg',
    category: 'restaurant',
    title: 'Rooftop Terrace',
  },
  {
    src: '/images/img 1.jpg',
    category: 'rooms',
    title: 'Standard Room',
  },
  {
    src: '/images/img 15.jpg',
    category: 'exterior',
    title: 'Hotel Building',
  },
  {
    src: '/images/img 6',
    category: 'amenities',
    title: 'Outdoor Seating',
  },
  {
    src: '/images/img 4.jpg',
    category: 'rooms',
    title: 'Luxury Bathroom',
  },
  {
    src: '/images/img 8.jpg',
    category: 'amenities',
    title: 'Conference Room',
  },
];

const categories = [
  { key: 'all', label: 'All' },
  { key: 'rooms', label: 'Rooms' },
  { key: 'exterior', label: 'Exterior' },
  { key: 'restaurant', label: 'Restaurant' },
  { key: 'amenities', label: 'Amenities' },
];

export function Gallery() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? filteredImages.length - 1 : selectedImageIndex - 1);
    }
  }, [selectedImageIndex, filteredImages.length]);

  const goToNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === filteredImages.length - 1 ? 0 : selectedImageIndex + 1);
    }
  }, [selectedImageIndex, filteredImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, goToPrevious, goToNext]);

  const currentImage = selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

  return (
    <section id="gallery" className="relative py-24 bg-gradient-to-b from-stone-950 to-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-amber-500 uppercase tracking-widest text-sm font-medium">Visual Tour</span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-amber-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-stone-400 text-xl max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat.key
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30'
                  : 'bg-stone-800/50 text-stone-400 hover:text-white hover:bg-stone-700/50 border border-stone-700'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${index === 0 || index === 5 ? 'h-full min-h-[300px] md:min-h-[400px]' : 'h-48 md:h-56'
                  }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-white font-semibold">{image.title}</h4>
                <span className="text-amber-400 text-sm capitalize">{image.category}</span>
              </div>
              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox with Navigation */}
      {selectedImageIndex !== null && currentImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-4 transition-all hover:scale-110 group"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-4 transition-all hover:scale-110 group"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentImage.src.replace('w=800', 'w=1600')}
              alt={currentImage.title}
              className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-2xl"
            />

            {/* Image Info */}
            <div className="mt-4 text-center">
              <h4 className="text-white text-lg md:text-xl font-semibold">{currentImage.title}</h4>
              <span className="text-amber-400 text-sm capitalize">{currentImage.category}</span>
            </div>

            {/* Image Counter */}
            <div className="mt-2 flex items-center gap-2">
              <span className="text-white/60 text-sm">
                {selectedImageIndex + 1} / {filteredImages.length}
              </span>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-4 flex gap-2 overflow-x-auto max-w-full pb-2 px-4">
              {filteredImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden transition-all ${idx === selectedImageIndex
                      ? 'ring-2 ring-amber-500 opacity-100 scale-105'
                      : 'opacity-50 hover:opacity-80'
                    }`}
                >
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Keyboard hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white/10 rounded text-white/60">←</kbd>
              <kbd className="px-2 py-1 bg-white/10 rounded text-white/60">→</kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white/10 rounded text-white/60">ESC</kbd>
              Close
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
