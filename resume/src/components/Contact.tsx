import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { Section } from "./Section";
import { personal } from "@/data/resumeData";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <Section id="contact" title="Let's Build Something Together" eyebrow="Get in touch">
      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <p className="text-muted-foreground text-lg leading-relaxed">
            Have a project, a role, or an idea in mind? I'm always open to
            interesting conversations and collaborations.
          </p>
          {[
            { Icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
            { Icon: Phone, label: personal.phone, href: `tel:${personal.phone}` },
            { Icon: MapPin, label: personal.location },
          ].map(({ Icon, label, href }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                <Icon size={18} />
              </div>
              {href ? (
                <a href={href} className="text-foreground hover:text-primary transition-colors">
                  {label}
                </a>
              ) : (
                <span className="text-foreground">{label}</span>
              )}
            </div>
          ))}
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card space-y-4"
        >
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition resize-none"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
              sent
                ? "bg-primary/20 text-primary border border-primary/40"
                : "bg-primary text-primary-foreground shadow-glow"
            }`}
          >
            {sent ? (
              <>
                <Check size={18} /> Message sent
              </>
            ) : (
              <>
                <Send size={16} /> Send message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
}
