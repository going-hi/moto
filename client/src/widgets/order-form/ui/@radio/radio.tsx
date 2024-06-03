import clsx from 'clsx'
import { ReactNode, useId } from 'react'
import { Radio, Typography } from '@/shared'

const { Text } = Typography

export const OrderFormRadio = ({
	name,
	className,
	children
}: {
	name: string
	className?: string
	children: ReactNode
}) => {
	const id = useId()

	return (
		<label
			htmlFor={id}
			className={clsx('flex cursor-pointer items-center', className)}
		>
			<Radio variant='primary' id={id} name={name} className='mr-[7px]' />
			<Text>{children}</Text>
		</label>
	)
}
