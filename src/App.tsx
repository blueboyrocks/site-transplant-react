import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import SurroundAI from "./pages/products/SurroundAI";
import DataCoffee from "./pages/products/DataCoffee";
import Seismic from "./pages/products/Seismic";
import Healthcare from "./pages/industries/Healthcare";
import UseCases from "./pages/UseCases";
import Finance from "./pages/use-cases/Finance";
import HealthcareUseCase from "./pages/use-cases/HealthcareUseCase";
import Retail from "./pages/use-cases/Retail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/use-cases/finance" element={<Finance />} />
            <Route path="/use-cases/healthcare" element={<HealthcareUseCase />} />
            <Route path="/use-cases/retail" element={<Retail />} />
            <Route path="/products/surroundai" element={<SurroundAI />} />
            <Route path="/products/data-coffee" element={<DataCoffee />} />
            <Route path="/products/seismic" element={<Seismic />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
