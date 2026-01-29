import heroBg from "../Images/matcha.jpg";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Matcha Tea Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
           Yearn for Matcha!!
          </span>
          
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-foreground mb-6 leading-tight animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            Matcha 10:36
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            Premium ceremonial-grade matcha, whisked to perfection and served at our 
            rotating pop-up locations across the city.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
            <Button variant="hero" size="xl" onClick={() => {
              document.getElementById("locations")?.scrollIntoView({behavior: "smooth",})
            }}>
              View Pop-up Locations
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => {
              document.getElementById("menu")?.scrollIntoView({behavior: "smooth",})
            }}>
              Explore Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
