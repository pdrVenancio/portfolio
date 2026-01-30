import { MapPin, GraduationCap, Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-primary text-sm mb-2">{"// Sobre mim"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Quem sou eu
          </h2>
          <div className="w-20 h-1 bg-primary mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-foreground/80 text-lg leading-relaxed">
              Desenvolvedor com foco em{" "}
              <span className="text-primary font-semibold">C# (.NET)</span> e{" "}
              <span className="text-primary font-semibold">TypeScript (Angular)</span>,
              atuando na criação de aplicações web modernas, integradas e escaláveis.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Possuo experiência no desenvolvimento de APIs REST e na implementação de
              interfaces dinâmicas em Angular, aplicando boas práticas de arquitetura e
              usabilidade. Além disso, tenho conhecimentos em JavaScript, React, Python
              e T-SQL.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Busco constantemente aprimorar minhas habilidades e contribuir para
              soluções eficientes e de alto impacto.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:pdr.venancio1@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} />
                pdr.venancio1@gmail.com
              </a>
              <a
                href="tel:+5535998798185"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} />
                (35) 99879-8185
              </a>
            </div>
          </div>

          {/* Education Cards */}
          <div className="space-y-4">
            {/* Education Card 1 */}
            <div className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Bacharel em Sistemas de Informação
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Universidade Federal de Itajubá (UNIFEI)
                  </p>
                  <p className="text-primary text-xs mt-2 font-mono">
                    03/2023 - Previsão 06/2027
                  </p>
                </div>
              </div>
            </div>

            {/* Education Card 2 */}
            <div className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Técnico em Informática
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Centro de Educação Profissional
                  </p>
                  <p className="text-primary text-xs mt-2 font-mono">
                    01/2018 - 12/2020
                  </p>
                </div>
              </div>
            </div>

            {/* Language */}
            <div className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent-foreground" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Idiomas</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Português (Nativo) • Inglês (Intermediário)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
