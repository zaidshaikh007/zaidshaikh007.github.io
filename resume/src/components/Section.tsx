import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <div id={id}>
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            {eyebrow && (
              <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl md:text-5xl font-bold">
              {title}
            </h2>
            <div className="h-1 w-16 rounded-full bg-primary mt-4" />
          </motion.div>
          {children}
        </div>
      </section>
    </div>
  );
}
