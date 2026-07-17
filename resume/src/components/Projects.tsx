import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { projects } from "@/data/resumeData";

export default function Projects() {
  return (
    <Section id="projects" title="Selected Projects" eyebrow="What I've shipped">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url || "#"}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card hover:border-primary/60 hover:shadow-glow transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {p.name}
              </h3>
              <ExternalLink
                size={16}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {p.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
