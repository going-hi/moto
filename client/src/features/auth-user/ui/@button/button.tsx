import { Button } from '@/shared'
import { Icon } from '@/shared'

export const AuthButton = ({
	isPending,
	variant
}: {
	isPending: boolean
	variant: 'continue' | 'create'
}) => {
	return (
		<Button variant='primary'>
			{isPending ? (
				<Icon
					name='Loading'
					className='h-[20px] w-[20px] animate-spin-1000'
				/>
			) : variant === 'continue' ? (
				'ПРОДОЛЖИТЬ'
			) : (
				'СОЗДАТЬ АККАУНТ'
			)}
		</Button>
	)
}
