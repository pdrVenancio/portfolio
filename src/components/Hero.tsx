import { ChevronDown } from "lucide-react";
import Particles from "./Particles";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#sobre");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-background overflow-hidden"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-10">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={["#696cb6"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1}
          alphaParticles={false}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-0">
        <p className="font-mono text-muted-foreground mb-4 animate-fade-in">
          {"// Olá, eu sou"}
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
          Pedro Venâncio
        </h1>

        <div className="mb-8 animate-fade-in-up delay-200">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground/80">
            Desenvolvedor <span className="text-primary font-semibold">Full Stack</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4 text-xl md:text-2xl font-mono">
            <span className="text-primary">C#</span>
            <span className="text-muted-foreground">&</span>
            <span className="text-primary">Angular</span>
          </div>
        </div>

        <p className="text-muted-foreground max-w-xl mx-auto mb-12 text-lg animate-fade-in-up delay-300">
          Criando aplicações web modernas, integradas e escaláveis
        </p>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
