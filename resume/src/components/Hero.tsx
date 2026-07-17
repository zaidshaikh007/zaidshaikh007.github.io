import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";
import { personal } from "@/data/resumeData";
import heroAsset from "@/assets/hero-photo.png.asset.json";
import heroImage from "@/hero-photo.png";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <div id="home">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}back-poster.png)`,
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent"
          aria-hidden
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-32"
        >
          <motion.p variants={item} className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Hi, I'm
          </motion.p>
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl"
          >
            {personal.name.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-gradient">{personal.name.split(" ").slice(2).join(" ")}</span>
          </motion.h1>
          <motion.h2
            variants={item}
            className="mt-6 text-xl md:text-2xl text-foreground/85 font-medium max-w-3xl"
          >
            {personal.title}
          </motion.h2>
          <motion.p variants={item} className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl">
            {personal.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a
              href={`#projects`}
              // to="projects"
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.03] transition"
            >
              View Projects
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${personal.resumeUrl}`}
              download
              target="__blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background/40 backdrop-blur text-foreground hover:bg-background/70 transition"
            >
              <Download size={16} /> Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {[
              { href: personal.github, Icon: Github, label: "GitHub" },
              { href: personal.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${personal.email}`, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="p-2.5 rounded-full border border-border text-foreground/80 hover:text-primary hover:border-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground z-10"
        >
          <ChevronDown size={26} />
        </motion.div>
      </section>
    </div>
  );
}
