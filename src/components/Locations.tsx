import { MapPin, Calendar, Clock } from "lucide-react";
import { Button } from "./ui/button";

const locations = [
  {
    name: "Super Player Arcade",
    address: "1820 Coit RD Suite 125, Plano, TX, 75075",
    date: "This Saturday",
    time: "12 pm - 6 pm",
    upcoming: true,
  }
];

const Locations = () => {
  return (
    <section id="locations" className="py-24 text-foreground" style={{ background: 'linear-gradient(to bottom, rgba(61, 90, 79, 0.6) 0%, rgb(61, 90, 79) 50%, rgba(61, 90, 79, 0.8) 100%)' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-[#D4C9B8] mb-4 block">
            Find Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#E8D5C4]">
            Pop-up <span className="italic">Locations</span>
          </h2>
          <p className="mt-4 text-[#D4C9B8] max-w-lg mx-auto">
            We bring the matcha to you. Follow us on Instagram for real-time updates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 transition-all duration-300 ${
                location.upcoming
                  ? "bg-[rgba(140,160,155,0.4)] backdrop-blur-sm hover:bg-[rgba(140,160,155,0.5)]"
                  : "bg-[rgba(140,160,155,0.2)] opacity-70"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-xl font-semibold text-[#E8D5C4]">{location.name}</h3>
                {location.upcoming && (
                  <span className="text-xs font-medium text-[#3d5a4f] px-3 py-1 rounded-full" style={{ backgroundColor: '#D4A574' }}>
                    Upcoming
                  </span>
                )}
              </div>

              <div className="space-y-2 text-sm text-[#D4C9B8]">
                <div className="flex items-center gap-2">
                  <MapPin size={18} style={{ color: '#D4A574' }} />
                  <span>{location.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} style={{ color: '#D4A574' }} />
                  <span>{location.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} style={{ color: '#D4A574' }} />
                  <span>{location.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;