import { TFormField } from '@/shared'

export type TOrderFormField<T> = Omit<TFormField<T>, 'label'>
