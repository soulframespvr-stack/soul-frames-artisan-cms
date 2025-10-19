import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Instagram,
      title: "Instagram",
      description: "Best way to reach us",
      link: "https://instagram.com/_soul_frames._",
      linkText: "@_soul_frames._"
    },
    {
      icon: Mail,
      title: "Email",
      description: "For general inquiries",
      link: "mailto:soulframespvr@gmail.com",
      linkText: "soulframespvr@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Servicing Customers Nationwide",
      link: null,
      linkText: "India"
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We typically respond within",
      link: null,
      linkText: "24 hours"
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
            Let's Create Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We'd love to hear about your story and help you frame your precious memories
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="hover:shadow-elegant transition-smooth h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-display">{info.title}</CardTitle>
                        <CardDescription className="text-sm">{info.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 font-medium transition-smooth"
                      >
                        {info.linkText}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.linkText}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="gradient-luxury shadow-elegant border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl font-display">
                  Ready to Start Your Order?
                </CardTitle>
                <CardDescription className="text-base">
                  DM us on Instagram with your ideas, and let's create something beautiful together.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://instagram.com/_soul_frames._" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold w-full sm:w-auto"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Message Us on Instagram
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
              Common Questions
            </h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do I place a custom order?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Simply DM us on Instagram with your photo, preferred frame style, and any special requests.
                    We'll guide you through the process and provide a quote.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's the delivery time?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Since each frame is custom-made, delivery typically takes 5-7 days depending on complexity
                    and your location.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you ship nationwide?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! We carefully package and ship all across Kerala. International shipping is also available
                    on request.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
