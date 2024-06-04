import clsx from 'clsx'
import { useId } from 'react'
import type { TRadioProps } from '../@model'

export const BoxRadio = ({ name, className, isChecked }: TRadioProps) => {
	const id = useId()

	return (
		<>
			<input type='radio' name={name} id={id} className='hidden' />
			<label
				htmlFor={id}
				className={clsx(
					'border-[#000000] border rounded-[2px] w-[20px] h-[20px] flex items-center justify-center',
					className
				)}
			>
				<span
					className={clsx(
						'p-[5px] bg-[#000]',
						isChecked ? 'block' : 'hidden'
					)}
				/>
			</label>
		</>
	)
}
