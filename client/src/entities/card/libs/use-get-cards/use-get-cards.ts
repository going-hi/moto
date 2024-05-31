import { useAppQuery } from '@/shared'
import { getCards } from '../../api'
import { type TCardsDto, type TGetCards } from '../../model'

export const useGetCards = (options: TGetCards = {}) =>
	useAppQuery<TCardsDto>({
		queryFn: () => getCards(options),
		queryKey: ['catalog/cards'],
		retry: false,
		throwOnError: false
	})
