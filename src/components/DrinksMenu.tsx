import { Button } from "./ui/button";
import regMatcha from '../Images/regmatcha.jpg'
import stbMatcha from '../Images/stb-matcha.jpg'
import mangoMatcha from '../Images/mango-sticky-rice.jpg'
import ubeMatcha from '../Images/ube.jpg'

const drinks = [
  {
    id: 1,
    name: 'Matcha Latte',
    description: 'Smooth ceremonial grade matcha with steamed milk',
    image: regMatcha,
    tag: 'Classic',
    price: '$7.00',
  },
  {
    id: 2,
    name: 'Strawberry Matcha',
    description: 'Refreshing cold matcha over ice with your choice of milk',
    image: stbMatcha,
    tag: 'Fruity',
    price: '$7.50',
  },
  {
    id: 3,
    name: 'Mango Sticky Rice',
    description: 'Bold matcha shot for the purist',
    image: mangoMatcha,
    tag: 'Popular',
    price: '$8.00',
  },
  {
    id: 4,
    name: 'Ube Matcha',
    description: 'Sweet strawberry meets earthy matcha',
    image: ubeMatcha,
    tag: 'Sweet',
    price: '$8.00',
  }
];

export default function DrinksMenu({ externalOrderUrl }: DrinksMenuProps) {
  return (
      <section id="menu" className="py-16 sm:py-24" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(61, 90, 79, 0.3) 50%, rgba(61, 90, 79, 0.6) 100%)' }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
            Our <span className="italic" style={{ color: '#D4A574' }}>Creations</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12">
          {drinks.map((drink, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 active:scale-95 sm:active:scale-100"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-2 gap-2">
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground">
                    {drink.name}
                  </h3>
                  <span className="font-semibold whitespace-nowrap" style={{ color: '#D4A574' }}>{drink.price}</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{drink.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center px-4">
          <Button
            variant="hero"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => window.open("https://matcha1036.square.site/#CDRBDPTBZEZ2VQ5PXBQATDBA", "_blank")}
          >
            Order Here
          </Button>
        </div>
      </div>
    </section>
  );
}
