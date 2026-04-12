import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const locations = [
  {
    name: "Super Player Arcade",
    address: "1820 Coit RD Suite 125, Plano, TX, 75075",
    date: "This Saturday",
    time: "12 pm - 6 pm",
  },
  {
    name: "Claw UP",
    address: "2760 East Trinity Mills RD Apt 120, Carrollton, TX,  75006",
    date: "May 10th",
    time: "TBD",
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
              style={{
                background: `linear-gradient(135deg, rgba(212, 165, 116, 0.15) 0%, rgba(140, 160, 155, 0.2) 100%)`,
                border: '1px solid rgba(212, 165, 116, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, rgba(212, 165, 116, 0.25) 0%, rgba(140, 160, 155, 0.3) 100%)`,
                }}
              />

              <div className="relative p-8 z-10">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-display text-2xl font-semibold text-[#E8D5C4] leading-tight">
                    {location.name}
                  </h3>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#D4A574] group-hover:scale-110"
                    style={{ backgroundColor: 'rgba(212, 165, 116, 0.2)' }}
                  >
                    <ArrowRight size={20} style={{ color: '#D4A574' }} className="group-hover:text-[#3d5a4f] transition-colors duration-300" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/item:bg-[#D4A574] group-hover/item:scale-110"
                      style={{ backgroundColor: 'rgba(212, 165, 116, 0.15)' }}
                    >
                      <MapPin size={16} style={{ color: '#D4A574' }} className="group-hover/item:text-[#3d5a4f] transition-colors duration-300" />
                    </div>
                    <span className="text-[#D4C9B8] text-sm leading-relaxed">{location.address}</span>
                  </div>

                  <div className="flex items-center gap-3 group/item">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/item:bg-[#D4A574] group-hover/item:scale-110"
                      style={{ backgroundColor: 'rgba(212, 165, 116, 0.15)' }}
                    >
                      <Calendar size={16} style={{ color: '#D4A574' }} className="group-hover/item:text-[#3d5a4f] transition-colors duration-300" />
                    </div>
                    <span className="text-[#D4C9B8] font-medium text-sm">{location.date}</span>
                  </div>

                  <div className="flex items-center gap-3 group/item">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/item:bg-[#D4A574] group-hover/item:scale-110"
                      style={{ backgroundColor: 'rgba(212, 165, 116, 0.15)' }}
                    >
                      <Clock size={16} style={{ color: '#D4A574' }} className="group-hover/item:text-[#3d5a4f] transition-colors duration-300" />
                    </div>
                    <span className="text-[#D4C9B8] font-medium text-sm">{location.time}</span>
                  </div>
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