import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Trophy } from "lucide-react";

const education = [
  {
    degree: "M.Tech Electronics (Computer)",
    institution: "College of Engineering, Pune",
    year: "2013",
    grade: "CGPA: 7.11",
  },
  {
    degree: "B.Tech (Electronics & Communication Engineering)",
    institution: "Vignan's Engineering College, Vadlamudi",
    year: "2008",
    grade: "64%",
  },
];

const achievements = [
  "Successfully transitioned to embedded systems industry after 14-year academic career",
  "Qualified GATE multiple times (2008, 2012, 2013, 2014)",
  "Received awards for academic excellence and cultural achievements",
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-container bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <span className="font-mono text-accent">#include</span>{" "}
          Education
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Cards */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div className="chip-card hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-accent">{edu.year}</span>
                        <span className="px-2 py-0.5 text-xs font-mono bg-accent/10 text-accent rounded border border-accent/30">
                          {edu.grade}
                        </span>
                      </div>
                      <h3 className="font-bold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    </div>
                  </div>

                  {/* Circuit Decoration */}
                  <div className="absolute bottom-2 right-2 opacity-10 group-hover:opacity-30 transition-opacity">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path
                        d="M5 20 H15 V10 H25 V20 H35"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-primary"
                      />
                      <circle cx="15" cy="20" r="2" fill="currentColor" className="text-primary" />
                      <circle cx="25" cy="10" r="2" fill="currentColor" className="text-accent" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="chip-card h-full">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Achievements</h3>
                  <p className="text-xs text-muted-foreground font-mono">// Career milestones</p>
                </div>
              </div>

              {/* Achievement List */}
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded bg-secondary/50 border border-border hover:border-accent/50 transition-colors"
                  >
                    <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{achievement}</p>
                  </motion.div>
                ))}
              </div>

              {/* GATE Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono text-primary mb-1">GATE QUALIFIED</p>
                    <p className="text-sm text-muted-foreground">4x Qualifier (2008, 2012, 2013, 2014)</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">4x</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
