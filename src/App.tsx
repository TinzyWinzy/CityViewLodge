import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import SuitesPage from "./pages/SuitesPage";
import SuiteDetailPage from "./pages/SuiteDetailPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import LocalAreaPage from "./pages/LocalAreaPage";
import GuestPortalPage from "./pages/GuestPortalPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/suites" element={<SuitesPage />} />
        <Route path="/suites/:id" element={<SuiteDetailPage />} />
        <Route path="/local-area" element={<LocalAreaPage />} />
        <Route path="/stay" element={<GuestPortalPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
