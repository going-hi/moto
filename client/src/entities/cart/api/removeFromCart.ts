import { $api } from '@/shared'

export const removeFromCart = (id: number) => $api.delete(`/basket/${id}`)
