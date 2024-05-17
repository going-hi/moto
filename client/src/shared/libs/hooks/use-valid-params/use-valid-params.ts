import { useParams } from 'react-router-dom'
import { ZodType } from 'zod'

export const useValidParams = <
	P extends Record<string, ZodType<any, any, any>> // eslint-disable-line @typescript-eslint/no-explicit-any
>(
	body: P
) => {
	const params = useParams()

	const res: Record<string, string> = {}

	for (const key of Object.keys(body)) {
		const schema = body[key]
		const { data, success } = schema.safeParse(params[key])

		if (success) {
			res[key] = data
		}
	}

	return res
}
