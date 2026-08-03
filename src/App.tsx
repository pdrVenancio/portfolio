import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projeto01 from "./pages/projects/projeto01";
import Projeto02 from "./pages/projects/projeto02";
import Projeto03 from "./pages/projects/projeto03";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/portfolio" element={<Index />} />
            <Route path="/portfolio/projetos/paduni" element={<Projeto01 />} />
            <Route path="/portfolio/projetos/relatorio-ad-hoc" element={<Projeto02 />} />
            <Route path="/portfolio/projetos/pulsar-investimentos" element={<Projeto03 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
