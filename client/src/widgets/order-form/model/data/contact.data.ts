import type { TOrderFormField } from '../types'
import type { TCreateOrderFields } from '../types'

export const orderFormContactDataItemsArr: TOrderFormField<TCreateOrderFields>[] =
	[
		{
			name: 'name',
			placeholder: 'Имя',
			type: 'text',
			required: true
		},
		{
			name: 'email',
			placeholder: 'Почта',
			type: 'text',
			required: false
		},
		{
			name: 'patronymic',
			placeholder: 'Отчество',
			type: 'text',
			required: false
		},
		{
			name: 'phone',
			placeholder: 'Телефон',
			type: 'text',
			required: true
		},
		{
			name: 'surname',
			placeholder: 'Фамилия',
			type: 'text',
			required: true
		}
	]
