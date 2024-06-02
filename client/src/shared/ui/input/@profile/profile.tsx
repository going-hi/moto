import clsx from 'clsx'
import { forwardRef, useId, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Icon, type TFormError } from '@/shared'
import { Typography } from '../../typography'
import type { TInputProps } from '../@model'

const { Text } = Typography

// eslint-disable-next-line react/display-name
export const ProfileInput = forwardRef<HTMLInputElement, TInputProps>(
	(
		{
			label,
			className,
			classNameBody,
			name,
			value,
			onChange,
			disabled = false,
			...props
		},
		ref
	) => {
		const id = useId()

		const [isDisabled, setIsDisabled] = useState<boolean>(disabled)

		const {
			formState: { errors }
		} = useFormContext()

		const err = (name ? errors[name] : {}) as TFormError | undefined

		return (
			<div className={className}>
				<div className='flex justify-between mb-[5px]'>
					<label
						htmlFor={id}
						className='text-[18px] font-medium -tracking-2per'
					>
						{label}
					</label>
					{props.required &&
						!!err &&
						((value ?? '') as string).length === 0 && (
							<Text className='text-red-700'>
								Заполните это поле
							</Text>
						)}
				</div>
				<div className='relative'>
					<input
						{...props}
						id={id}
						ref={ref}
						onChange={onChange}
						value={value}
						disabled={isDisabled}
						className={clsx(
							'placeholder:text-[#9B978B] bg-beige px-[10px] py-[12px] w-full border-[#41403B] border',
							classNameBody
						)}
					/>
					{isDisabled && (
						<Icon
							onClick={() => setIsDisabled(false)}
							className='w-[31px] h-[31px] absolute top-[50%] -translate-y-[50%] right-[5px] cursor-pointer p-[5px]'
							name='Pencil'
						/>
					)}
				</div>

				{err?.message && (
					<Text className='text-red-700'>{err.message}</Text>
				)}
			</div>
		)
	}
)
