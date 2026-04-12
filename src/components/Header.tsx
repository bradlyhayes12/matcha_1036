import { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';

interface HeaderProps {
  externalCartUrl: string;
}

export default function Header({ externalCartUrl }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ background: 'linear-gradient(to bottom, rgba(61, 90, 79, 0.95) 0%, rgba(61, 90, 79, 0.8) 100%)' }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-end">
        <a
          href={"https://matcha1036.square.site/#CDRBDPTBZEZ2VQ5PXBQATDBA"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#E8D5C4] hover:text-[#D4A574] transition-colors duration-300"
        >
          <ShoppingCart size={24} />
        </a>
      </div>
    </header>
  );
}
