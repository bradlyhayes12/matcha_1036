import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { IconBrandLinktree, IconBrandTiktok } from "@tabler/icons-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24" style={{ background: 'linear-gradient(to bottom, rgba(61, 90, 79, 0.5) 0%, rgba(61, 90, 79, 0.8) 100%)' }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4 block" style={{ color: '#D4A574' }}>
            Get in Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4 sm:mb-6">
            Let's <span className="italic" style={{ color: '#D4A574' }}>Connect</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 px-2">
            Interested in having us at your event, market, or space?
            We'd love to hear from you.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0">
            <Button variant="hero" size="lg" className="w-full sm:w-auto sm:gap-2 gap-2" onClick={() => window.open("mailto:hello@matcha.1036.com", "_blank")}>
              <Mail size={20} />
              <span className="hidden sm:inline">Email Us</span>
              <span className="sm:hidden">Email</span>
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto sm:gap-2 gap-2" onClick={() => window.open("https://www.instagram.com/matcha.1036/", "_blank")}>
              <Instagram size={20} />
              <span className="hidden sm:inline">Follow @matcha.1036</span>
              <span className="sm:hidden">Instagram</span>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-6 px-4 sm:px-0">
            {[
              { icon: IconBrandTiktok, label: "TikTok", href: "https://www.tiktok.com/@matcha.1036" },
              { icon: MessageCircle, label: "Message", href: "https://docs.google.com/forms/d/e/1FAIpQLSe-k7hfbT0tdZ-rHRINVgXJbmRfcXm7QfQQq6ur1I7rIigsGg/viewform" },
              { icon: IconBrandLinktree, label: "Linktree", href: "https://linktr.ee/matcha1036?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnVdeKY4UO0ctcYPkaZ2nVOQfwn5txniqJj6MawX--I5KC0M8NbCP3lg6dPcY_aem_o_UJKWvqqaMqR2Qlfgn1Xw" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: '#3d5a4f', color: '#D4A574' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#D4A574';
                  (e.currentTarget as HTMLElement).style.color = '#3d5a4f';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#3d5a4f';
                  (e.currentTarget as HTMLElement).style.color = '#D4A574';
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