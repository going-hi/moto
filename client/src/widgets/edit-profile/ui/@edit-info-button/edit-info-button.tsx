import { Button, Icon } from '@/shared'
import { useEditInfoChanged } from '../../libs'

export const EditProfileInfoButton = ({
	isPending
}: {
	isPending: boolean
}) => {
	const isChanged = useEditInfoChanged()

	return (
		<Button
			disabled={!isChanged}
			variant='primary'
			className='!py-[18px] uppercase'
		>
			{isPending ? (
				<Icon
					name='Loading'
					className='w-[21px] h-[21px] animate-spin-1000'
				/>
			) : (
				'Сохранить'
			)}
		</Button>
	)
}
