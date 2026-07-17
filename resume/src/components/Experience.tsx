import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";
import { experience } from "@/data/resumeData";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" eyebrow="Where I've built">
      <div className="relative">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent"
        />
        <div className="space-y-12">
          {experience.map((exp, i) => {
            const leftSide = i % 2 === 0;
            return (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: leftSide ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${
                  leftSide ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-primary shadow-glow ring-4 ring-background" />
                <div className={`${leftSide ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                  <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-2">
                    <Briefcase size={14} /> {exp.period}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground mb-4">{exp.company}</p>
                  <ul className={`space-y-2 text-muted-foreground text-sm md:text-base ${leftSide ? "md:ml-auto" : ""}`}>
                    {exp.points.map((p) => (
                      <li key={p} className="leading-relaxed">
                        <span className="text-primary mr-2">▸</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
