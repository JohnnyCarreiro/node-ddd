import express from 'express'
import 'dotenv/config'

import { setupRoutes } from '@main/config/routes'

const app = express()
setupRoutes(app)

export default app
