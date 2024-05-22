import { useId, type Dispatch, type SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import { Checkbox, Typography } from '@/shared'

const { Text } = Typography

export const AuthConfirmRules = ({
	isConfirm,
	setIsConfirm
}: {
	isConfirm: boolean
	setIsConfirm: Dispatch<SetStateAction<boolean>>
}) => {
	const id = useId()

	return (
		<label
			htmlFor={id}
			className='flex gap-x-[10px] items-center cursor-pointer select-none'
		>
			<Checkbox
				id={id}
				required
				isCheck={isConfirm}
				setIsCheck={setIsConfirm}
			/>
			<Text>
				Даю согласие на обработку{' '}
				<Link to='/rules' className='underline'>
					Персональных данных
				</Link>
			</Text>
		</label>
	)
}
