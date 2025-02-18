import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { BsShieldFillCheck } from "react-icons/bs"; // Added to address missing icon

const features = [
  {
    title: "Watermark Visibility",
    description: "Control the visibility of your watermarks"
  },
  {
    title: "Multiple Watermark",
    description: "Apply multiple watermarks to your content"
  },
  {
    title: "Enabled Watermark",
    description: "Enable or disable watermarks as needed"
  },
  {
    title: "Metadata Protection",
    description: "Protect your content's metadata"
  },
  {
    title: "Easy Detection",
    description: "Quickly detect unauthorized usage"
  },
  {
    title: "Self Protection",
    description: "Built-in protection mechanisms"
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              Take control of your digital assets
            </h2>
            <p className="text-gray-600 mb-8">
              Simple steps to secure, track and discover
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded border border-blue-600 bg-blue-50 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-md bg-gradient-to-br from-blue-50 to-white rounded-lg p-8">
              {/* Placeholder for illustration */}
              <div className="aspect-square bg-blue-100/50 rounded-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}