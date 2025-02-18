import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check } from "lucide-react";

const watermarkOptions = [
  "Watermark Visibility",
  "Webcam Watermark",
  "Invisible Watermark", 
  "Capture Blocking",
  "Metadata Watermark",
  "Environment Flexibility",
  "Display Modes",
  "Print Watermark",
  "Data Classification",
  "Self Protection",
  "Video Support"
];

const services = [
  "Invisible Watermarking",
  "Digital Asset Protection",
  "Content Tracking",
  "Custom Solutions"
];

export default function WatermarkForm() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 lg:sticky lg:top-24"
          >
            <h2 className="text-2xl font-bold mb-4">
              Take control of your digital assets with XSecuritas
            </h2>
            <p className="text-gray-600 mb-6">
              Simple steps to secure, track and discover
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {watermarkOptions.map((option, index) => (
                <div key={option} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded border border-blue-600 bg-blue-50 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">{option}</h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-xl mx-auto"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium">
                    First name <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="firstName" 
                    placeholder="Your name" 
                    required 
                    className="w-full p-2.5 rounded-lg border border-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium">
                    Last name <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="lastName" 
                    placeholder="Your last name" 
                    required 
                    className="w-full p-2.5 rounded-lg border border-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  E-mail <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="yourmail@gmail.com" 
                    required 
                    className="w-full p-2.5 rounded-lg border border-gray-300"
                  />
                  <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium">
                  Company <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="company" 
                  required 
                  className="w-full p-2.5 rounded-lg border border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website" className="text-sm font-medium">
                  Website
                </Label>
                <Input 
                  id="website" 
                  placeholder="https://www.xyz.vom" 
                  className="w-full p-2.5 rounded-lg border border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-sm font-medium">
                  What service/Solutions can we provide?
                </Label>
                <Select>
                  <SelectTrigger className="w-full p-2.5 rounded-lg border border-gray-300">
                    <SelectValue placeholder="Invisible Watermarking" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service.toLowerCase()}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message
                </Label>
                <Textarea 
                  id="message" 
                  className="w-full p-2.5 rounded-lg border border-gray-300 min-h-[100px]" 
                />
              </div>

              {/* reCAPTCHA placeholder */}
              <div className="g-recaptcha" data-sitekey="your-site-key"></div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg"
              >
                Submit Query
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}