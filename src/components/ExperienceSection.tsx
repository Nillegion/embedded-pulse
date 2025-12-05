import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Lead – Embedded Software Engineer",
    company: "Innotronix Labs & Trading Ltd",
    period: "Oct 2023 – Present",
    type: "work",
    description: [
      "Developed and deployed firmware solutions for IoT and embedded systems using ESP32/ESP8266 microcontrollers",
      "Conducted Root Cause Analysis for software and hardware issues in existing products (RPDU systems for BPCL, NAYARA, IOCL)",
      "Collaborated with cross-functional teams to deliver reliable firmware for retail and transportation applications",
      "Utilized Git for version control and Jira for task tracking and project management",
    ],
  },
  {
    title: "Assistant Professor",
    company: "Bharati Vidyapeeth (Deemed to be University) College of Engineering",
    period: "Oct 2010 – Oct 2023",
    type: "academic",
    description: [
      "Mentored students in VLSI design, embedded systems, and programming languages (VHDL, Embedded C, Python)",
      "Supervised academic projects integrating VLSI, IoT, and Embedded Systems (8051, PIC18F, ARM LPC2148)",
      "13+ years of academic excellence and student mentorship",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-container" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <span className="font-mono text-primary">void</span>{" "}
          Experience
          <span className="font-mono text-primary">()</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* PCB Track Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="relative"
                >
                  {/* Outer Ring */}
                  <div className="w-16 h-16 rounded-full bg-card border-4 border-primary flex items-center justify-center glow-primary">
                    {exp.type === "work" ? (
                      <Briefcase className="w-6 h-6 text-primary" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-accent" />
                    )}
                  </div>
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20" />
                </motion.div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-20" : "md:pl-20"} pl-24 md:pl-0`}>
                <div className="chip-card hover:border-primary/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center gap-2 text-xs font-mono text-primary mb-3">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>

                  <h3 className="font-bold text-lg text-foreground mb-1">{exp.title}</h3>
                  <p className="text-sm text-accent font-mono mb-4">{exp.company}</p>

                  {/* Description List */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Circuit Connectors */}
                  <div className={`absolute top-1/2 -translate-y-1/2 hidden md:block ${
                    index % 2 === 0 ? "-right-8" : "-left-8"
                  }`}>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                  </div>
                </div>
              </div>

              {/* Spacer */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}

          {/* End Node */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="absolute left-8 md:left-1/2 -translate-x-1/2 bottom-0"
          >
            <div className="w-4 h-4 rounded-full bg-primary/50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
