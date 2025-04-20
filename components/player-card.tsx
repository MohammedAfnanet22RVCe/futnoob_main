import Link from "next/link"
import { Card } from "@/components/ui/card"

interface PlayerCardProps {
  player: {
    id: string
    name: string
    position: string
    age: number
    nationality: string
    team: string
    teamId: string
    value: string
    wage: string
    rating: string
    role: string
    attributes: {
      [key: string]: number
    }
  }
}

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <Card className="overflow-hidden bg-gray-900 border-gray-800 hover:border-emerald-600 transition-all duration-300">
      <div className="p-4 flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-lg font-bold">
          {player.position}
        </div>
        <div>
          <h3 className="font-bold text-white">{player.name}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>{player.age} years</span>
            <span>•</span>
            <span>{player.nationality}</span>
          </div>
          <Link href={`/teams/${player.teamId}`} className="text-xs text-emerald-400 hover:underline">
            {player.team}
          </Link>
        </div>
        <div className="ml-auto text-right">
          <div className="bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded text-sm font-bold mb-1">
            {player.rating}
          </div>
          <div className="text-xs text-gray-400">{player.role}</div>
        </div>
      </div>
      <div className="bg-gray-800 p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <span className="text-xs text-gray-400">Value</span>
            <p className="text-white font-medium">{player.value}</p>
          </div>
          <div>
            <span className="text-xs text-gray-400">Wage</span>
            <p className="text-white font-medium">{player.wage}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {Object.entries(player.attributes)
            .slice(0, 6)
            .map(([key, value]) => (
              <div key={key} className="bg-gray-900 p-2 rounded text-center">
                <div className="text-sm font-bold text-white">{value}</div>
                <div className="text-xs text-gray-400">{key}</div>
              </div>
            ))}
        </div>
      </div>
    </Card>
  )
}
