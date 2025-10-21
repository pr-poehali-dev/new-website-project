
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Catalog from "./pages/Catalog";
import CatalogAll from "./pages/CatalogAll";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import Sitemap from "./pages/Sitemap";
import EventAwardsPage from "./pages/EventAwardsPage";
import RecipientAwardsPage from "./pages/RecipientAwardsPage";
import SportsCategoryPage from "./pages/SportsCategoryPage";
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
          <Route path="/catalog" element={<CatalogAll />} />
          <Route path="/catalog/:category" element={<Catalog />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service/:serviceId" element={<ServicePage />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/events/:eventId" element={<EventAwardsPage />} />
          <Route path="/recipient/:recipientId" element={<RecipientAwardsPage />} />
          <Route path="/sports/:categoryId" element={<SportsCategoryPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;