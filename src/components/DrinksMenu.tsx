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

export default function DrinksMenu() {
  return (
      <section id="menu" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest uppercase mb-4 block" style={{ color: '#8ba49a' }}>
            The Menu
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Our <span className="italic" style={{ color: '#8ba49a' }}>Creations</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {drinks.map((drink, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 text-white text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: '#8ba49a' }}>
                  {drink.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {drink.name}
                  </h3>
                  <span className="font-semibold" style={{ color: '#8ba49a' }}>{drink.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{drink.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
