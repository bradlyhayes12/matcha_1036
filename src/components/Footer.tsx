const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-xl font-semibold text-foreground">
            <span className="text-primary">Matcha 10:36</span>
          </div>
          
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <a href="#DrinksMenu" className="hover:text-foreground transition-colors">Menu</a>
            <a href="#locations" className="hover:text-foreground transition-colors">Pop-ups</a>
            <a href="#ContactForm" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            Made with 🍵
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;