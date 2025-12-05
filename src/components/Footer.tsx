import { motion } from "framer-motion";
import { Cpu, Mail, Phone, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Circuit Pattern Background */}
      <div className="absolute inset-0 pcb-pattern opacity-10" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded bg-primary/10 text-primary">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="font-mono font-bold text-xl text-foreground">
                Sudhir Bussa
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Embedded Systems Engineer specializing in IoT firmware development with ESP32, ESP8266, and industrial communication protocols.
            </p>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-accent led-pulse" />
              <span className="text-xs font-mono text-accent">Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-primary mb-4">// Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {["About", "Skills", "Projects", "Experience", "Education"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  › {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-primary mb-4">// Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:sahasudheer@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                sahasudheer@gmail.com
              </a>
              <a
                href="tel:+918055292935"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 8055292935
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground font-mono">
              © {new Date().getFullYear()} Sudhir Bussa. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground font-mono">
                Built with <span className="text-primary">React</span> + <span className="text-accent">TypeScript</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Circuit Line */}
      <svg className="absolute bottom-0 left-0 w-full h-4 opacity-30" viewBox="0 0 1200 16" preserveAspectRatio="none">
        <path
          d="M0 8 H200 L220 4 H400 L420 8 H600 L620 12 H800 L820 8 H1000 L1020 4 H1200"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="220" cy="4" r="2" fill="hsl(var(--primary))" />
        <circle cx="620" cy="12" r="2" fill="hsl(var(--accent))" />
        <circle cx="1020" cy="4" r="2" fill="hsl(var(--primary))" />
      </svg>
    </footer>
  );
};

export default Footer;
