const drinks = [
  {
    id: 1,
    name: 'Classic Matcha Latte',
    description: 'Smooth ceremonial grade matcha with steamed milk',
    image: 'https://images.pexels.com/photos/7262775/pexels-photo-7262775.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    name: 'Iced Matcha',
    description: 'Refreshing cold matcha over ice with your choice of milk',
    image: 'https://images.pexels.com/photos/6639996/pexels-photo-6639996.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    name: 'Matcha Espresso',
    description: 'Bold matcha shot for the purist',
    image: 'https://images.pexels.com/photos/4226895/pexels-photo-4226895.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    name: 'Strawberry Matcha',
    description: 'Sweet strawberry meets earthy matcha',
    image: 'https://images.pexels.com/photos/6639994/pexels-photo-6639994.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    name: 'Hojicha Latte',
    description: 'Roasted green tea with a smooth, caramel-like flavor',
    image: 'https://images.pexels.com/photos/7362656/pexels-photo-7362656.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    name: 'Matcha Affogato',
    description: 'Vanilla ice cream drowned in hot matcha',
    image: 'https://images.pexels.com/photos/4226895/pexels-photo-4226895.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function DrinksMenu() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <div className="flex justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-green-600 rounded"></div>
            <div className="h-1 w-12 bg-green-400 rounded"></div>
            <div className="h-1 w-12 bg-green-600 rounded"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each drink is carefully prepared using premium ceremonial grade matcha from Uji, Japan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drinks.map((drink) => (
            <div
              key={drink.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {drink.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">{drink.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
