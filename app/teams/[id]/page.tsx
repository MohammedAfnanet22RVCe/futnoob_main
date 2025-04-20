import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Users, Trophy, TrendingUp, TrendingDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PlayerCard from "@/components/player-card"
import { teams, players } from "@/lib/data"

export default function TeamPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data from an API
  const team = teams.find((t) => t.id === params.id) || teams[0]
  const teamPlayers = players.filter((p) => p.teamId === team.id)

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link href="/teams" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Teams
        </Link>

        {/* Team Header */}
        <div className="bg-gray-900 rounded-lg overflow-hidden mb-8">
          <div className="h-48 bg-gradient-to-r from-emerald-900 to-gray-800 relative">
            <div className="absolute inset-0 opacity-20 bg-pattern" />
            <div className="absolute bottom-0 left-0 p-6 flex items-end">
              <div className="bg-gray-900 p-2 rounded-lg mr-4">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt={team.name}
                  width={80}
                  height={80}
                  className="rounded"
                />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">{team.name}</h1>
                <p className="text-gray-300">{team.league}</p>
              </div>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-400 text-sm mb-1">Transfer Budget</p>
              <p className="text-xl font-bold text-white">{team.transferBudget}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-400 text-sm mb-1">Wage Budget</p>
              <p className="text-xl font-bold text-white">{team.wageBudget}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-400 text-sm mb-1">Facilities</p>
              <p className="text-xl font-bold text-white">{team.facilities}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-400 text-sm mb-1">Board Expectations</p>
              <p className="text-xl font-bold text-white">{team.expectations}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="bg-gray-800 border-b border-gray-700 w-full justify-start rounded-none p-0">
            <TabsTrigger
              value="overview"
              className="rounded-none data-[state=active]:bg-gray-900 data-[state=active]:text-emerald-400 py-3 px-6"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="tactics"
              className="rounded-none data-[state=active]:bg-gray-900 data-[state=active]:text-emerald-400 py-3 px-6"
            >
              Tactics
            </TabsTrigger>
            <TabsTrigger
              value="youth"
              className="rounded-none data-[state=active]:bg-gray-900 data-[state=active]:text-emerald-400 py-3 px-6"
            >
              Youth Academy
            </TabsTrigger>
            <TabsTrigger
              value="transfers"
              className="rounded-none data-[state=active]:bg-gray-900 data-[state=active]:text-emerald-400 py-3 px-6"
            >
              Transfer Targets
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4 text-white">Team Overview</h2>
                <p className="text-gray-300 mb-6">{team.description}</p>

                {/* SWOT Analysis */}
                <h3 className="text-xl font-bold mb-4 text-white">SWOT Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-emerald-900/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center text-emerald-400">
                      <TrendingUp className="mr-2 h-5 w-5" /> Strengths
                    </h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {team.strengths.map((strength, i) => (
                        <li key={i}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-900/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center text-red-400">
                      <TrendingDown className="mr-2 h-5 w-5" /> Weaknesses
                    </h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {team.weaknesses.map((weakness, i) => (
                        <li key={i}>{weakness}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-900/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center text-blue-400">
                      <Trophy className="mr-2 h-5 w-5" /> Opportunities
                    </h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {team.opportunities.map((opportunity, i) => (
                        <li key={i}>{opportunity}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-900/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center text-amber-400">
                      <Users className="mr-2 h-5 w-5" /> Threats
                    </h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {team.threats.map((threat, i) => (
                        <li key={i}>{threat}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg h-fit">
                <h3 className="text-xl font-bold mb-4 text-white">Key Players</h3>
                <div className="space-y-4">
                  {teamPlayers.slice(0, 3).map((player) => (
                    <div key={player.id} className="flex items-center p-3 bg-gray-800 rounded-lg">
                      <div className="w-12 h-12 bg-gray-700 rounded-full mr-3 flex items-center justify-center text-lg">
                        {player.position}
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{player.name}</h4>
                        <p className="text-sm text-gray-400">{player.role}</p>
                      </div>
                      <div className="ml-auto">
                        <span className="bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded text-sm">
                          {player.rating}
                        </span>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full border-emerald-600 text-emerald-400 hover:bg-emerald-950">
                    <Link href={`/teams/${team.id}/squad`}>View Full Squad</Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tactics" className="pt-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Recommended Tactics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.tactics.map((tactic, i) => (
                <div key={i} className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-white">{tactic.name}</h3>
                  <p className="text-gray-300 mb-4">{tactic.description}</p>
                  <div className="bg-gray-800 p-4 rounded-lg mb-4">
                    <h4 className="font-bold mb-2 text-white">Formation</h4>
                    <p className="text-gray-300">{tactic.formation}</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-white">Key Instructions</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {tactic.instructions.map((instruction, j) => (
                        <li key={j}>{instruction}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="youth" className="pt-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Youth Academy</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-gray-900 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Academy Overview</h3>
                  <p className="text-gray-300 mb-4">{team.youthAcademy.overview}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-white">Facilities Rating</h4>
                      <p className="text-gray-300">{team.youthAcademy.facilities}</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-white">Youth Recruitment</h4>
                      <p className="text-gray-300">{team.youthAcademy.recruitment}</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-white">Development Strategy</h3>
                <div className="bg-gray-900 p-6 rounded-lg">
                  <p className="text-gray-300 mb-4">{team.youthAcademy.strategy}</p>
                  <h4 className="font-bold mb-2 text-white">Key Development Tips</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {team.youthAcademy.tips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Promising Youngsters</h3>
                <div className="space-y-4">
                  {team.youthAcademy.prospects.map((prospect, i) => (
                    <div key={i} className="bg-gray-900 p-4 rounded-lg">
                      <h4 className="font-bold text-white flex items-center justify-between">
                        {prospect.name}
                        <span className="bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded text-sm">
                          {prospect.age} years
                        </span>
                      </h4>
                      <p className="text-sm text-gray-400 mb-2">{prospect.position}</p>
                      <p className="text-gray-300 text-sm">{prospect.potential}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="transfers" className="pt-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Recommended Transfer Targets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {players.slice(0, 6).map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
