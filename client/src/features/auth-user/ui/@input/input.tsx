import clsx from 'clsx'
import { InputHTMLAttributes, forwardRef, useId } from 'react'
import { useFormContext } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Typography, type TFormError } from '@/shared'
import { TLogin, TLoginFields } from '../../model'

const { Text } = Typography

// eslint-disable-next-line react/display-name
export const AuthInput = forwardRef<
	HTMLInputElement,
	Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> & {
		label: string
		value?: string | number | readonly string[] | boolean
		isForgot?: boolean
	}
>(
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	({ label, onChange, value, name, isForgot, className, ...props }, ref) => {
		const id = useId()

		const {
			formState: { errors: formErrors }
		} = useFormContext<TLogin>()

		const err = (name ? formErrors[name as TLoginFields] : {}) as
			| TFormError
			| undefined

		return (
			<div className={className}>
				<div className='flex justify-between mb-[10px]'>
					<label className='uppercase font-medium' htmlFor={id}>
						{label} {props.required && <span>*</span>}
					</label>
					{props.required &&
						!!err &&
						((value ?? '') as string).length === 0 && (
							<Text className='text-red-700'>
								Заполните это поле
							</Text>
						)}
					{isForgot && (
						<Link
							to='/auth/reset'
							className='uppercase font-medium -tracking-2per text-gray-dark dhover:hover:underline'
						>
							Забыли пароль?
						</Link>
					)}
				</div>
				<input
					ref={ref}
					spellCheck={false}
					className={clsx(
						'px-[15px] py-[20px] w-full bg-transparent border-gray-dark border placeholder:text-[#9B978B] dhover:hover:scale-[101%] duration-700',
						!!err?.message && 'border-red-700'
					)}
					id={id}
					onChange={onChange}
					{...props}
				/>
				{err?.message && (
					<Text className='text-red-700'>{err.message}</Text>
				)}
			</div>
		)
	}
)
