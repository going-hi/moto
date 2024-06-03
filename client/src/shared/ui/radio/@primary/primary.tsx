import clsx from 'clsx'
import { useId } from 'react'
import type { TRadioProps } from '../@model'

export const PrimaryRadio = ({
	name,
	className,
	isChecked,
	id
}: TRadioProps) => {
	const generatedId = useId()

	// const ctx = useFormContext()

	return (
		<>
			<input
				type='radio'
				name={name}
				id={id ?? generatedId}
				className='hidden'
			/>
			<label
				htmlFor={id}
				className={clsx(
					'border-[#000000] border w-[20px] h-[20px] flex items-center justify-center rounded-[50%]',
					className
				)}
			>
				<span
					className={clsx(
						'p-[5px] bg-[#000] rounded-[50%]',
						isChecked ? 'block' : 'hidden'
					)}
				/>
			</label>
		</>
	)
}
