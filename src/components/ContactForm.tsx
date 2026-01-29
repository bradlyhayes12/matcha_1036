import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Let's <span className="text-primary italic">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Interested in having us at your event, market, or space? 
            We'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="gap-2">
              <Mail size={20} />
              Email Us
            </Button>
            <Button variant="heroOutline" size="xl" className="gap-2">
              <Instagram size={20} />
              Follow @matcha.1036
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {[
              { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/matcha.1036?utm_source=ig_web_button_share_sheet&igsh=MW80b3JkdXlwYWg3Nw%3D%3D" },
              { icon: MessageCircle, label: "TikTok", href: "#" },
              { icon: Mail, label: "Email", href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
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