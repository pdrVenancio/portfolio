import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = ({ sizeClass = "w-9 h-9" }: { sizeClass?: string }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`${sizeClass} rounded-full bg-muted/20`} />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`relative ${sizeClass} rounded-full bg-muted/20 hover:bg-muted/40 flex items-center justify-center transition-colors duration-200`}
      aria-label="Alternar tema"
    >
      <Sun
        size={18}
        className={`absolute text-primary transition-all duration-300 ${
          theme === "dark" ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
        }`}
      />
      <Moon
        size={18}
        className={`absolute text-primary transition-all duration-300 ${
          theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
