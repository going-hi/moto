import { useAppQuery } from '@/shared'
import { getCard } from '../../api'
import type { TGetCardDto } from '../../model'

export const useGetCard = (id: number) =>
	useAppQuery<TGetCardDto>({
		queryKey: ['catalog/card'],
		queryFn: () => getCard(id),
		retry: false,
		throwOnError: false
	})
