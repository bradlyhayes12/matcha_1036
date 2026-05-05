import { MapPin, Calendar, Clock, Navigation, ExternalLink } from "lucide-react";
import { useState } from "react";

const locations = [
  {
    name: "Chicken n Pickle Allen",
    address: "1221 Johnson Rd, Allen, TX 75013",
    date: "May 9",
    time: "11 pm - 4 pm",
  },
  {
    name: "Claw UP",
    address: "2760 East Trinity Mills RD Apt 120, Carrollton, TX, 75006",
    date: "May 10th",
    time: "12 pm - 5 pm",
  }
];

function MapsModal({ location, onClose }: { location: typeof locations[0]; onClose: () => void }) {
  const encodedAddress = encodeURIComponent(location.address);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-sm rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(61, 90, 79, 0.98) 0%, rgba(50, 75, 65, 0.98) 100%)',
          border: '1px solid rgba(212, 165, 116, 0.3)',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.5)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#E8D5C4]">
              Get Directions
            </h3>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#D4C9B8] hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: 'rgba(212, 165, 116, 0.1)' }}>
            <p className="font-display text-lg font-semibold text-[#E8D5C4] mb-1">{location.name}</p>
            <p className="text-[#D4C9B8] text-sm leading-relaxed">{location.address}</p>
          </div>

          <div className="space-y-3">
            <a
              href={`https://maps.apple.com/?address=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 w-full p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.2) 0%, rgba(212, 165, 116, 0.1) 100%)',
                border: '1px solid rgba(212, 165, 116, 0.25)',
              }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10">
                <Navigation size={20} style={{ color: '#D4A574' }} />
              </div>
              <div className="flex-1 text-left">
                <p className="text-[#E8D5C4] font-semibold text-sm sm:text-base">Apple Maps</p>
                <p className="text-[#D4C9B8] text-xs">Open in Apple Maps</p>
              </div>
              <ExternalLink size={16} className="text-[#D4C9B8]" />
            </a>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 w-full p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.2) 0%, rgba(212, 165, 116, 0.1) 100%)',
                border: '1px solid rgba(212, 165, 116, 0.25)',
              }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10">
                <MapPin size={20} style={{ color: '#D4A574' }} />
              </div>
              <div className="flex-1 text-left">
                <p className="text-[#E8D5C4] font-semibold text-sm sm:text-base">Google Maps</p>
                <p className="text-[#D4C9B8] text-xs">Open in Google Maps</p>
              </div>
              <ExternalLink size={16} className="text-[#D4C9B8]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const Locations = () => {
  const [activeLocation, setActiveLocation] = useState<typeof locations[0] | null>(null);

  return (
    <section id="locations" className="py-16 sm:py-24 text-foreground" style={{ background: 'linear-gradient(to bottom, rgba(61, 90, 79, 0.6) 0%, rgb(61, 90, 79) 50%, rgba(61, 90, 79, 0.8) 100%)' }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-[#D4C9B8] mb-3 sm:mb-4 block">
            Find Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#E8D5C4]">
            Pop-up <span className="italic">Locations</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-[#D4C9B8] max-w-lg mx-auto text-sm sm:text-base px-4">
            We bring the matcha to you. Follow us on Instagram for real-time updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-4xl mx-auto px-2 sm:px-0">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 sm:hover:-translate-y-3 cursor-pointer active:scale-[0.98]"
              style={{
                background: `linear-gradient(135deg, rgba(212, 165, 116, 0.15) 0%, rgba(140, 160, 155, 0.2) 100%)`,
                border: '1px solid rgba(212, 165, 116, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
              onClick={() => setActiveLocation(location)}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, rgba(212, 165, 116, 0.25) 0%, rgba(140, 160, 155, 0.3) 100%)`,
                }}
              />

              <div className="relative p-5 sm:p-8 z-10">
                <div className="mb-5 sm:mb-6">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-[#E8D5C4] leading-tight mb-1">
                    {location.name}
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(212, 165, 116, 0.15)' }}
                    >
                      <Calendar size={18} style={{ color: '#D4A574' }} />
                    </div>
                    <span className="text-[#E8D5C4] font-medium text-base sm:text-lg">{location.date}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(212, 165, 116, 0.15)' }}
                    >
                      <Clock size={18} style={{ color: '#D4A574' }} />
                    </div>
                    <span className="text-[#E8D5C4] font-medium text-base sm:text-lg">{location.time}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4 sm:pt-5" style={{ borderTop: '1px solid rgba(212, 165, 116, 0.15)' }}>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgba(212, 165, 116, 0.15)' }}
                  >
                    <MapPin size={18} style={{ color: '#D4A574' }} />
                  </div>
                  <span className="text-[#D4C9B8] text-sm sm:text-base leading-relaxed">{location.address}</span>
                </div>

                <div className="mt-4 sm:mt-5 flex items-center gap-2 text-[#D4A574] text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Navigation size={14} />
                  <span>Tap for directions</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeLocation && (
        <MapsModal location={activeLocation} onClose={() => setActiveLocation(null)} />
      )}
    </section>
  );
};

export default Locations;
