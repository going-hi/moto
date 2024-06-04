import clsx from 'clsx'
import { useId, forwardRef } from 'react'
import type { TRadioProps } from '../@model'

// eslint-disable-next-line react/display-name
export const PrimaryRadio = forwardRef<HTMLInputElement, TRadioProps>(
	({ name, className, isChecked, id, value, onChange }, ref) => {
		const generatedId = useId()

		// const ctx = useFormContext()

		return (
			<>
				<input
					ref={ref}
					type='radio'
					name={name}
					id={id ?? generatedId}
					className='hidden'
					value={value}
					onChange={onChange}
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
)
