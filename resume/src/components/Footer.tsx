import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/resumeData";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © 2026 Zaid Shaikh.
        </p>
        <div className="flex items-center gap-3">
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
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
