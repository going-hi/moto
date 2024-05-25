import { TRegistration } from '@/features/auth'
import type { TAuthField } from '../types'

type TRegistrationFields = keyof TRegistration

export const registrationFieldsArr: TAuthField<TRegistrationFields>[] = [
	{
		label: 'Введите ваше имя',
		required: true,
		name: 'name',
		placeholder: 'Имя',
		type: 'text'
	},
	{
		label: 'Введите вашу фамилию',
		required: true,
		name: 'surname',
		placeholder: 'Фамилия',
		type: 'text'
	},
	{
		label: 'Введите вашу почту',
		required: true,
		name: 'email',
		placeholder: 'Почта',
		type: 'text'
	},
	{
		label: 'Введите ваш номер телефона',
		required: true,
		name: 'phone',
		placeholder: 'Телефон',
		type: 'text'
	},
	{
		label: 'Введите пароль',
		required: true,
		name: 'password',
		placeholder: 'Пароль',
		type: 'password'
	},
	{
		label: 'Подтвердите пароль',
		required: true,
		name: 'confirmPassword',
		placeholder: 'Пароль',
		type: 'password'
	}
]
