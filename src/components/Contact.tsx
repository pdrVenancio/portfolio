import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm mb-2">
            {"// Contato"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Estou disponível para novos projetos e oportunidades. Entre em contato!
          </p>
          <div className="w-20 h-1 bg-primary mt-6 mx-auto rounded-full" />
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {/* Email */}
          <a
            href="mailto:pdr.venancio1@gmail.com"
            className="group bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg text-center"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <p className="text-muted-foreground text-sm break-all">
              pdr.venancio1@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="https://wa.me/5535998798185?text=Olá,%20vim%20pelo%20seu%20portfólio!"
            target="_blank"
            className="group bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg text-center"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
            <p className="text-muted-foreground text-sm">
              (35) 99879-8185
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pdr-venancio"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg text-center"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Linkedin className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
              Pedro Venâncio
              <ExternalLink size={12} />
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/pdrVenancio"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg text-center"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Github className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
              pdrVenancio
              <ExternalLink size={12} />
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
