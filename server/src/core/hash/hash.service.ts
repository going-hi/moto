import { Injectable } from '@nestjs/common'
import { compare, genSalt, hash } from 'bcrypt'

@Injectable()
export class HashService {
	async compare(str: string, hash: string) {
		return await compare(str, hash)
	}

	async hash(str: string) {
		const salt = await genSalt()
		return hash(str, salt)
	}
}
