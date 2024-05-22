import { Dispatch, SetStateAction } from 'react'
import { Icon } from '../icon'

export const Checkbox = ({
	isCheck,
	setIsCheck,
	required,
	id
}: {
	isCheck: boolean
	setIsCheck: Dispatch<SetStateAction<boolean>>
	required?: boolean
	id: string
}) => {
	return (
		<label
			htmlFor={id}
			className='w-[25px] h-[25px] border-gray-dark border flex items-center justify-center cursor-pointer'
		>
			<input
				required={required}
				id={id}
				checked={isCheck}
				type='checkbox'
				onChange={e => setIsCheck(e.target.checked)}
				className='hidden'
			/>
			{isCheck && <Icon name='Check' />}
		</label>
	)
}
