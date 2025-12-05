import { motion } from "framer-motion";
import { ChevronDown, Download, Mail, Phone } from "lucide-react";
import profileImage from "@/assets/profile.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pcb-pattern opacity-30" />
      
      {/* Circuit Lines SVG Background */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Horizontal Lines */}
        <motion.line
          x1="0" y1="20%" x2="100%" y2="20%"
          stroke="url(#circuitGrad)" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.line
          x1="0" y1="80%" x2="100%" y2="80%"
          stroke="url(#circuitGrad)" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatType: "loop" }}
        />
        {/* Vertical Lines */}
        <motion.line
          x1="10%" y1="0" x2="10%" y2="100%"
          stroke="url(#circuitGrad)" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.2, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.line
          x1="90%" y1="0" x2="90%" y2="100%"
          stroke="url(#circuitGrad)" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.7, repeat: Infinity, repeatType: "loop" }}
        />
        {/* Circuit Nodes */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            cx={`${15 + i * 10}%`}
            cy={`${20 + (i % 2) * 60}%`}
            r="4"
            fill="hsl(var(--primary))"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          />
        ))}
      </svg>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl animate-pulse-slow" />
            
            {/* Profile Container */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/50 glow-primary">
              <img
                src={profileImage}
                alt="Sudhir Bussa"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Status Indicator */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-2 -right-2 flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2"
            >
              <span className="w-3 h-3 rounded-full bg-accent led-pulse" />
              <span className="text-sm font-mono text-accent">ONLINE</span>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block font-mono text-primary text-sm md:text-base mb-4 px-3 py-1 border border-primary/30 rounded bg-primary/10">
                &gt; initializing_profile.exe
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Sudhir Bussa
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-6 font-mono"
            >
              <span className="text-primary">&#123;</span>
              {" "}Embedded Systems Engineer <span className="text-accent">/</span> IoT Developer{" "}
              <span className="text-primary">&#125;</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground mb-8 text-lg"
            >
              Crafting firmware solutions for IoT devices with ESP32, STM32, and beyond.
              <br />
              14+ years bridging academia and industry.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="mailto:sahasudheer@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
              >
                <Mail className="w-4 h-4" />
                sahasudheer@gmail.com
              </a>
              <a
                href="tel:+918055292935"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-mono text-sm"
              >
                <Phone className="w-4 h-4" />
                +91 8055292935
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-mono group"
              >
                <a href="/Sudhir_Bussa_Resume.pdf" download>
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 font-mono"
              >
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-mono">SCROLL</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
