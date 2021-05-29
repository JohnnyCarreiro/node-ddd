import { RankingScoreModel } from '@data/models'

export interface LoadLastRanginkRepository {
  loadLastRanking: () => Promise<RankingScoreModel[]>
}
