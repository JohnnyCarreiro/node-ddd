import { LastRankingLoader } from '@domain/useCases'
import { Controller, HttpResponse, serverError, success } from '@presentation/contracts'
import { RankingScoreViewModel } from '@presentation/view-models'

export class LoadLastRanginkController implements Controller {
  constructor (private readonly lastRankingLoader: LastRankingLoader) {}

  async handle (): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const ranking = await this.lastRankingLoader.load()

      return success(RankingScoreViewModel.mapColection(ranking))
    } catch (error) {
      return serverError(error)
    }
  }
}
