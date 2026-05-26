import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import AnimatedBackground from "@/components/features/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedBackground />
      <div className="relative z-10">
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              background: "#111126",
              border: "1px solid rgba(0,212,255,0.2)",
              color: "white",
            },
          }}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
