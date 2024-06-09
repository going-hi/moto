import { useAppQuery } from '@/shared'
import { getReviews } from '../../api'
import type { TGetReviewsDto } from '../../model'

export const useGetReviews = () =>
	useAppQuery<TGetReviewsDto>({
		queryKey: ['reviews'],
		queryFn: getReviews
	})
