import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { education } from "@/data/resumeData";

export default function Education() {
  return (
    <Section id="education" title="Education" eyebrow="Where I studied">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-7 shadow-card hover:border-primary/50 transition"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4">
              <GraduationCap size={22} />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{e.school}</h3>
            <p className="text-primary text-sm mt-1">{e.period}</p>
            <p className="text-muted-foreground mt-2">{e.degree}</p>
            <p className="text-sm text-foreground/80 mt-2 font-medium">{e.grade}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
