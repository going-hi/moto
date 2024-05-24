import { useMutation, type UseMutationOptions } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

export const useAppMutation = <Ctx, Res>(
	options: UseMutationOptions<Res, AxiosError, Ctx, unknown>
) => {
	const mutate = useMutation(options)

	const error = mutate.error as AxiosError<{ message: string }>

	return {
		...mutate,
		error: mutate.error
			? {
					...mutate.error,
					message:
						error?.response?.data?.message ?? 'Неожиданная ошибка'
				}
			: null
	}
}
