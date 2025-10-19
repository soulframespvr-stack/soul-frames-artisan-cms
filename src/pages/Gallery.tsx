import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";

interface GalleryItem {
  id: string;
  title: string;
  image: string;
}

export default function Gallery() {
  const [gallery] = useState<GalleryItem[]>([
    {
      id: "1",
      title: "Wedding Memories",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800"
    },
    {
      id: "2",
      title: "Family Portrait",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800"
    },
    {
      id: "3",
      title: "Baby's First Year",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800"
    },
    {
      id: "4",
      title: "Anniversary Gift",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800"
    },
    {
      id: "5",
      title: "Travel Memories",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800"
    },
    {
      id: "6",
      title: "Graduation Day",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800"
    }
  ]);

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
            Customer Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            See how our customers have framed their most precious moments with Soul Frames
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-smooth cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
                  <h3 className="text-primary-foreground font-display text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-16 gradient-luxury">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Share Your Soul Frames Story
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Tag us on Instagram @_soul_frames._ to be featured in our gallery!
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
