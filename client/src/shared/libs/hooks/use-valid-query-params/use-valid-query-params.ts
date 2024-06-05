import { useSearchParams } from 'react-router-dom'
import { ZodType } from 'zod'

export const useValidQueryParams = <
	P extends Record<string, ZodType<any, any, any>> // eslint-disable-line @typescript-eslint/no-explicit-any
>(
	body: P
) => {
	const [searchParams] = useSearchParams()

	const res: Record<string, unknown> = {}

	for (const key of Object.keys(body)) {
		const schema = body[key]

		const { success, data } = schema.safeParse(searchParams.get(key))

		if (success) {
			res[key] = data
		}
	}

	return res
}
