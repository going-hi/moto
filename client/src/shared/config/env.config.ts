import { EnvSchema } from '../model'

class EnvConfig {
	private env: { [key: string]: string | undefined } = {}

	constructor() {
		const env = import.meta.env

		EnvSchema.parse(env)
		this.env = env
	}

	public getValue(name: string) {
		return this.env[name] ?? ''
	}
}

export const envConfig = new EnvConfig()
