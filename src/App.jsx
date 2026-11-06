import { Route, Routes } from 'react-router-dom';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { LanguageProvider } from './context/LanguageContext';
import { VoiceProvider } from './context/VoiceContext';
import { SiteLayout } from './components/layout/SiteLayout';
import { AccessibilityPage } from './pages/AccessibilityPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ScrollManager } from './components/layout/ScrollManager';

export default function App() {
  return (
    <LanguageProvider>
      <AccessibilityProvider>
        <VoiceProvider>
          <ScrollManager />
          <Routes>
            <Route element={<SiteLayout />}>
              <Route index element={<HomePage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="accessibility" element={<AccessibilityPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </VoiceProvider>
      </AccessibilityProvider>
    </LanguageProvider>
  );
}
