import type { TLogin } from '@/features/auth'
import type { TAuthField } from '../types'

type TLoginFields = keyof TLogin

export const loginFieldsArr: TAuthField<TLoginFields>[] = [
	{
		label: 'Введите почту',
		required: true,
		name: 'email',
		placeholder: 'Почта',
		type: 'text'
	},
	{
		label: 'Введите пароль',
		required: true,
		name: 'password',
		placeholder: 'Пароль',
		type: 'password'
	}
]