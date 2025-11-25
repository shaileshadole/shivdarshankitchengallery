import { Mail, Phone, Leaf, Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-custom px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Kitchen Garden Logo" className="h-10 w-10" />
              <span className="text-lg font-semibold">Kitchen Garden</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transform your balcony into a thriving mini-farm. Fresh, organic produce for a healthy family.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Leaf className="h-5 w-5" />
              <span className="text-sm font-medium">Make Your Family Healthy & Happy</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("info")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Info
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("videos")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Videos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Balcony Garden Setup</li>
              <li>Space Optimization</li>
              <li>Organic Vegetable Growing</li>
              <li>Expert Consultation</li>
              <li>Maintenance Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium mb-1">
                    <a
                      href="mailto:swarooptakmoge3@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      Email
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium mb-1">
                    <a
                      href="https://wa.me/919011762727"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      WhatsApp
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">

                <Instagram className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium mb-1">
                    <a
                      href="https://wa.me/919011762727"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Instagram
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Facebook className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium mb-1">
                    <a
                      href="https://wa.me/919011762727"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Facebook
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Youtube className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium mb-1">
                    <a
                      href="https://wa.me/919011762727"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Youtube
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Shivdarshan Kitchen Gallery All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with <span className="font-semibold text-foreground">❤</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
