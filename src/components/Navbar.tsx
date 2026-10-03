import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#projetos", label: "Projetos" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element && location.pathname === "/portfolio/") {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/portfolio/${href}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-2 md:py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("#hero")}
          className="font-mono text-xl md:text-lg py-2 md:py-0 font-bold text-primary hover:text-primary/80 transition-colors"
        >
          {"<PV />"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile: tema + botão do menu */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle sizeClass="w-11 h-11" />
          <button
            className="text-foreground p-2.5 -mr-2.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
          <ul className="container mx-auto px-6 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/70 hover:text-primary transition-colors duration-200 text-base font-medium w-full text-left py-3"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
