import express from 'express'
import dotenv from 'dotenv'

import { router } from './router/index.js'

dotenv.config()

const PORT = process.env.SERVER_PORT || 3000
const URL = process.env.SERVER_URL || '127.0.0.1'

const app = express()

app.use(router)

app.listen(PORT, () => {
	console.log(`Map app server listening on port ${PORT}`)
})