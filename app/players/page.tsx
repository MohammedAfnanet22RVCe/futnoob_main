import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import PlayerCard from "@/components/player-card"
import { players } from "@/lib/data"

export default function PlayersPage() {
  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-white">Player Database</h1>

        {/* Search and Filters */}
        <div className="mb-10 bg-gray-900 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search players by name..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              <Filter className="mr-2 h-4 w-4" /> Advanced Filters
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            <select className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>All Positions</option>
              <option>GK</option>
              <option>DEF</option>
              <option>MID</option>
              <option>FWD</option>
            </select>
            <select className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>All Ages</option>
              <option>Under 21</option>
              <option>21-25</option>
              <option>26-30</option>
              <option>Over 30</option>
            </select>
            <select className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>All Values</option>
              <option>Under $5M</option>
              <option>$5M-$20M</option>
              <option>$20M-$50M</option>
              <option>Over $50M</option>
            </select>
            <select className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>All Ratings</option>
              <option>90+</option>
              <option>80-89</option>
              <option>70-79</option>
              <option>Below 70</option>
            </select>
            <select className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>All Leagues</option>
              <option>Premier League</option>
              <option>La Liga</option>
              <option>Bundesliga</option>
              <option>Serie A</option>
              <option>Ligue 1</option>
            </select>
          </div>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center">
          <div className="flex">
            <Button
              variant="outline"
              size="sm"
              className="rounded-r-none border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-none border-l-0 border-r-0 border-gray-700 bg-gray-800 text-white"
            >
              1
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-none border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              2
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-none border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              3
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-l-none border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
