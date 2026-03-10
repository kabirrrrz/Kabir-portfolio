import { ArrowUp, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Copyright */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Kabir Sattyani. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6">

          <a
            href="https://github.com/kabirrrrz"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/kabir-sattyani"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition"
          >
            <Linkedin size={20} />
          </a>

          {/* Scroll to top */}
          <a
            href="#hero"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition"
          >
            <ArrowUp size={18} />
          </a>

        </div>
      </div>
    </footer>
  );
};