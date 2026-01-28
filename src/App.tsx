import Hero from './components/Hero';
import DrinksMenu from './components/DrinksMenu';
import Locations from './components/Locations';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <DrinksMenu />
      <Locations />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
