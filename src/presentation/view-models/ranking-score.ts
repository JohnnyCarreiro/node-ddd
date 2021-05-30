import { RankingScoreModel } from '@data/models'

export class RankingScoreViewModel {
  player!: Player
  score!: number
  matchDate!: string
  heroes!: Hero[]

  static map (entity: RankingScoreModel): RankingScoreViewModel {
    return {
      ...entity,
      matchDate: entity.matchDate.toISOString()
    }
  }

  static mapColection (entities: RankingScoreModel[]): RankingScoreViewModel[] {
    return entities.map(entity => RankingScoreViewModel.map(entity))
  }
}
type Player = {
  name: string
  nationality: string
}
type Hero = {
  name: string
  level: number
}
