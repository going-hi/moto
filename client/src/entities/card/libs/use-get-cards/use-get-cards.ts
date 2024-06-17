import { useAppQuery } from '@/shared'
import { getCards } from '../../api'
import { type TCardsDto, type TGetCards } from '../../model'

export const useGetCards = (options: TGetCards = {}, filters?: string) => {
	return useAppQuery<TCardsDto>({
		queryFn: () => getCards(options, filters),
		queryKey: ['catalog/cards', filters, options],
		retry: false,
		throwOnError: false
	})
}
