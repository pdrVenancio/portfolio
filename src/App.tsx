import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Paduni from "./pages/projects/Paduni";
import RelatorioAdHoc from "./pages/projects/RelatorioAdHoc";
import Traveller from "./pages/projects/Traveller";

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
            <Route path="/portfolio/projetos/paduni" element={<Paduni />} />
            <Route path="/portfolio/projetos/relatorio-ad-hoc" element={<RelatorioAdHoc />} />
            <Route path="/portfolio/projetos/traveller" element={<Traveller />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
