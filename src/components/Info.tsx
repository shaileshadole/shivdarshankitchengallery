import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sprout, Users, TrendingUp, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Info = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Sprout,
      title: "Space Optimization",
      description: "We maximize every inch of your balcony to create an efficient growing space for vegetables and fruits.",
    },
    {
      icon: Users,
      title: "Family Health",
      description: "Provide fresh, organic produce for your loved ones. No pesticides, no chemicals - just pure nutrition.",
    },
    {
      icon: TrendingUp,
      title: "Easy Maintenance",
      description: "Our systems are designed for busy urban lifestyles. Minimal effort, maximum harvest.",
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description: "From setup to harvest, we guide you through every step of your kitchen garden journey.",
    },
  ];

  return (
    <section id="info" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Kitchen Garden?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your balcony from a decorative space into a productive mini-farm. 
            Grow fresh vegetables, herbs, and fruits right at home.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">
              The Concept
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most balconies are adorned with decorative plants that look beautiful but offer little value. 
              What if you could enjoy the same greenery while harvesting fresh tomatoes, peppers, herbs, 
              and leafy greens? Our kitchen garden solutions make this dream a reality. We design, install, 
              and guide you through maintaining a thriving balcony farm that brings joy, health, and 
              sustainability to your home.
            </p>
            <div className="pt-4">
              <p className="text-primary font-semibold text-lg">
                Make Your Family Healthy & Happy
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Info;
