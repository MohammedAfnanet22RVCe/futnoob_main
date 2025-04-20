"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="bg-emerald-600 text-white p-1.5 rounded mr-2">
                <span className="font-bold text-sm">FM</span>
              </div>
              <span className="font-bold text-xl text-white">Guide</span>
            </Link>

            <nav className="hidden md:flex ml-10 space-x-8">
              <Link
                href="/"
                className={`text-sm font-medium ${isActive("/") ? "text-emerald-400" : "text-gray-300 hover:text-white"}`}
              >
                Home
              </Link>
              <Link
                href="/teams"
                className={`text-sm font-medium ${isActive("/teams") ? "text-emerald-400" : "text-gray-300 hover:text-white"}`}
              >
                Teams
              </Link>
              <Link
                href="/players"
                className={`text-sm font-medium ${isActive("/players") ? "text-emerald-400" : "text-gray-300 hover:text-white"}`}
              >
                Players
              </Link>
              <Link
                href="/tactics"
                className={`text-sm font-medium ${isActive("/tactics") ? "text-emerald-400" : "text-gray-300 hover:text-white"}`}
              >
                Tactics
              </Link>
              <Link
                href="/guides"
                className={`text-sm font-medium ${isActive("/guides") ? "text-emerald-400" : "text-gray-300 hover:text-white"}`}
              >
                Guides
              </Link>
            </nav>
          </div>

          <div className="flex items-center">
            {isSearchOpen ? (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-3 pr-10 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  autoFocus
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button className="p-1.5 text-gray-300 hover:text-white mr-2" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
              </button>
            )}

            <Button className="hidden md:inline-flex bg-emerald-600 hover:bg-emerald-700">Sign In</Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6 text-gray-300" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900 border-gray-800">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="text-lg font-medium text-gray-300 hover:text-white">
                    Home
                  </Link>
                  <Link href="/teams" className="text-lg font-medium text-gray-300 hover:text-white">
                    Teams
                  </Link>
                  <Link href="/players" className="text-lg font-medium text-gray-300 hover:text-white">
                    Players
                  </Link>
                  <Link href="/tactics" className="text-lg font-medium text-gray-300 hover:text-white">
                    Tactics
                  </Link>
                  <Link href="/guides" className="text-lg font-medium text-gray-300 hover:text-white">
                    Guides
                  </Link>
                  <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700">Sign In</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
