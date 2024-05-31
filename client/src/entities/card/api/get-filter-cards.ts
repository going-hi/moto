import { $api } from '@/shared'
import type { TGetFilterCards } from '../model'

export const getFilterCards = (body: TGetFilterCards) =>
	$api.get('/product/filter', { params: { ...body } })
