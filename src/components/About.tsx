import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const stats = [
    { value: '45+', label: t('about.stat.rooms'), icon: '🛏️' },
    { value: '5+', label: t('about.stat.years'), icon: '⭐' },
    { value: '10K+', label: t('about.stat.guests'), icon: '👥' },
    { value: '4.5', label: t('about.stat.rating'), icon: '🌟' },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-stone-950 to-stone-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/images/img 2.jpg"
                    alt="Hotel Room"
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/images/img 15.jpg"
                    alt="Hotel Exterior"
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/images/img 16.jpg"
                    alt="Hotel Lobby"
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/images/img 7.png"
                    alt="Restaurant"
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-white text-center">
                <div className="text-4xl font-bold font-serif">5+</div>
                <div className="text-sm uppercase tracking-wider opacity-90">Years</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-px bg-amber-500" />
              <span className="text-amber-500 uppercase tracking-widest text-sm font-medium">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              {t('about.title')}
            </h2>

            <h3 className="text-2xl font-serif text-amber-400 mb-6">
              {t('about.subtitle')}
            </h3>

            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              {[
                { icon: '✓', text: 'Prime location in Welkite city center' },
                { icon: '✓', text: 'Traditional Ethiopian hospitality' },
                { icon: '✓', text: 'Modern amenities and comfort' },
                { icon: '✓', text: 'Award-winning restaurant' },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center text-sm">
                    {item.icon}
                  </span>
                  <span className="text-stone-300">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-amber-500/30 transition-colors"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white font-serif">{stat.value}</div>
                  <div className="text-stone-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
