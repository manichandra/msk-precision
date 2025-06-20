import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">MSK</span>
              </div>
              <span className="font-bold text-lg">MSK Precision</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Precision in Every Dimension
            </p>
            <p className="text-sm text-muted-foreground">
              Contact: <a href="mailto:info@mskprecision.com" className="hover:text-foreground transition-colors">info@mskprecision.com</a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/precision-works" className="hover:text-foreground transition-colors">
                  CNC Machining
                </Link>
              </li>
              <li>
                <Link href="/engineering" className="hover:text-foreground transition-colors">
                  Engineering Services
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-foreground transition-colors">
                  Technical Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} MSK Precision Engineering Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 