import { Response, Request } from "express"
import axios from 'axios'

const healthCheck = (req: Request, res: Response) => {
	axios.get('http://localhost:5173', {
		validateStatus: (status) => status < 500
	})
		.then(() => {
			res.json({
				url: 'http://localhost:5173',
				status: 'ok'
			})
		})
		.catch(() => {
			res.json({
				url: 'http://localhost:5173',
				status: 'down'
			})
		})
}

export default healthCheck