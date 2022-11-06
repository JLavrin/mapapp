import express from 'express'
import { api } from './api.js'

const router = express.Router()

router.use('/api', api)

router.use('*', (req, res) => {
	res
		.status(404)
		.json({
			status: '404',
			error: 'Request does not include /api prefix.'
		})
})

export {
	router
}