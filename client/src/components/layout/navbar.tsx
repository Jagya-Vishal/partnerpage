import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";import Logo from '../3R-INFOTECH-LOGO-e17315.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="3R Infotech Logo" 
                className="h-8"
              />
            </div>
          </Link>

          {/* Tagline - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2">
            <span className="text-xl font-medium">We</span>
            <span className="text-xl font-medium">Transform</span>
            <span className="text-xl font-medium">Business</span>
          </div>

          {/* Connect Button */}
          <div className="hidden md:flex">
            <Button 
              className="bg-[#4086F4] hover:bg-blue-600 text-white px-8"
            >
              Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {/* Mobile Tagline */}
              <div className="flex flex-col items-center space-y-1 mb-4">
                <span className="text-lg font-medium">We</span>
                <span className="text-lg font-medium">Transform</span>
                <span className="text-lg font-medium">Business</span>
              </div>

              <Button 
                className="w-full bg-[#4086F4] hover:bg-blue-600 text-white"
              >
                Connect
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}