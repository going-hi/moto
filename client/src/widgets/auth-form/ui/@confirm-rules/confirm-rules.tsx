import clsx from 'clsx'
import { forwardRef, useId } from 'react'
import { useFormContext, type ControllerRenderProps } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { TRegistration } from '@/features/auth'
import { Checkbox, Typography } from '@/shared'

const { Text } = Typography

// eslint-disable-next-line react/display-name
export const AuthConfirmRules = forwardRef<
	HTMLInputElement,
	{
		field: ControllerRenderProps<TRegistration, 'confirmRules'>
	}
>(({ field }, ref) => {
	const id = useId()

	const {
		formState: { errors }
	} = useFormContext<TRegistration>()

	const err = errors['confirmRules']

	return (
		<div className='flex justify-between items-center'>
			<label
				htmlFor={id}
				className='flex gap-x-[10px] items-center cursor-pointer select-none'
			>
				<Checkbox
					id={id}
					field={field}
					ref={ref}
					className={clsx(
						err?.type === 'custom' && 'border border-red-700'
					)}
				/>
				<Text>
					Даю согласие на обработку{' '}
					<Link to='/rules' className='underline'>
						Персональных данных
					</Link>
				</Text>
			</label>
			{err?.type === 'custom' && (
				<Text className='text-red-700 '>{err.message}</Text>
			)}
		</div>
	)
})
