import { EnvSchema } from '../model'

class EnvConfig {
	private env: { [key: string]: string | undefined } = {}

	constructor() {
		const env = import.meta.env

		const { success, error, data } = EnvSchema.safeParse(env)

		if (!success) {
			const errMessage = error.issues.reduce(
				(acc, i) => acc + i.message + ', ',
				''
			)
			throw new Error(errMessage.substring(0, errMessage.length - 2))
		}

		this.env = data
	}

	public getValue(name: string) {
		return this.env[name] ?? ''
	}
}

export const envConfig = new EnvConfig()
