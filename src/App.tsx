import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Layout from "./components/Layout";
import Home from "./components/Home";
import SymptomChecker from "./components/SymptomChecker";
import AppointmentScheduler from "./components/AppointmentScheduler";
import MedicationReminder from "./components/MedicationReminder";
import HealthDashboard from "./components/HealthDashboard";
import Teleconsultation from "./components/Teleconsultation";
import HealthAlerts from "./components/HealthAlerts";
import HealthTrends from "./components/HealthTrends";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/symptoms" element={<SymptomChecker />} />
              <Route path="/appointments" element={<AppointmentScheduler />} />
              <Route path="/reminders" element={<MedicationReminder />} />
              <Route path="/dashboard" element={<HealthDashboard />} />
              <Route path="/teleconsultation" element={<Teleconsultation />} />
              <Route path="/alerts" element={<HealthAlerts />} />
              <Route path="/trends" element={<HealthTrends />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
