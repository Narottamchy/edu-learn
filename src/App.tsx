import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import EnhancedDashboard from "./pages/EnhancedDashboard";
import CourseDetails from "./pages/CourseDetails";
import UnitDetails from "./pages/UnitDetails";
import Explore from "./pages/Explore";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/enhanced" element={<EnhancedDashboard />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/courses/:courseId/units/:unitId" element={<UnitDetails />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/:category" element={<Explore />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;