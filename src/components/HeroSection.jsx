import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>

            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-1">
              Kabir
            </span>

            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Sattyani
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground opacity-0 animate-fade-in-delay-3">
            Software Developer | AI Integration | Cloud Computing
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            I build intelligent web applications using AI, Python, and modern
            web technologies. Passionate about creating useful tools like AI
            meeting summarizers and accessibility-focused applications.
          </p>

          {/* Buttons */}
          <div className="pt-4 flex justify-center gap-4 opacity-0 animate-fade-in-delay-4">

            <a href="#projects" className="cosmic-button">
              View My Work
            </a>

            <a
              href="/Kabir_Sattyani_Resume.pdf"
              target="_blank"
              className="border border-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition"
            >
              Download Resume
            </a>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};