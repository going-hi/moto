export type TFormField<T> = {
	label: string
	required?: boolean
	name: T
	placeholder: string
	type: 'text' | 'password'
}
