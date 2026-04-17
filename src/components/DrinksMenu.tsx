import { Button } from "./ui/button";
import { ShoppingBag } from 'lucide-react';
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
          <button
            onClick={() => window.open("https://matcha1036.square.site/#CDRBDPTBZEZ2VQ5PXBQATDBA", "_blank")}
            className="group relative w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-5 rounded-xl font-medium text-white transition-all duration-300 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #D4A574 0%, #C18E4E 100%)',
              boxShadow: '0 8px 24px rgba(212, 165, 116, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 36px rgba(212, 165, 116, 0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 165, 116, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #E8D5C4 0%, #D4A574 100%)' }}
            />
            <div className="relative flex items-center justify-center gap-2 sm:gap-3">
              <ShoppingBag size={20} className="sm:size-5" strokeWidth={2.5} />
              <span className="text-base sm:text-lg font-semibold">Order Your Matcha</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
