import { Request, Response } from 'express'

import { Controller } from '@presentation/contracts'

export const routeAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle()

    res.status(httpResponse.statusCode).json(httpResponse.data)
  }
}
