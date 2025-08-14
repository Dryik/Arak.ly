import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ROUTES } from '@/routes';
import Index from './pages/Index';
import IndexAr from './pages/IndexAr';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const HealthcareIndustry = React.lazy(() => import('./pages/industries/Healthcare'));
const BankingFinanceIndustry = React.lazy(() => import('./pages/industries/BankingFinance'));
const EducationIndustry = React.lazy(() => import('./pages/industries/Education'));
const GovernmentIndustry = React.lazy(() => import('./pages/industries/Government'));
const PrivateSectorIndustry = React.lazy(() => import('./pages/industries/PrivateSector'));
const HealthcareIndustryAr = React.lazy(() => import('./pages/industries/ar/HealthcareAr'));
const BankingFinanceIndustryAr = React.lazy(() => import('./pages/industries/ar/BankingFinanceAr'));
const EducationIndustryAr = React.lazy(() => import('./pages/industries/ar/EducationAr'));
const GovernmentIndustryAr = React.lazy(() => import('./pages/industries/ar/GovernmentAr'));
const PrivateSectorIndustryAr = React.lazy(() => import('./pages/industries/ar/PrivateSectorAr'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const CookiePolicy = React.lazy(() => import('./pages/CookiePolicy'));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/ar" element={<IndexAr />} />
              <Route path={ROUTES.industries.healthcare} element={<HealthcareIndustry />} />
              <Route path={ROUTES.industries.bankingFinance} element={<BankingFinanceIndustry />} />
              <Route path={ROUTES.industries.education} element={<EducationIndustry />} />
              <Route path={ROUTES.industries.government} element={<GovernmentIndustry />} />
              <Route path={ROUTES.industries.privateSector} element={<PrivateSectorIndustry />} />
              <Route path={ROUTES.industriesAr.healthcare} element={<HealthcareIndustryAr />} />
              <Route
                path={ROUTES.industriesAr.bankingFinance}
                element={<BankingFinanceIndustryAr />}
              />
              <Route path={ROUTES.industriesAr.education} element={<EducationIndustryAr />} />
              <Route path={ROUTES.industriesAr.government} element={<GovernmentIndustryAr />} />
              <Route
                path={ROUTES.industriesAr.privateSector}
                element={<PrivateSectorIndustryAr />}
              />
              <Route path={ROUTES.privacy} element={<Privacy />} />
              <Route path={ROUTES.terms} element={<Terms />} />
              <Route path={ROUTES.cookies} element={<CookiePolicy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
