import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  { number: "1", title: "Integration with Existing Systems", description: "XSecuritas provides a simple API or plugin that works with most content management systems." },
  { number: "2", title: "Embed Watermarks", description: "The watermarks are seamlessly embedded in documents, images, or videos without altering the original file." },
  { number: "3", title: "Real-Time Monitoring", description: "3R Infotech (partner) monitors the data for leaks, ensuring that unauthorized distribution is immediately flagged." },
  { number: "4", title: "Data Leak Detection & Response", description: "In case of a breach, 3R Infotech tracks the source and ensures swift action." },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 0.8", "end start"] });

  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => setProgress(latest));

  return (
    <div className="relative">
      <section ref={containerRef} className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">How it Works?</h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {steps.map((step, index) => {
              const isActive = progress > (index + 0.5) / steps.length; // Waits until half-visible
              const nextIsActive = progress > (index + 1) / steps.length;

              return (
                <div key={step.number} className="relative pl-16 mb-16 last:mb-0">
                  {/* Step Circle */}
                  <motion.div
                    className="absolute left-0 top-0 w-12 h-12 rounded-full border-2 flex items-center justify-center"
                    animate={{ backgroundColor: isActive ? "#738DED" : "transparent", borderColor: isActive ? "#738DED" : "#A0AEC0" }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-bold text-lg" style={{ color: isActive ? "white" : "#738DED" }}>
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Connecting Line (Appears Only When Step is Fully Visible) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute left-[23px] top-[50px] w-[3px] bg-[#738DED]"
                      initial={{ height: 0 }}
                      animate={{ height: isActive ? (nextIsActive ? "80px" : "40px") : "0px" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Step Content */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
