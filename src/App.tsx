import { lazy, Suspense } from "react";
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
import NotFoundPage from "./pages/NotFoundPage";

const GuestPortalPage = lazy(() => import("./pages/GuestPortalPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));

function SuspenseFallback() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-6 h-6 border-2 border-luxury-gold border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

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
        <Route path="/stay" element={<Suspense fallback={<SuspenseFallback />}><GuestPortalPage /></Suspense>} />
        <Route path="/blog" element={<Suspense fallback={<SuspenseFallback />}><BlogPage /></Suspense>} />
        <Route path="/blog/:id" element={<Suspense fallback={<SuspenseFallback />}><BlogPostPage /></Suspense>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
