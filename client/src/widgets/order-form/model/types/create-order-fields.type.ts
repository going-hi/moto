import { TCreateOrder } from '@/entities/order'

export type TCreateOrderFields = keyof Omit<TCreateOrder, 'confirmRules'>
