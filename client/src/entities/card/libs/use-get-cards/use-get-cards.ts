import { useAppQuery } from '@/shared'
import { getCards } from '../../api'
import { type TCardsDto, type TGetCards } from '../../model'

export const useGetCards = (options: TGetCards = {}, filters?: string) =>
	useAppQuery<TCardsDto>({
		queryFn: () => getCards(options, filters),
		queryKey: ['catalog/cards', filters],
		retry: false,
		throwOnError: false
	})
