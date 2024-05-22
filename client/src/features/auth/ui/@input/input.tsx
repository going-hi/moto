import { InputHTMLAttributes, forwardRef, useId } from 'react'
import { useFormContext } from 'react-hook-form'
import { Typography, type TFormError } from '@/shared'
import { TLogin, TLoginFields } from '../../model'

const { Text } = Typography

// eslint-disable-next-line react/display-name
export const AuthInput = forwardRef<
	HTMLInputElement,
	InputHTMLAttributes<HTMLInputElement> & { label: string }
>(
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	({ label, onChange, value, name, ...props }, ref) => {
		const id = useId()

		const {
			formState: { errors: formErrors }
		} = useFormContext<TLogin>()

		const errors = (name ? formErrors[name as TLoginFields] : {}) as
			| TFormError
			| undefined

		return (
			<div>
				<div className='flex justify-between mb-[10px]'>
					<label className='uppercase font-medium' htmlFor={id}>
						{label}
					</label>
					{props.required &&
						!!errors &&
						((value ?? '') as string).length === 0 && (
							<Text className='text-red-700'>
								Заполните это поле
							</Text>
						)}
				</div>
				<input
					ref={ref}
					spellCheck={false}
					className='px-[15px] py-[20px] w-full bg-transparent border-gray-dark border'
					placeholder='Имя'
					id={id}
					onChange={onChange}
					{...props}
				/>
				{errors?.message && (
					<Text className='text-red-700'>{errors.message}</Text>
				)}
			</div>
		)
	}
)
