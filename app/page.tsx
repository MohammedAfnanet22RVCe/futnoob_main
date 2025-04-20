import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import TeamCard from "@/components/team-card"
import { teams } from "@/lib/data"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950 z-10" />
        <div
          className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-emerald-400">
            Master the <span className="text-white">Beautiful Game</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8 text-gray-300">
            Comprehensive guides, tactics, and player insights to dominate in Football Manager
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/teams">Explore Teams</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-400 hover:bg-emerald-950">
              <Link href="/players">Player Database</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-white">Featured Teams</h2>
            <Link href="/teams" className="text-emerald-400 hover:text-emerald-300 flex items-center">
              View All Teams <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.slice(0, 6).map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Search */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Find Your Perfect Player</h2>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search players by name, position, or attributes..."
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700">
              <Link href="/players">Advanced Search</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Guides */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-white">Latest Manager Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-emerald-900/20 transition-all duration-300"
              >
                <div className="h-48 bg-gray-700 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-70" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-emerald-600 text-white px-2 py-1 rounded text-sm">Tactics</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Mastering the Gegenpress</h3>
                  <p className="text-gray-300 mb-4">
                    Learn how to implement an effective high-pressing system with any team.
                  </p>
                  <Link href="#" className="text-emerald-400 hover:text-emerald-300">
                    Read Guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-r from-emerald-900 to-gray-800 rounded-xl p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Stay Ahead of the Game</h2>
              <p className="text-gray-300 mb-6">
                Get the latest tactics, player recommendations, and manager guides delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <Button className="bg-emerald-600 hover:bg-emerald-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
