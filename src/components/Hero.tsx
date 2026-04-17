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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs sm:text-sm font-medium tracking-widest uppercase text-primary mb-3 sm:mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
           ~ Yearn for Matcha ~
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-foreground mb-4 sm:mb-6 leading-tight animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            matcha10:36
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto px-2 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            Premium matcha, whisked to perfection and served at our
            rotating pop-up locations across the city.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-auto sm:flex-row sm:justify-center animate-fade-in opacity-0 px-4 sm:px-0" style={{ animationDelay: "0.8s" }}>
            <Button variant="hero" size="lg" className="w-full sm:w-auto" onClick={() => {
              document.getElementById("locations")?.scrollIntoView({behavior: "smooth",})
            }}>
              View Pop-up Locations
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" onClick={() => {
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
