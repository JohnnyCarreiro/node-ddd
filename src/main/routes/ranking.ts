import { Router } from 'express'

import { makeLoadLastRankingController } from '@main/factories'
import { routeAdapter } from '@main/adapters'

export default (router: Router): void => {
  router.get('/ranking/last', routeAdapter(makeLoadLastRankingController()))
}
