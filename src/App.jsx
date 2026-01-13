import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Change the import path to use the modular CSS
import "./styles/index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Страницы
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DebtorsPage from './pages/DebtorsPage';
import DebtorsFAQPage from './pages/DebtorsFAQPage';
import DocumentsPage from './pages/DocumentsPage';
import ContactsPage from './pages/ContactsPage';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about/*" element={<AboutPage />} />
            <Route path="/services/*" element={<ServicesPage />} />
            <Route path="/debtors/*" element={<DebtorsPage />} />
            <Route path="/debtors/faq" element={<DebtorsFAQPage />} />
            <Route path="/documents/*" element={<DocumentsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
