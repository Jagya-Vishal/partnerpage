import { motion } from "framer-motion";
import { BsShieldLock } from "react-icons/bs";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    title: "Prevents Unauthorized Sharing",
    description: "Invisible watermarks embed unique identifiers into content, allowing businesses to track and stop leaks in real-time."
  },
  {
    title: "Tamper-Proof & Undetectable",
    description: "Invisible watermarks embed unique identifiers into content, allowing businesses to track and stop leaks in real-time."
  },
  {
    title: "Cross-Platform Protection",
    description: "Invisible watermarks embed unique identifiers into content, allowing businesses to track and stop leaks in real-time."
  },
  {
    title: "Intellectual Property Protection",
    description: "Invisible watermarks embed unique identifiers into content, allowing businesses to track and stop leaks in real-time."
  },
  {
    title: "Compliance & Risk Mitigation",
    description: "Invisible watermarks embed unique identifiers into content, allowing businesses to track and stop leaks in real-time."
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Invisible Watermarking?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Secure your digital assets with the most advanced watermarking solution on the market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-white">
                <div className="w-12 h-12 mb-4 text-primary">
                  <BsShieldLock className="w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}