import clsx from 'clsx'
import { ReactNode, forwardRef, useId } from 'react'
import { useWatch } from 'react-hook-form'
import { Radio, Typography } from '@/shared'

const { Text } = Typography

// eslint-disable-next-line react/display-name
export const OrderFormRadio = forwardRef<
	HTMLInputElement,
	{
		name: string
		className?: string
		children: ReactNode
		value: string
		onChange: (e: unknown) => void
	}
>(({ className, children, ...props }, ref) => {
	const id = useId()

	const value = useWatch({ name: props.name })

	return (
		<label
			htmlFor={id}
			className={clsx('flex cursor-pointer items-center', className)}
		>
			<Radio
				ref={ref}
				variant='primary'
				id={id}
				{...props}
				className='mr-[7px]'
				isChecked={value === props.value}
			/>
			<Text>{children}</Text>
		</label>
	)
})
