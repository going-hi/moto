type TFormErrorType = 'too_small' | 'invalid_type' | 'too_big' | 'custom'

export type TFormError = {
	message?: string
	type?: TFormErrorType
}
