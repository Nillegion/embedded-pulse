import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Radio, Wrench, Monitor } from "lucide-react";

const skillCategories = [
  {
    title: "Microcontrollers",
    icon: Cpu,
    color: "primary",
    skills: ["ESP32", "ESP8266", "8051", "PIC18F", "ARM LPC2148"],
  },
  {
    title: "Communication Protocols",
    icon: Radio,
    color: "accent",
    skills: ["RS485", "I2C", "SPI", "Modbus", "MQTT", "ESPNOW", "LoRa"],
  },
  {
    title: "Programming",
    icon: Monitor,
    color: "primary",
    skills: ["Embedded C", "Assembly", "VHDL", "Verilog", "Python", "Core Java"],
  },
  {
    title: "Tools & IDEs",
    icon: Wrench,
    color: "accent",
    skills: ["Arduino", "PlatformIO", "Xilinx ISE", "Quartus Prime", "MATLAB", "Keil uVision", "MPLAB", "Git", "Jira"],
  },
];

const osRtos = ["Linux", "Windows", "FreeRTOS"];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-container" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <span className="font-mono text-primary">&#123;</span>
          Technical Skills
          <span className="font-mono text-primary">&#125;</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              className="relative group"
            >
              {/* Chip Card */}
              <div className="chip-card h-full hover:border-primary/50 transition-all duration-300">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded ${category.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'} group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{category.title}</h3>
                </div>

                {/* Skills as Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.15 + skillIndex * 0.05 }}
                      className={`
                        px-3 py-1.5 text-sm font-mono rounded border
                        ${category.color === 'primary' 
                          ? 'bg-primary/5 border-primary/30 text-primary hover:bg-primary/15' 
                          : 'bg-accent/5 border-accent/30 text-accent hover:bg-accent/15'
                        }
                        transition-colors cursor-default
                      `}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Decorative Pin Holes */}
                <div className="absolute top-2 right-2 flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* OS/RTOS Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative"
        >
          <div className="chip-card bg-gradient-to-r from-card via-secondary/30 to-card">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Monitor className="w-8 h-8 text-primary" />
                  </div>
                  {/* LED Indicator */}
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent led-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Operating Systems / RTOS</h3>
                  <p className="text-sm text-muted-foreground font-mono">System-level expertise</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {osRtos.map((os, index) => (
                  <motion.div
                    key={os}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="relative group/os"
                  >
                    <div className="px-6 py-3 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-all cursor-default">
                      <span className="font-mono text-foreground">{os}</span>
                    </div>
                    {/* Pin Connectors */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                      <span className="w-1 h-2 bg-primary/50 rounded-b" />
                      <span className="w-1 h-2 bg-primary/50 rounded-b" />
                      <span className="w-1 h-2 bg-primary/50 rounded-b" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Circuit Decoration */}
            <svg className="absolute bottom-0 left-0 w-full h-8 opacity-20" viewBox="0 0 800 30" preserveAspectRatio="none">
              <path
                d="M0 15 H200 L220 5 H300 L320 15 H500 L520 25 H600 L620 15 H800"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="220" cy="5" r="3" fill="hsl(var(--primary))" />
              <circle cx="520" cy="25" r="3" fill="hsl(var(--accent))" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
