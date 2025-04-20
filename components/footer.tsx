import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <div className="bg-emerald-600 text-white p-1.5 rounded mr-2">
                <span className="font-bold text-sm">FM</span>
              </div>
              <span className="font-bold text-xl text-white">Guide</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Your ultimate resource for Football Manager tactics, team guides, and player recommendations.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/teams" className="text-gray-400 hover:text-emerald-400 text-sm">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="/players" className="text-gray-400 hover:text-emerald-400 text-sm">
                  Players
                </Link>
              </li>
              <li>
                <Link href="/tactics" className="text-gray-400 hover:text-emerald-400 text-sm">
                  Tactics
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-emerald-400 text-sm">
                  Guides
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-emerald-400 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-400 hover:text-emerald-400 text-sm">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-emerald-400 text-sm">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-emerald-400 text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm">
                  YouTube
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-emerald-400 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} FM Guide. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-emerald-400 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-emerald-400 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
