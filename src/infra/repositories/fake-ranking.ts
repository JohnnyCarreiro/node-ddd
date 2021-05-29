import { LoadLastRanginkRepository } from '@data/contracts'
import { RankingScore } from '@domain/entities'
import { ranking } from '@infra/dataSources'

export class FakeRankingRepository implements LoadLastRanginkRepository {
  async loadLastRanking (): Promise<RankingScore[]> {
    return ranking.map(item => ({
      player: {
        name: item.user.name,
        nationality: item.user.country
      },
      score: item.score,
      matchDate: new Date(item.date),
      heroes: item.heroes
    }))
  }
}
