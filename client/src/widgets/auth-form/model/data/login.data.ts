import type { TLogin } from '@/features/auth-user'
import type { TFormField } from '@/shared'

type TLoginFields = keyof TLogin

export const loginFieldsArr: TFormField<TLoginFields>[] = [
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
