import { MapPin, Calendar, Clock } from "lucide-react";
import { Button } from "./ui/button";

const locations = [
  {
    name: "Williamsburg Market",
    address: "Bedford Ave & N 7th St",
    date: "Every Saturday",
    time: "9am - 3pm",
    upcoming: true,
  }
];

const Locations = () => {
  return (
    <section id="locations" className="py-24 text-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4 block">
            Find Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Pop-up <span className="italic" style={{ color: '#e8945c' }}>Locations</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            We bring the matcha to you. Follow us on Instagram for real-time updates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 transition-all duration-300 ${
                location.upcoming
                  ? "bg-card hover:shadow-elevated"
                  : "bg-card opacity-70"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-xl font-semibold text-foreground">{location.name}</h3>
                {location.upcoming && (
                  <span className="text-xs font-medium text-background px-3 py-1 rounded-full" style={{ backgroundColor: '#e8945c' }}>
                    Upcoming
                  </span>
                )}
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{location.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{location.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{location.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            size="lg"
            className="px-8 py-4 rounded-lg font-semibold transition-colors"
            style={{
              backgroundColor: '#e8945c',
              color: '#1a2622',
              border: '2px solid #e8945c'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(232, 148, 92, 0.15)';
              e.currentTarget.style.color = '#e8945c';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#e8945c';
              e.currentTarget.style.color = '#1a2622';
            }}
            onClick={() => {
              document.getElementById("menu")?.scrollIntoView({behavior: "smooth",})
            }}
          >
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Locations;