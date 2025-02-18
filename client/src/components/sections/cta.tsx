import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Digital Assets?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Get started with our comprehensive digital asset protection solution today.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="flex items-center gap-2"
          >
            Get Started Now
            <ArrowRight size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
