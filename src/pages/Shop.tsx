import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  title: string;
  description: string;
  price?: string;
  image: string;
}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      title: "Classic Elegance Frame",
      description: "Timeless wooden frame with gold accents. Perfect for wedding photos and milestone moments.",
      price: "From ₹149",
      image: "src/public/image/frame1.jpg"
    },
    {
      id: "2",
      title: "Polaroids",
      description: "Clean lines and contemporary design. Ideal for modern interiors and artistic photography.",
      price: "From ₹149",
      image: "src/public/image/polaroid.jpg"
    },
    {
      id: "3",
      title: "Gift Hampers",
      description: "Precious gifts for your loved ones to make their moments memorable.",
      price: "From ₹399",
      image: "src/public/image/hamper.jpg"
    },
    {
      id: "4",
      title: "Customized Calendars",
      description: "Your Year,Your Memories,Your Style.",
      price: "From ₹299",
      image: "src/public/image/calendar.jpg"
    }
  ]);

  const handleOrderClick = (productTitle: string) => {
    const message = `Hi! I'm interested in ordering the ${productTitle}. Can you share more details?`;
    const encodedMessage = encodeURIComponent(message);
   window.open(`https://www.instagram.com/_soul_frames._?text=${encodedMessage}`, "_blank");

  };

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-luxury py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Our Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Discover our curated selection of luxury photo frames. Each piece can be customized to your preferences.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="overflow-hidden hover:shadow-elegant transition-smooth h-full flex flex-col">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-smooth"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-display text-xl">{product.title}</CardTitle>
                    <CardDescription className="text-sm">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    {product.price && (
                      <p className="text-lg font-semibold text-accent">{product.price}</p>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold"
                      onClick={() => handleOrderClick(product.title)}
                    >
                      <Instagram className="w-4 h-4 mr-2" />
                      Order via Instagram DM
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders CTA */}
      <section className="py-16 gradient-luxury">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Want Something Custom?
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We love creating one-of-a-kind frames tailored to your vision. Share your ideas with us!
            </p>
            <a href="https://instagram.com/_soul_frames._" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Discuss Custom Order
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
