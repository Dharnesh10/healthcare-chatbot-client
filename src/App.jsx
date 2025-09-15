import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import OutbreakAlerts from "./pages/OutbreakAlerts";
import Reports from "./pages/Reports";
import VaccinationScheduler from "./pages/VaccinationScheduler";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/outbreak-alerts" element={<OutbreakAlerts />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/vaccination-scheduler" element={<VaccinationScheduler />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
