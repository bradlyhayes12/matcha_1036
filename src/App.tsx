import Hero from './components/Hero';
import Header from './components/Header';
import DrinksMenu from './components/DrinksMenu';
import Locations from './components/Locations';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const externalCartUrl = 'https://example.com/cart';
  const externalOrderUrl = 'https://example.com/order';

  return (
    <div className="min-h-screen">
      <Hero />
      <DrinksMenu externalOrderUrl={externalOrderUrl} />
      <Locations />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
