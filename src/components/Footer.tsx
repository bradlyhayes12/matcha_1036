import { Coffee, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Coffee className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">Matcha Pop-up</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Bringing authentic Japanese matcha to your neighborhood, one pop-up at a time.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#menu" className="hover:text-green-400 transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-green-400 transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@matchapopup.com"
                className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Matcha Pop-up. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
