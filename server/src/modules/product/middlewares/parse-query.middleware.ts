import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		const query = req.query

		if (query.filters) {
			try {
				//@ts-expect-error to pt
				req.query.filters = JSON.parse(decodeURI(query.filters))
				console.log(query.filters, 'fil')
			} catch (e) {
				console.error(e)
				return next()
			}
			return next()
		}
		next()
	}
}
