import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Zap, Code, Users } from "lucide-react";
import profileImage from "@/assets/profile.png";

const highlights = [
  {
    icon: Cpu,
    title: "Firmware Expert",
    description: "ESP32, STM32, 8051, PIC18F, ARM",
  },
  {
    icon: Zap,
    title: "IoT Solutions",
    description: "MQTT, RS485, LoRa, ESPNOW",
  },
  {
    icon: Code,
    title: "Multi-Language",
    description: "C, Python, VHDL, Verilog",
  },
  {
    icon: Users,
    title: "Team Leader",
    description: "Mentoring & Cross-functional",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-container bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <span className="font-mono text-primary">&lt;</span>
          About Me
          <span className="font-mono text-primary">/&gt;</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 bg-card border border-border rounded-t-lg px-4 py-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-destructive/70" />
                  <span className="w-3 h-3 rounded-full bg-warning-amber/70" style={{ backgroundColor: 'hsl(38 100% 50% / 0.7)' }} />
                  <span className="w-3 h-3 rounded-full bg-accent/70" />
                </div>
                <span className="text-xs font-mono text-muted-foreground ml-2">about_me.md</span>
              </div>

              {/* Terminal Content */}
              <div className="bg-card border border-t-0 border-border rounded-b-lg p-6 font-mono text-sm leading-relaxed">
                <p className="text-muted-foreground mb-4">
                  <span className="text-primary">$</span> cat summary.txt
                </p>
                <p className="text-foreground mb-4">
                  Accomplished <span className="text-primary">Senior Lead Embedded Software Engineer</span> with a strong background in firmware development for IoT devices using <span className="text-accent">ESP32</span> and <span className="text-accent">ESP8266</span> at Innotronix Labs & Trading Ltd.
                </p>
                <p className="text-foreground mb-4">
                  Proficient in <span className="text-primary">Embedded C</span>, with a proven ability to mentor junior engineers and foster cross-functional collaboration. Successful in implementing innovative solutions that enhance product functionality and reliability.
                </p>
                <p className="text-foreground">
                  Successfully transitioned to the embedded systems industry after a <span className="text-accent">14-year academic career</span> as Assistant Professor, qualified <span className="text-primary">GATE</span> multiple times (2008, 2012, 2013, 2014).
                </p>
                <p className="text-muted-foreground mt-4 cursor-blink">
                  <span className="text-accent">_</span>
                </p>
              </div>
            </div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <span className="text-xs font-mono text-muted-foreground">Languages:</span>
              {["English", "Hindi", "Telugu", "Marathi"].map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded"
                >
                  {lang}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="chip-card group hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Profile Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="col-span-2 relative overflow-hidden rounded-lg border border-border bg-gradient-to-br from-card to-secondary/50 p-6"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/50 flex-shrink-0">
                  <img
                    src={profileImage}
                    alt="Sudhir Bussa"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">Sudhir Bussa</h4>
                  <p className="text-sm text-primary font-mono">Senior Lead - Embedded Software</p>
                  <p className="text-xs text-muted-foreground mt-1">Innotronix Labs & Trading Ltd</p>
                </div>
              </div>
              {/* Decorative Circuit */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 50 H30 V20 H70 V50 H100" stroke="currentColor" strokeWidth="2" className="text-primary" />
                  <circle cx="30" cy="50" r="4" fill="currentColor" className="text-primary" />
                  <circle cx="70" cy="20" r="4" fill="currentColor" className="text-accent" />
                  <circle cx="70" cy="50" r="4" fill="currentColor" className="text-primary" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
