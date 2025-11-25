import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, Sprout, Heart } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful balcony garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full"
            >
              <Leaf className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Transform Your Space</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Turn Your Balcony Into a{" "}
              <span className="text-gradient">Mini Farm</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Why settle for decorative plants when you can grow fresh, organic vegetables and fruits? 
              We optimize your balcony space to create a thriving kitchen garden that nourishes your family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("book")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              >
                Book Your Session
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("info")}
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 pt-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg"
              >
                <Sprout className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Organic Growth</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg"
              >
                <Heart className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Healthy Family</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side could have additional content or remain empty for the background image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
