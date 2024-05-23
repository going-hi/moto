import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import { Typography } from '../typography'

const { Text } = Typography

export type TSwitchOption = {
	label: string
	value: string
}

export const Switch = ({
	options,
	activeValue,
	setActiveValue,
	className
}: {
	options: [TSwitchOption, TSwitchOption]
	activeValue: string
	setActiveValue: Dispatch<SetStateAction<string>>
	className?: string
}) => {
	return (
		<div className={clsx('w-full flex border-black border', className)}>
			{options.map(({ value, label }) => (
				<div
					onClick={() => setActiveValue(value)}
					className={clsx(
						'basis-[50%] cursor-pointer select-none pt-[5px]',
						activeValue === value ? 'bg-black' : 'bg-beige'
					)}
					key={value}
				>
					<Text
						className={clsx(
							'font-bold bebas text-[26px] -tracking-2per text-center leading-[26px]',
							activeValue === value ? 'text-beige' : 'text-black'
						)}
					>
						{label}
					</Text>
				</div>
			))}
		</div>
	)
}
