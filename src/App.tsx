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
import SLED from "./pages/use-cases/SLED";
import Accounting from "./pages/use-cases/Accounting";
import Enterprise from "./pages/use-cases/Enterprise";
import SmallMediumBusiness from "./pages/use-cases/SmallMediumBusiness";
import AccountingSurroundAI from "./pages/use-cases/accounting/SurroundAI";
import AccountingDataCoffee from "./pages/use-cases/accounting/DataCoffee";
import AccountingCompleteSolution from "./pages/use-cases/accounting/CompleteSolution";
import FinanceSurroundAI from "./pages/use-cases/finance/SurroundAI";
import FinanceDataCoffee from "./pages/use-cases/finance/DataCoffee";
import FinanceCompleteSolution from "./pages/use-cases/finance/CompleteSolution";
import CustomerSuccess from "./pages/CustomerSuccess";
import HealthcareSalesTransformation from "./pages/customer-success/HealthcareSalesTransformation";
import GovernmentDataModernization from "./pages/customer-success/GovernmentDataModernization";
import MedicalDocumentationRevolution from "./pages/customer-success/MedicalDocumentationRevolution";
import FinanceCaseStudy from "./pages/resources/FinanceCaseStudy";
import HealthcareROICalculator from "./pages/resources/HealthcareROICalculator";
import ROICalculator from "./pages/resources/ROICalculator";
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
            <Route path="/use-cases/sled" element={<SLED />} />
            <Route path="/use-cases/accounting" element={<Accounting />} />
            <Route path="/use-cases/accounting/surround-ai" element={<AccountingSurroundAI />} />
            <Route path="/use-cases/accounting/data-coffee" element={<AccountingDataCoffee />} />
            <Route path="/use-cases/accounting/complete-solution" element={<AccountingCompleteSolution />} />
            <Route path="/use-cases/finance/surround-ai" element={<FinanceSurroundAI />} />
            <Route path="/use-cases/finance/data-coffee" element={<FinanceDataCoffee />} />
            <Route path="/use-cases/finance/complete-solution" element={<FinanceCompleteSolution />} />
            <Route path="/use-cases/enterprise" element={<Enterprise />} />
            <Route path="/use-cases/small-medium-business" element={<SmallMediumBusiness />} />
            <Route path="/customer-success" element={<CustomerSuccess />} />
            <Route path="/customer-success/healthcare-sales-transformation" element={<HealthcareSalesTransformation />} />
            <Route path="/customer-success/government-data-modernization" element={<GovernmentDataModernization />} />
            <Route path="/customer-success/medical-documentation-revolution" element={<MedicalDocumentationRevolution />} />
            <Route path="/resources/finance-case-study" element={<FinanceCaseStudy />} />
            <Route path="/resources/healthcare-roi-calculator" element={<HealthcareROICalculator />} />
            <Route path="/resources/roi-calculator" element={<ROICalculator />} />
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
