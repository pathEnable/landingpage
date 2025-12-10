import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-8 sm:px-6 lg:px-8">
        <Header />
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
