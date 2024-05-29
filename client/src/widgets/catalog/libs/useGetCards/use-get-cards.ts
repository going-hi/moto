import { useAppQuery } from '@/shared'

import { getCards } from '../../api'
import { TCardsDto } from '../../model'

export const useGetCards = () =>
	useAppQuery<TCardsDto>({ queryFn: getCards, queryKey: ['catalog/cards'] })
