import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Star, Gift, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Each frame is crafted with attention to detail and genuine care for your memories"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Luxury materials and finishes that honor your precious moments"
    },
    {
      icon: Gift,
      title: "Personalized",
      description: "Customized to capture the unique emotion of your story"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative gradient-luxury py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-gold rounded-2xl shadow-gold mb-6">
                <Heart className="w-10 h-10 text-white" fill="currentColor" />
              </div>
            </motion.div>
            
            <motion.h1
              {...fadeInUp}
              className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight"
            >
              Made with Heart,
              <br />
              <span className="text-accent">Framed with Soul</span>
            </motion.h1>
            
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              Transform your most precious memories into beautiful, personalized photo frames
              that tell your unique story. Each piece is a work of art, crafted with love.
            </motion.p>
            
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/shop">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 shadow-gold"
                >
                  Explore Frames
                </Button>
              </Link>
              <a href="https://instagram.com/@_soul_frames._" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-foreground/20 hover:border-accent hover:text-accent font-medium px-8"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow Our Journey
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Why Choose Soul Frames
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              More than just frames — we create heirlooms that celebrate your most emotional moments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-smooth text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-6">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-luxury">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Ready to Frame Your Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's create something beautiful together. DM us on Instagram to start your custom order.
            </p>
            <a href="https://instagram.com/@_soul_frames._" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 shadow-gold"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Start Your Order
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
