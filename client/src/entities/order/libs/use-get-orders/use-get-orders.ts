import { useAppQuery } from '@/shared'
import { getOrders } from '../../api'
import type { TGetOrdersDto } from '../../model'

export const useGetOrders = () =>
	useAppQuery<TGetOrdersDto>({
		queryKey: ['user/my-orders'],
		queryFn: getOrders
	})
