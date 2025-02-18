import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import WatermarkForm from "@/components/sections/watermark-form";
import HowItWorks from "@/components/sections/how-it-works";
import Benefits from "@/components/sections/benefits";
import Testimonials from "@/components/sections/testimonials";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <WatermarkForm />
        <Benefits />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}