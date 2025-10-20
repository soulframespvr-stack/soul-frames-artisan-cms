import { Heart, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary" fill="currentColor" />
              </div>
              <span className="text-xl font-display font-semibold">Soul Frames</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Made with Heart, Framed with Soul. Creating personalized photo frames
              that capture your most precious moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/_soul_frames._"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:scale-110 transition-smooth shadow-gold"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="mailto:soulframespvr@gmail.com"
                className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:scale-110 transition-smooth shadow-gold"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
            <p className="text-primary-foreground/80 text-sm mt-4">
              DM us on Instagram for custom orders
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} Soul Frames. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
