import { LoadLastRanginkRepository } from '@data/contracts'
import { RankingScore } from '@domain/entities'
import { RankingUnavailableError } from '@domain/errors'
import { LastRankingLoader } from '@domain/useCases'

export class LastRankingLoaderService implements LastRankingLoader {
  constructor (
    private readonly loadLastRanginkRepository: LoadLastRanginkRepository
  ) {}

  async load (): Promise<RankingScore[]> {
    if (new Date().getHours() > 22) {
      throw new RankingUnavailableError()
    }
    return await this.loadLastRanginkRepository.loadLastRanking()
  }
}
