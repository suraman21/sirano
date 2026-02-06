import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'am';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': { en: 'Home', am: 'መነሻ' },
  'nav.rooms': { en: 'Rooms', am: 'ክፍሎች' },
  'nav.gallery': { en: 'Gallery', am: 'ምስሎች' },
  'nav.services': { en: 'Services', am: 'አገልግሎቶች' },
  'nav.restaurant': { en: 'Restaurant', am: 'ምግብ ቤት' },
  'nav.contact': { en: 'Contact', am: 'ያግኙን' },
  'nav.book': { en: 'Book Now', am: 'አሁን ያስይዙ' },
  
  // Hero
  'hero.welcome': { en: 'Welcome to', am: 'እንኳን ወደ' },
  'hero.name': { en: 'Sirano Hotel', am: 'ስራኖ ሆቴል' },
  'hero.tagline': { en: 'Experience Luxury in the Heart of Welkite', am: 'በወልቂጤ ልብ ውስጥ የቅንጦት ተሞክሮ' },
  'hero.subtitle': { en: 'Your premier destination for comfort, elegance, and Ethiopian hospitality', am: 'ለምቾት፣ ውበት እና የኢትዮጵያ እንግዳ ተቀባይነት ዋና መዳረሻዎ' },
  'hero.explore': { en: 'Explore Rooms', am: 'ክፍሎችን ይመልከቱ' },
  'hero.virtual': { en: 'Virtual Tour', am: 'ቨርቹዋል ጉብኝት' },
  
  // About
  'about.title': { en: 'About Sirano Hotel', am: 'ስለ ስራኖ ሆቴል' },
  'about.subtitle': { en: 'A Legacy of Ethiopian Hospitality', am: 'የኢትዮጵያ እንግዳ ተቀባይነት ውርስ' },
  'about.description': { en: 'Nestled in the vibrant city of Welkite, Sirano Hotel offers an unparalleled blend of modern luxury and traditional Ethiopian warmth. Our commitment to excellence ensures every guest experiences the finest in comfort and service.', am: 'በወልቂጤ ከተማ ውስጥ የሚገኘው ስራኖ ሆቴል ዘመናዊ ቅንጦት እና ባህላዊ የኢትዮጵያ ሙቀትን በማጣመር ልዩ የሆነ ልምድ ይሰጣል። ለምርጥነት ያለን ቁርጠኝነት እያንዳንዱ እንግዳ በምቾት እና በአገልግሎት ምርጡን እንዲያገኝ ያረጋግጣል።' },
  'about.stat.rooms': { en: 'Luxury Rooms', am: 'የቅንጦት ክፍሎች' },
  'about.stat.years': { en: 'Years of Service', am: 'የአገልግሎት ዓመታት' },
  'about.stat.guests': { en: 'Happy Guests', am: 'ደስተኛ እንግዶች' },
  'about.stat.rating': { en: 'Star Rating', am: 'የኮከብ ደረጃ' },
  
  // Rooms
  'rooms.title': { en: 'Our Rooms', am: 'ክፍሎቻችን' },
  'rooms.subtitle': { en: 'Comfort Meets Elegance', am: 'ምቾት ከውበት ጋር ይገናኛል' },
  'rooms.standard.name': { en: 'Standard Room', am: 'መደበኛ ክፍል' },
  'rooms.standard.desc': { en: 'Comfortable room with essential amenities for a pleasant stay', am: 'ለጥሩ ቆይታ አስፈላጊ አገልግሎቶች ያሉት ምቹ ክፍል' },
  'rooms.deluxe.name': { en: 'Deluxe Room', am: 'ዴሉክስ ክፍል' },
  'rooms.deluxe.desc': { en: 'Spacious room with premium furnishings and city views', am: 'ፕሪሚየም ቁሳቁሶች እና የከተማ እይታ ያለው ሰፊ ክፍል' },
  'rooms.suite.name': { en: 'Executive Suite', am: 'ኤግዘክዩቲቭ ስዊት' },
  'rooms.suite.desc': { en: 'Luxurious suite with separate living area and premium amenities', am: 'የተለየ መኖሪያ ቦታ እና ፕሪሚየም አገልግሎቶች ያሉት የቅንጦት ክፍል' },
  'rooms.vip.name': { en: 'VIP Suite', am: 'ቪአይፒ ስዊት' },
  'rooms.vip.desc': { en: 'Ultimate luxury with panoramic views and exclusive services', am: 'ሰፊ እይታ እና ልዩ አገልግሎቶች ያሉት የመጨረሻ ቅንጦት' },
  'rooms.pernight': { en: 'per night', am: 'በሌሊት' },
  'rooms.book': { en: 'Book This Room', am: 'ይህን ክፍል ያስይዙ' },
  'rooms.amenities': { en: 'Amenities', am: 'አገልግሎቶች' },
  
  // Services
  'services.title': { en: 'Our Services', am: 'አገልግሎቶቻችን' },
  'services.subtitle': { en: 'Everything You Need', am: 'የሚያስፈልግዎት ሁሉ' },
  'services.wifi': { en: 'Free WiFi', am: 'ነጻ ዋይፋይ' },
  'services.wifi.desc': { en: 'High-speed internet throughout the hotel', am: 'በሆቴሉ ውስጥ ፈጣን ኢንተርኔት' },
  'services.parking': { en: 'Free Parking', am: 'ነጻ ማቆሚያ' },
  'services.parking.desc': { en: 'Secure parking for all guests', am: 'ለሁሉም እንግዶች ደህንነቱ የተጠበቀ ማቆሚያ' },
  'services.restaurant': { en: 'Restaurant', am: 'ምግብ ቤት' },
  'services.restaurant.desc': { en: 'Ethiopian and international cuisine', am: 'የኢትዮጵያ እና ዓለም አቀፍ ምግቦች' },
  'services.bar': { en: 'Bar & Lounge', am: 'ቡና ቤት' },
  'services.bar.desc': { en: 'Premium drinks and relaxing atmosphere', am: 'ፕሪሚየም መጠጦች እና የተረጋጋ ከባቢ' },
  'services.laundry': { en: 'Laundry Service', am: 'የልብስ ማጠቢያ' },
  'services.laundry.desc': { en: 'Same-day laundry and dry cleaning', am: 'በቀኑ የልብስ ማጠቢያ እና ደረቅ ማጽዳት' },
  'services.conference': { en: 'Conference Room', am: 'የስብሰባ ክፍል' },
  'services.conference.desc': { en: 'Modern facilities for meetings and events', am: 'ለስብሰባዎች እና ዝግጅቶች ዘመናዊ ቦታዎች' },
  'services.transport': { en: 'Airport Transfer', am: 'የአየር ማረፊያ ማጓጓዣ' },
  'services.transport.desc': { en: 'Comfortable transportation services', am: 'ምቹ የትራንስፖርት አገልግሎቶች' },
  'services.security': { en: '24/7 Security', am: '24/7 ደህንነት' },
  'services.security.desc': { en: 'Round-the-clock security for your peace of mind', am: 'ለእርስዎ ሰላም ቀንና ሌሊት ጥበቃ' },
  
  // Restaurant
  'restaurant.title': { en: 'Sirano Restaurant', am: 'ስራኖ ምግብ ቤት' },
  'restaurant.subtitle': { en: 'A Culinary Journey', am: 'የምግብ ጉዞ' },
  'restaurant.desc': { en: 'Savor the finest Ethiopian cuisine alongside international favorites. Our expert chefs prepare each dish with passion and the freshest local ingredients.', am: 'ምርጥ የኢትዮጵያ ምግቦችን ከዓለም አቀፍ ተወዳጅ ምግቦች ጋር ይቅመሱ። የባለሙያ ሼፎቻችን እያንዳንዱን ምግብ በፍቅር እና በትኩስ የአካባቢ ግብአቶች ያዘጋጃሉ።' },
  'restaurant.hours': { en: 'Opening Hours', am: 'የስራ ሰዓት' },
  'restaurant.breakfast': { en: 'Breakfast', am: 'ቁርስ' },
  'restaurant.lunch': { en: 'Lunch', am: 'ምሳ' },
  'restaurant.dinner': { en: 'Dinner', am: 'እራት' },
  
  // Gallery
  'gallery.title': { en: 'Photo Gallery', am: 'የፎቶ ማዕከል' },
  'gallery.subtitle': { en: 'Glimpse of Luxury', am: 'የቅንጦት እይታ' },
  
  // Booking
  'booking.title': { en: 'Book Your Stay', am: 'ቆይታዎን ያስይዙ' },
  'booking.subtitle': { en: 'Reserve Your Perfect Room', am: 'ፍጹም ክፍልዎን ያስቀምጡ' },
  'booking.checkin': { en: 'Check-in Date', am: 'የመግቢያ ቀን' },
  'booking.checkout': { en: 'Check-out Date', am: 'የመውጫ ቀን' },
  'booking.guests': { en: 'Number of Guests', am: 'የእንግዶች ብዛት' },
  'booking.roomtype': { en: 'Room Type', am: 'የክፍል አይነት' },
  'booking.name': { en: 'Full Name', am: 'ሙሉ ስም' },
  'booking.email': { en: 'Email Address', am: 'ኢሜይል አድራሻ' },
  'booking.phone': { en: 'Phone Number', am: 'ስልክ ቁጥር' },
  'booking.special': { en: 'Special Requests', am: 'ልዩ ጥያቄዎች' },
  'booking.submit': { en: 'Complete Reservation', am: 'ቦታ ማስያዝ ያጠናቅቁ' },
  'booking.success': { en: 'Thank you! Your reservation request has been received. We will contact you shortly.', am: 'እናመሰግናለን! የእርስዎ የቦታ ማስያዣ ጥያቄ ደርሷል። በቅርቡ እናገኝዎታለን።' },
  
  // Contact
  'contact.title': { en: 'Contact Us', am: 'ያግኙን' },
  'contact.subtitle': { en: 'Get in Touch', am: 'ያግኙን' },
  'contact.address': { en: 'Address', am: 'አድራሻ' },
  'contact.address.value': { en: 'Welkite, Gurage Zone, SNNPR, Ethiopia', am: 'ወልቂጤ፣ ጉራጌ ዞን፣ ደቡብ ብሔሮች፣ ኢትዮጵያ' },
  'contact.phone': { en: 'Phone', am: 'ስልክ' },
  'contact.email': { en: 'Email', am: 'ኢሜይል' },
  'contact.hours': { en: 'Reception Hours', am: 'የእንግዳ መቀበያ ሰዓት' },
  'contact.hours.value': { en: '24 Hours / 7 Days', am: '24 ሰዓት / 7 ቀናት' },
  
  // Footer
  'footer.desc': { en: 'Experience the finest hospitality in Welkite. Where comfort meets Ethiopian tradition.', am: 'በወልቂጤ ውስጥ ምርጥ እንግዳ ተቀባይነትን ይለማመዱ። ምቾት ከኢትዮጵያ ባህል ጋር የሚገናኝበት።' },
  'footer.quicklinks': { en: 'Quick Links', am: 'ፈጣን አገናኞች' },
  'footer.contact': { en: 'Contact Info', am: 'የእውቂያ መረጃ' },
  'footer.follow': { en: 'Follow Us', am: 'ይከተሉን' },
  'footer.rights': { en: 'All rights reserved.', am: 'መብቶች በህግ የተጠበቁ ናቸው።' },
  
  // Common
  'common.learnmore': { en: 'Learn More', am: 'ተጨማሪ ይወቁ' },
  'common.viewall': { en: 'View All', am: 'ሁሉንም ይመልከቱ' },
  'common.birr': { en: 'ETB', am: 'ብር' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
