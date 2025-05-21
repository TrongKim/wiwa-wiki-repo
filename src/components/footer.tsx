import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1f293780] border-[#374151] text-white w-full">
      <div className="mx-auto px-20 py-12 max-[500px]:px-6 max-w-[1100px]">
        {/* Top section with logo, links and newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">GameGuides</h2>
            <p className="text-gray-300 text-sm">
              Your ultimate resource for character guides, strategies, and gaming tips.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Characters
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Tier Lists
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Build Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Game Updates
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">Subscribe to our newsletter for the latest guides and updates.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-[#1A3A62] border-[#2A4A72] text-white placeholder:text-gray-400"
              />
              <Button className="bg-[#3A5A82] hover:bg-[#4A6A92] text-white border-none">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1A3A62] my-6"></div>

        {/* Bottom section with copyright and additional links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} GameGuides. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 max-[350px]:flex-wrap">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
