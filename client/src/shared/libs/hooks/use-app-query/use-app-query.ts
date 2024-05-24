import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useAppQuery = (
	options: UseQueryOptions<unknown, AxiosError, unknown>
) => {
	const query = useQuery(options)

	const error = query.error as AxiosError<{ message: string }>

	return {
		...query,
		error: query.error
			? {
					...query.error,
					message:
						error?.response?.data?.message ?? 'Неожиданная ошибка'
				}
			: null
	}
}
