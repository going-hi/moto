import { useMutation, type UseMutationOptions } from '@tanstack/react-query'
import type { AxiosError, AxiosResponse } from 'axios'

export const useAppMutation = <Ctx>(
	options: UseMutationOptions<
		AxiosResponse<unknown, unknown>,
		AxiosError,
		Ctx,
		unknown
	>
) => {
	const mutate = useMutation(options)

	const error = mutate.error as AxiosError<{ message: string }>

	Object.assign(mutate, {
		error: mutate.error
			? {
					...mutate.error,
					message:
						error?.response?.data.message ?? 'Неожиданная ошибка'
				}
			: null
	})

	return mutate
}
