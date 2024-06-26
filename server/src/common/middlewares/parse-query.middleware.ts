import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class ParseQueryMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		const query = req.query
		if (query.filters) {
			try {
				// @ts-expect-error pox wave
				req.query.filters = JSON.parse(decodeURI(query.filters))
			} catch (e) {
				console.error(e)
				return next()
			}
			return next()
		}
		next()
	}
}
