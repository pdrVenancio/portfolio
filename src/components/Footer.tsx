const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="font-mono text-sm text-muted-foreground">
          {"<"} Desenvolvido com{" "}
          <span className="text-primary">♥</span> por Pedro Venâncio {"/>"}
        </p>
        <p className="text-xs text-muted-foreground/50 mt-2">
          © {currentYear} — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
