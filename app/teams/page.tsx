import { Search } from "lucide-react"
import TeamCard from "@/components/team-card"
import { teams } from "@/lib/data"

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-white">Manager Guide Hub</h1>

        {/* Search and Filters */}
        <div className="mb-10 bg-gray-900 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search teams..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>All Leagues</option>
                <option>Premier League</option>
                <option>La Liga</option>
                <option>Bundesliga</option>
                <option>Serie A</option>
                <option>Ligue 1</option>
              </select>
              <select className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>All Budgets</option>
                <option>High Budget</option>
                <option>Medium Budget</option>
                <option>Low Budget</option>
              </select>
            </div>
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </div>
  )
}
