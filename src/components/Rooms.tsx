import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Room {
  id: number;
  nameKey: string;
  descKey: string;
  price: number;
  size: string;
  maxGuests: number;
  image: string;
  amenities: string[];
  featured?: boolean;
}

const rooms: Room[] = [
  {
    id: 1,
    nameKey: 'rooms.standard.name',
    descKey: 'rooms.standard.desc',
    price: 2500,
    size: '25m²',
    maxGuests: 2,
    image: '/images/img 1.jpg',
    amenities: ['WiFi', 'TV', 'AC', 'Shower'],
  },
  {
    id: 2,
    nameKey: 'rooms.deluxe.name',
    descKey: 'rooms.deluxe.desc',
    price: 3500,
    size: '35m²',
    maxGuests: 2,
    image: '/images/img 2.jpg',
    amenities: ['WiFi', 'Smart TV', 'AC', 'Bathtub', 'Mini Bar'],
    featured: true,
  },
  {
    id: 3,
    nameKey: 'rooms.suite.name',
    descKey: 'rooms.suite.desc',
    price: 5000,
    size: '50m²',
    maxGuests: 3,
    image: '/images/img 13.jpg',
    amenities: ['WiFi', 'Smart TV', 'AC', 'Bathtub', 'Mini Bar', 'Living Area', 'Work Desk'],
  },
  {
    id: 4,
    nameKey: 'rooms.vip.name',
    descKey: 'rooms.vip.desc',
    price: 8000,
    size: '75m²',
    maxGuests: 4,
    image: '/images/img 14.jpg',
    amenities: ['WiFi', 'Smart TV', 'AC', 'Jacuzzi', 'Mini Bar', 'Living Area', 'Work Desk', 'Room Service'],
    featured: true,
  },
];

export function Rooms() {
  const { t } = useLanguage();
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSelectedRoom(null);
  };

  return (
    <section id="rooms" className="relative py-24 bg-gradient-to-b from-stone-900 to-stone-950">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-amber-500 uppercase tracking-widest text-sm font-medium">Accommodations</span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-amber-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            {t('rooms.title')}
          </h2>
          <p className="text-stone-400 text-xl max-w-2xl mx-auto">
            {t('rooms.subtitle')}
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`group relative bg-stone-800/50 rounded-2xl overflow-hidden border border-stone-700/50 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 ${room.featured ? 'lg:col-span-2' : ''
                }`}
            >
              {/* Featured Badge */}
              {room.featured && (
                <div className="absolute top-4 left-4 z-20 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              )}

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={t(room.nameKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent" />

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
                  <span className="text-2xl font-bold text-white">{room.price.toLocaleString()}</span>
                  <span className="text-amber-400 text-sm ml-1">{t('common.birr')}</span>
                  <span className="text-stone-400 text-xs block">{t('rooms.pernight')}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {t(room.nameKey)}
                </h3>
                <p className="text-stone-400 text-sm mb-4 line-clamp-2">
                  {t(room.descKey)}
                </p>

                {/* Room Info */}
                <div className="flex items-center space-x-4 text-stone-500 text-sm mb-4">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{room.maxGuests} Guests</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.amenities.slice(0, 4).map((amenity, index) => (
                    <span
                      key={index}
                      className="text-xs bg-stone-700/50 text-stone-300 px-2 py-1 rounded-md"
                    >
                      {amenity}
                    </span>
                  ))}
                  {room.amenities.length > 4 && (
                    <span className="text-xs text-amber-500">+{room.amenities.length - 4} more</span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="flex-1 border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 py-2.5 rounded-lg text-sm font-medium transition-all"
                  >
                    Details
                  </button>
                  <button
                    onClick={scrollToBooking}
                    className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-2.5 rounded-lg text-sm font-medium transition-all"
                  >
                    {t('rooms.book')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-stone-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-700">
            <button
              onClick={() => setSelectedRoom(null)}
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white bg-black/50 rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <img
              src={selectedRoom.image}
              alt={t(selectedRoom.nameKey)}
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-serif font-bold text-white">
                  {t(selectedRoom.nameKey)}
                </h3>
                <div className="text-right">
                  <span className="text-3xl font-bold text-amber-400">{selectedRoom.price.toLocaleString()}</span>
                  <span className="text-stone-400 ml-1">{t('common.birr')}</span>
                  <p className="text-stone-500 text-sm">{t('rooms.pernight')}</p>
                </div>
              </div>

              <p className="text-stone-400 mb-6">{t(selectedRoom.descKey)}</p>

              <div className="flex items-center space-x-6 text-stone-400 mb-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <span>{selectedRoom.size}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Max {selectedRoom.maxGuests} Guests</span>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-white mb-4">{t('rooms.amenities')}</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {selectedRoom.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2 text-stone-300">
                    <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToBooking}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-4 rounded-xl text-lg font-semibold transition-all"
              >
                {t('rooms.book')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
