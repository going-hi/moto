import { TEditProfileInfo } from '@/features/edit-profile'
import type { TFormField } from '@/shared'

type TEditInfoFields = keyof TEditProfileInfo

export const editInfoFieldsArr: TFormField<TEditInfoFields>[] = [
	{
		label: 'Имя',
		required: true,
		name: 'name',
		placeholder: 'Имя',
		type: 'text'
	},
	{
		label: 'Фамилия',
		required: true,
		name: 'surname',
		placeholder: 'Фамилия',
		type: 'text'
	},
	{
		label: 'Почта',
		required: true,
		name: 'email',
		placeholder: 'Почта',
		type: 'text'
	},
	{
		label: 'Телефон',
		required: true,
		name: 'phone',
		placeholder: 'Телефон',
		type: 'text'
	}
]
