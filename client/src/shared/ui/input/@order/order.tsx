import clsx from 'clsx'
import { forwardRef, useId } from 'react'
import { useFormContext } from 'react-hook-form'
import { type TFormError } from '@/shared'
import { Typography } from '../../typography'
import type { TInputProps } from '../@model'

const { Text } = Typography

// eslint-disable-next-line react/display-name
export const OrderInput = forwardRef<HTMLInputElement, TInputProps>(
	({ className, classNameBody, name, value, onChange, ...props }, ref) => {
		const id = useId()

		const {
			formState: { errors }
		} = useFormContext()

		const err = (name ? errors[name] : {}) as TFormError | undefined

		return (
			<div className={className}>
				<input
					{...props}
					id={id}
					ref={ref}
					onChange={onChange}
					value={value}
					className={clsx(
						'placeholder:text-[#9B978B] bg-beige p-[10px] w-full border-[#41403B] border',
						classNameBody
					)}
				/>
				{err?.message && (
					<Text className='text-red-700'>{err.message}</Text>
				)}
			</div>
		)
	}
)
