import { useLanguage } from '../context/LanguageContext';

export function Restaurant() {
  const { t } = useLanguage();

  const menuHighlights = [
    {
      name: 'Traditional Injera Platter',
      nameAm: 'ባህላዊ እንጀራ',
      description: 'Assorted stews served on injera bread',
      price: 350,
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Kitfo Special',
      nameAm: 'ክትፎ ስፔሻል',
      description: 'Ethiopian steak tartare with mitmita spice',
      price: 450,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Tibs Firfir',
      nameAm: 'ጥብስ ፍርፍር',
      description: 'Sautéed beef with injera pieces',
      price: 380,
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Doro Wat',
      nameAm: 'ዶሮ ወጥ',
      description: 'Spiced chicken stew with boiled eggs',
      price: 420,
      image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section id="restaurant" className="relative py-24 bg-gradient-to-b from-stone-900 to-stone-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-px bg-amber-500" />
              <span className="text-amber-500 uppercase tracking-widest text-sm font-medium">Dining Experience</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              {t('restaurant.title')}
            </h2>

            <h3 className="text-2xl font-serif text-amber-400 mb-6">
              {t('restaurant.subtitle')}
            </h3>

            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              {t('restaurant.desc')}
            </p>

            {/* Hours */}
            <div className="bg-stone-800/50 rounded-2xl p-6 border border-stone-700/50 mb-8">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('restaurant.hours')}</span>
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">{t('restaurant.breakfast')}</span>
                  <span className="text-white font-medium">6:30 AM - 10:00 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">{t('restaurant.lunch')}</span>
                  <span className="text-white font-medium">12:00 PM - 3:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">{t('restaurant.dinner')}</span>
                  <span className="text-white font-medium">6:00 PM - 10:00 PM</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🍽️', text: 'Ethiopian Cuisine' },
                { icon: '🌍', text: 'International Menu' },
                { icon: '☕', text: 'Ethiopian Coffee' },
                { icon: '🥗', text: 'Fresh Ingredients' },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-stone-800/30 rounded-xl p-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-stone-300 text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Highlights */}
          <div>
            <h4 className="text-xl font-serif font-semibold text-white mb-6 text-center lg:text-left">
              Menu Highlights
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {menuHighlights.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-stone-800/50 rounded-2xl overflow-hidden border border-stone-700/50 hover:border-amber-500/50 transition-all duration-300"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
                    <div className="absolute bottom-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {item.price} {t('common.birr')}
                    </div>
                  </div>
                  <div className="p-4">
                    <h5 className="font-semibold text-white text-sm mb-1 group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h5>
                    <p className="text-amber-500 text-xs mb-1">{item.nameAm}</p>
                    <p className="text-stone-500 text-xs line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coffee Ceremony */}
            <div className="mt-6 relative rounded-2xl overflow-hidden">
              <img
                src="/images/img 9.jpg"
                alt="Ethiopian Coffee"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
                <div className="p-6">
                  <h5 className="text-xl font-serif font-bold text-white mb-2">Ethiopian Coffee Ceremony</h5>
                  <p className="text-stone-300 text-sm mb-3">Experience our traditional coffee ceremony daily</p>
                  <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Complimentary for Guests
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
