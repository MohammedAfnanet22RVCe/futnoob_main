import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface TeamCardProps {
  team: {
    id: string
    name: string
    league: string
    transferBudget: string
    difficulty: string
    image?: string
    description: string
  }
}

export default function TeamCard({ team }: TeamCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-emerald-900/50 text-emerald-400"
      case "medium":
        return "bg-amber-900/50 text-amber-400"
      case "hard":
        return "bg-red-900/50 text-red-400"
      case "insane":
        return "bg-purple-900/50 text-purple-400"
      default:
        return "bg-gray-900/50 text-gray-400"
    }
  }

  return (
    <Link href={`/teams/${team.id}`}>
      <Card className="overflow-hidden bg-gray-900 border-gray-800 hover:border-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/20">
        <div className="h-40 bg-gray-800 relative">
          <Image
            src={team.image || "/placeholder.svg?height=160&width=320"}
            alt={team.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div>
              <h3 className="font-bold text-white text-lg">{team.name}</h3>
              <p className="text-gray-300 text-sm">{team.league}</p>
            </div>
            <Badge className={`${getDifficultyColor(team.difficulty)}`}>{team.difficulty}</Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-3">
            <div>
              <span className="text-xs text-gray-400">Transfer Budget</span>
              <p className="text-white font-medium">{team.transferBudget}</p>
            </div>
            <span className="text-emerald-400 text-sm">View Guide →</span>
          </div>
          <p className="text-gray-400 text-sm line-clamp-2">{team.description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
