import { motion } from "framer-motion";
import { Section } from "./Section";
import { skills } from "@/data/resumeData";

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Toolbox" eyebrow="What I use">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {group.category}
            </h3>
            <motion.ul
              className="flex flex-wrap gap-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
            >
              {group.items.map((s) => (
                <motion.li
                  key={s}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    show: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ scale: 1.06 }}
                  className="px-3 py-1.5 rounded-full text-sm bg-secondary text-secondary-foreground border border-border/60 hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {s}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
