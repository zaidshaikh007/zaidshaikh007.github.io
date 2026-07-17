import { motion } from "framer-motion";
import { Section } from "./Section";
import { about } from "@/data/resumeData";

export default function About() {
  return (
    <Section id="about" title="About Me" eyebrow="Who I am">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-4xl"
      >
        {about}
      </motion.p>
    </Section>
  );
}
