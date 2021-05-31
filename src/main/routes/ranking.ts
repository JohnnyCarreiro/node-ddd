import { Router } from 'express'

import { makeLoadLastRankingController } from '@main/factories'

export default (router: Router): void => {
  router.get('/ranking/last', async (req, res) => {
    const controller = makeLoadLastRankingController()
    const httpResponse = await controller.handle()

    res.status(httpResponse.statusCode).json(httpResponse.data)
  })
}
