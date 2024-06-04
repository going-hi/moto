import { InputHTMLAttributes } from 'react'

export type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	classNameBody?: string
}
