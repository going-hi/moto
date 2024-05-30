import { $api } from '@/shared'
import type { TChangeCounterCart } from '../model'

export const changeCountCart = ({ id, count }: TChangeCounterCart) => {
	return $api.patch(`/basket/${id}`, { count })
}
