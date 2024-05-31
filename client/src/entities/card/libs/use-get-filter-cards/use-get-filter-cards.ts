import { useAppQuery } from '@/shared'
import { getFilterCards } from '../../api'
import type { TCardsDto, TGetFilterCards } from '../../model'

export const useGetFilterCards = (body: TGetFilterCards) =>
	useAppQuery<TCardsDto>({
		queryFn: () => getFilterCards(body),
		queryKey: ['catalog/cards'],
		retry: false,
		throwOnError: false
	})
