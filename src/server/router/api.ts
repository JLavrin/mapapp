import express from 'express'
import healthCheck from '../utils/healthCheck.js'

const api = express.Router()

api.use('/app', healthCheck)



export {
	api
}