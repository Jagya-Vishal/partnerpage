import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white" style={{ backgroundImage: "url('/Digital-Watermarking.jpg.webp')" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-2xl"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[1.2] mb-6">
              Protect Your Digital Assets with{" "}
              <span className="text-blue-600">Invisible Watermarking</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Prevent unauthorized sharing, detect leaks, and safeguard your intellectual 
              property without compromising content visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                size="lg"
                className="bg-[#4086F4] hover:bg-blue-600 text-white px-8"
              >
                Get Started Today
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              300,000+ trusted users around the world
            </p>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative"
          >
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-30 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-30 translate-y-1/2" />
    </section>
  );
}