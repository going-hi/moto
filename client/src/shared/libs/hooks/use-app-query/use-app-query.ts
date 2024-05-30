import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useAppQuery = <T>(
	options: UseQueryOptions<unknown, AxiosError, T>
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
