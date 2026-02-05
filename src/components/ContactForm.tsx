import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { IconBrandLinktree, IconBrandTiktok } from "@tabler/icons-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-medium tracking-widest uppercase mb-4 block" style={{ color: '#D4A574' }}>
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Let's <span className="italic" style={{ color: '#D4A574' }}>Connect</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Interested in having us at your event, market, or space? 
            We'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="gap-2" onClick={() => window.open("mailto:hello@matcha.1036.com", "_blank")}>
              <Mail size={20} />
              Email Us
            </Button>
            <Button variant="heroOutline" size="xl" className="gap-2" onClick={() => window.open("https://www.instagram.com/matcha.1036/", "_blank")}>
              <Instagram size={20} />
              Follow @matcha.1036
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {[
              { icon: IconBrandTiktok, label: "TikTok", href: "https://www.tiktok.com/@matcha.1036" },
              { icon: MessageCircle, label: "Message", href: "https://docs.google.com/forms/d/e/1FAIpQLSe-k7hfbT0tdZ-rHRINVgXJbmRfcXm7QfQQq6ur1I7rIigsGg/viewform" },
              { icon: IconBrandLinktree, label: "Linktree", href: "https://linktr.ee/matcha1036?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnVdeKY4UO0ctcYPkaZ2nVOQfwn5txniqJj6MawX--I5KC0M8NbCP3lg6dPcY_aem_o_UJKWvqqaMqR2Qlfgn1Xw" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-black transition-colors"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '';
                }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;