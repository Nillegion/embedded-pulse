import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Radio, Thermometer, Clock, Gauge, Train, Fuel } from "lucide-react";

const projects = [
  {
    title: "JioBP EPS System",
    description: "Designed firmware for Totem Controller (ESP32S3) and EPS modules for electronic price display at retail outlets.",
    technologies: ["ESP32S3", "GLCD 128x64", "Embedded C"],
    outcomes: ["Successfully integrated complex GLCD interface", "Deployed at retail outlets"],
    icon: Gauge,
    color: "primary",
  },
  {
    title: "PAPIS for Indian Railways",
    description: "Developed firmware for Side Destination Boards (128X16 P8 LED displays) with multi-language support for train details.",
    technologies: ["ESP32S3", "FreeRTOS", "LoRa", "RS485", "LED P8"],
    outcomes: ["Multi-language Indian language support", "Real-time updates via RF communication"],
    icon: Train,
    color: "accent",
  },
  {
    title: "HPCL RPDU System",
    description: "Created firmware for P10 LED displays (96x32) using ESP8266 for HPCL retail outlets Rate Product Display Units.",
    technologies: ["ESP8266", "ESPNOW", "RS485", "P10 LED"],
    outcomes: ["Multi-language scrolling", "Seamless protocol integration"],
    icon: Fuel,
    color: "primary",
  },
  {
    title: "NAYARA & IOCL RPDU Systems",
    description: "Developed firmware for P10 LED displays in multiple configurations for retail outlets.",
    technologies: ["ESP8266", "ESPNOW", "RS485", "Modbus"],
    outcomes: ["Flexible display configurations", "Reliable communication"],
    icon: Monitor,
    color: "accent",
  },
  {
    title: "3-Digit EPS System",
    description: "Developed firmware for seven-segment displays (ESP32S3) for Dubai-based clients with web interface control.",
    technologies: ["ESP32S3", "Web Interface", "RS485", "ESPNOW"],
    outcomes: ["Remote price updates", "Brightness control via web"],
    icon: Gauge,
    color: "primary",
  },
  {
    title: "GNSS Based Time Display",
    description: "Firmware for time and date display using GNSS module and P10 DMDs in 2x2 configuration.",
    technologies: ["GNSS Module", "P10 DMD", "Serial Communication"],
    outcomes: ["Accurate real-time clock", "Synchronized LED panels"],
    icon: Clock,
    color: "accent",
  },
  {
    title: "Air Quality Parameter Display",
    description: "Real-time air quality monitoring displaying temperature, humidity, PM10, PM2.5, and AQI data.",
    technologies: ["Modbus", "API Integration", "RGB P10 LED", "ESP32"],
    outcomes: ["Dual data acquisition", "Multiple display variants"],
    icon: Thermometer,
    color: "primary",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-container bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <span className="font-mono text-accent">[</span>
          Projects
          <span className="font-mono text-accent">]</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full chip-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${project.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'} group-hover:scale-110 transition-transform`}>
                    <project.icon className="w-6 h-6" />
                  </div>
                  {/* Status LED */}
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent led-pulse" />
                    <span className="text-xs font-mono text-muted-foreground">DEPLOYED</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono bg-secondary text-muted-foreground rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Outcomes */}
                <div className="border-t border-border pt-4">
                  <p className="text-xs font-mono text-primary mb-2">// Outcomes</p>
                  <ul className="space-y-1">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-0.5">→</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Circuit Line */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
