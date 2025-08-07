
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResearchPage from './pages/ResearchPage';
import PublicationsPage from './pages/PublicationsPage';
import TeachingPage from './pages/TeachingPage';
import EntrepreneurshipPage from './pages/EntrepreneurshipPage';
import NewsletterPage from './pages/NewsletterPage';
import NewsPage from './pages/NewsPage';
import CVPage from './pages/CVPage';
import ContactPage from './pages/ContactPage';
import { useDarkMode } from './hooks/useDarkMode';
import { PerformanceMonitor } from './utils/performance';

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  useEffect(() => {
    // Initialize performance monitoring
    const monitor = PerformanceMonitor.getInstance();
    monitor.monitorCoreWebVitals();
    monitor.reportPerformance();
    monitor.initLazyLoading();

    // Preload critical images
    monitor.preloadImage('https://spaces-cdn.owlstown.com/blobs/lb0dtxxthwlho2poglu8wogl42w2', true);
  }, []);

  return (
    <HashRouter>
      <div className={`flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300`}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/teaching" element={<TeachingPage />} />
            <Route path="/entrepreneurship" element={<EntrepreneurshipPage />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;