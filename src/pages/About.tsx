import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Heart, Sparkles, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Crafted with Love",
      description: "Every frame is created with genuine care and attention to the emotional significance of your memories."
    },
    {
      icon: Sparkles,
      title: "Artistic Excellence",
      description: "We combine traditional craftsmanship with contemporary design to create timeless pieces."
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "We work closely with each customer to ensure your frame perfectly captures your unique story."
    }
  ];

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
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            More than frames — we're in the business of preserving emotions
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Soul Frames was born from a simple belief: that your most precious memories deserve to be
                celebrated with the same care and love that created them.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                We're not just creating frames; we're crafting vessels for your emotions, your stories,
                and your heart. Each piece we make is infused with the understanding that what we frame
                isn't just a photograph — it's a moment that made you smile, cry, or changed your life forever.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                As a small, artisan brand, we pour our hearts into every single frame. We work closely with
                each customer, ensuring that what we create together is as unique and special as the memory
                it holds.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 gradient-luxury">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What We Believe In
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-card rounded-2xl p-8 shadow-soft text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-2xl shadow-gold mb-6">
              <Heart className="w-8 h-8 text-white" fill="currentColor" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Made with Heart, Framed with Soul
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This isn't just our tagline — it's our promise. Every frame we create carries a piece of our
              own heart, because we understand the profound trust you place in us when you ask us to frame
              your most treasured memories.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
