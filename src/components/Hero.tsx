import Particles from "./Particles";
import TextType from './TextType';

const Hero = () => {
  
  const messageList = [
    "Economizei mais de R$ 40 mil em 2 meses automatizando processos internos.",
    "Impactei diretamente mais de 60 usuários e 8 departamentos com soluções desenvolvidas por mim.", 
    "Já reduzi processos que levavam dias para poucas horas! Usando código, não promessas.",
    "Melhorei a escalabilidade de APIs com processamento assíncrono e mensageria."
  ]
  
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

      <div className="container mx-auto px-6 relative z-0">
        <p className="font-mono text-muted-foreground mb-4 animate-fade-in">
          {"// Olá, eu sou"}
        </p>

        <h1 className="text-4xl md:text-8xl lg:text-9xl font-sans font-bold text-foreground mb-6 animate-fade-in-up">
          Pedro Venâncio
        </h1>

        <div className="mb-3 animate-fade-in-up delay-200">
          <h2 className="text-1xl md:text-2xl lg:text-3xl font-light text-foreground/80">
            Desenvolvedor <span className="text-primary font-semibold">Full Stack</span> usando
            <span className="text-primary"> C# (.net)</span>
            <span className="text-muted-foreground/80"> &</span>
            <span className="text-primary"> TypeScript (Angular)</span>
          </h2>

          <div className="flex gap-3 mt-4 text-xl md:text-2xl text-foreground/80">
          </div>
        </div>


        <TextType 
          text={messageList}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          deletingSpeed={50}
          cursorBlinkDuration={0.5}
        />  
        
      </div>
    </section>
  );
};

export default Hero;
