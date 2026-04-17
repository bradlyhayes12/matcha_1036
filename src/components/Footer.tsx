const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 border-t border-border" style={{ background: 'linear-gradient(to bottom, rgba(61, 90, 79, 0.8) 0%, rgb(61, 90, 79) 100%)' }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 text-center">
          <div className="font-display text-lg sm:text-xl font-semibold">
           <a href="#hero" className="hover:opacity-80 transition-opacity">
             <span style={{ color: '#E8D5C4' }}>Matcha 10:36</span>
           </a>
          </div>

          <nav className="flex gap-4 sm:gap-6 text-xs sm:text-sm flex-wrap justify-center" style={{ color: '#D4C9B8' }}>
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#locations" className="hover:text-white transition-colors">Pop-ups</a>
            <a href="https://linktr.ee/matcha1036?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnVdeKY4UO0ctcYPkaZ2nVOQfwn5txniqJj6MawX--I5KC0M8NbCP3lg6dPcY_aem_o_UJKWvqqaMqR2Qlfgn1Xw" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <p className="text-xs sm:text-sm" style={{ color: '#D4C9B8' }}>
            Made with matcha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;