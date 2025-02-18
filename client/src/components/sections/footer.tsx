import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <a className="text-xl font-bold text-primary">
                3R Infotech × xsecuritas
              </a>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              Protecting your digital assets with next-generation invisible watermarking technology.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-600 hover:text-primary">
                  Features
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-600 hover:text-primary">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>© {currentYear} 3R Infotech & xsecuritas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
