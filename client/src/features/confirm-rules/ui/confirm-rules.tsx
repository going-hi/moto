import clsx from 'clsx'
import { forwardRef, useId } from 'react'
import { useFormContext, type ControllerRenderProps } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Checkbox, Typography } from '@/shared'

const { Text } = Typography

// eslint-disable-next-line react/display-name
export const ConfirmRules = forwardRef<
	HTMLInputElement,
	{
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		field: ControllerRenderProps<any, 'confirmRules'>
		className?: string
	}
>(({ field, className }, ref) => {
	const id = useId()

	const {
		formState: { errors }
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} = useFormContext<any>()

	const err = errors['confirmRules']

	return (
		<div className={clsx('flex justify-between items-center', className)}>
			<label
				htmlFor={id}
				className='flex gap-x-[10px] items-center cursor-pointer select-none text-[14px]'
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
					<Link to='/rules' className='underline text-[14px]'>
						Персональных данных
					</Link>
				</Text>
			</label>
			{err?.type === 'custom' && !!err?.message && (
				<Text className='text-red-700 '>{err.message as string}</Text>
			)}
		</div>
	)
})
