import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-sky-50">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-sky-700">Mind and Soul Hypnotherapy</h3>
            <p className="text-sm text-muted-foreground">
              Professional hypnotherapy services in Australia, helping clients achieve positive change and personal
              growth.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-sky-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-sky-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-sky-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-sm text-muted-foreground hover:text-sky-600">
                  Book a Session
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-sky-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm text-muted-foreground hover:text-sky-600">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-sky-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-sky-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-sky-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-sky-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-sky-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              123 Serenity Lane
              <br />
              Sydney, NSW 2000
              <br />
              Australia
            </p>
            <p className="text-sm text-muted-foreground">
              Phone: (02) 1234 5678
              <br />
              Email: info@mindandsoulhypnotherapy.com.au
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Mind and Soul Hypnotherapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
