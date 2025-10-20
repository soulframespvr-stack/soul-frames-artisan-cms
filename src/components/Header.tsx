import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.img
            whileHover={{ scale: 1.05 }}
            src="src/public/images/favicon.png"   // 👈 change this path if your logo is elsewhere
            alt="Soul Frames Logo"
            className="w-10 h-10 rounded-lg shadow-gold"
            />

            <span className="text-2xl font-display font-semibold text-foreground">
              Soul Frames
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-sm font-medium transition-smooth"
              >
                <span
                  className={
                    location.pathname === item.path
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }
                >
                  {item.name}
                </span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 space-y-3"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-smooth ${
                  location.pathname === item.path
                    ? "bg-accent/10 text-accent font-medium"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};
