import { LastRankingLoaderService } from '@data/services'
import { FakeRankingRepository } from '@infra/repositories'
import { LoadLastRanginkController } from '@presentation/controllers'
import { Controller } from '@presentation/contracts'

export const makeLoadLastRankingController = (): Controller => {
  const repository = new FakeRankingRepository()
  const loader = new LastRankingLoaderService(repository)
  return new LoadLastRanginkController(loader)
}
