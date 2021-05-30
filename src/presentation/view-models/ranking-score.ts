export type RankingScoreViewModel = {
  player: Player
  score: number
  matchDate: string
  heroes: Hero[]
}
type Player = {
  name: string
  nationality: string
}
type Hero = {
  name: string
  level: number
}
