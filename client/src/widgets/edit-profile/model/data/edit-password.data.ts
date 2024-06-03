import { TEditPassword } from '@/features/edit-profile'
import { TFormField } from '@/shared'

type TEditPasswordFields = keyof TEditPassword

export const editPasswordFieldsArr: TFormField<TEditPasswordFields>[] = [
	{
		label: 'Введите новый пароль',
		required: true,
		name: 'newPassword',
		placeholder: 'Новый пароль',
		type: 'password'
	},
	{
		label: 'Повторите пароль',
		required: true,
		name: 'confirmPassword',
		placeholder: 'Новый пароль',
		type: 'password'
	},
	{
		label: 'Введите старый пароль',
		required: true,
		name: 'password',
		placeholder: 'Старый пароль',
		type: 'password'
	}
]
