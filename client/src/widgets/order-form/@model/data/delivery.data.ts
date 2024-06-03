import type { TOrderFormField, TCreateOrderFields } from '../types'

export const orderFormDeliveryDataItemsArr: TOrderFormField<TCreateOrderFields>[] =
	[
		{
			name: 'postIndex',
			placeholder: 'Почтовый индекс',
			type: 'text',
			required: false
		},
		{
			name: 'district',
			placeholder: 'Район',
			type: 'text',
			required: false
		},
		{
			name: 'region',
			placeholder: 'Регион',
			type: 'text',
			required: false
		},
		{
			name: 'street',
			placeholder: 'Улица',
			type: 'text',
			required: false
		},
		{
			name: 'city',
			placeholder: 'Город',
			type: 'text',
			required: false
		},
		{
			name: 'home',
			placeholder: 'Дом',
			type: 'text',
			required: false
		},
		{
			name: 'flat',
			placeholder: 'Квартира',
			type: 'text',
			required: false
		}
	]
