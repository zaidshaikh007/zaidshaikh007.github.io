import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personal } from "@/data/resumeData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-background/70 border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* <a
          href="home"
          className="cursor-pointer font-display font-bold text-xl tracking-tight text-gradient"
        >
          ZAID
        </a> */}

        <button onClick={() => scrollToSection("home")} 
          className="cursor-pointer font-display font-bold text-xl tracking-tight text-gradient"
        >
          ZAID
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.id}>
              {/* <a
                href={`/#${l.id}`}
                className="cursor-pointer px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative
                  [&.nav-active]:text-foreground
                  [&.nav-active]:after:content-[''] [&.nav-active]:after:absolute [&.nav-active]:after:left-3 [&.nav-active]:after:right-3 [&.nav-active]:after:-bottom-1 [&.nav-active]:after:h-0.5 [&.nav-active]:after:bg-primary [&.nav-active]:after:rounded-full"
              >
                {l.label}
              </a> */}
              <button
                onClick={() => scrollToSection(l.id)}
                className="cursor-pointer px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative
                  [&.nav-active]:text-foreground
                  [&.nav-active]:after:content-[''] [&.nav-active]:after:absolute [&.nav-active]:after:left-3 [&.nav-active]:after:right-3 [&.nav-active]:after:-bottom-1 [&.nav-active]:after:h-0.5 [&.nav-active]:after:bg-primary [&.nav-active]:after:rounded-full"
                // className="cursor-pointer ..."
              >
                {l.label}
              </button>
            </li>
          ))}
          <a
            href={personal.resumeUrl}
            download
            target="__blank"
            className="ml-3 inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
          >
            Resume
          </a>
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={l.id}
                    onClick={() => setOpen(false)}
                    className="block cursor-pointer py-2 text-foreground/80 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <a
                href={personal.resumeUrl}
                className="mt-2 inline-flex justify-center items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium"
              >
                Resume
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
