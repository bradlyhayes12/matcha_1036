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
    <section id="locations" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-primary-foreground/80 mb-4 block">
            Find Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Pop-up <span className="italic">Locations</span>
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-lg mx-auto">
            We bring the matcha to you. Follow us on Instagram for real-time updates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 transition-all duration-300 ${
                location.upcoming
                  ? "bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20"
                  : "bg-primary-foreground/5 opacity-70"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-xl font-semibold">{location.name}</h3>
                {location.upcoming && (
                  <span className="text-xs font-medium bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    Upcoming
                  </span>
                )}
              </div>
              
              <div className="space-y-2 text-sm text-primary-foreground/80">
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
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            View Full Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Locations;