import { AxiosError } from 'axios'

export const errorHandler = (e: unknown) => {
	if (e instanceof AxiosError) {
		const err = e as AxiosError<{ message: string }>
		return Promise.reject(
			err?.response?.data?.message ?? 'Неожиданная ошибка'
		)
	}

	return Promise.reject(e)
}
