import { Button } from '@/shared'
import { Icon } from '@/shared'

export const AuthButton = ({
	isPending,
	variant
}: {
	isPending: boolean
	variant: 'login' | 'registration'
}) => {
	return (
		<Button variant='primary' type='button'>
			{isPending ? (
				<Icon
					name='Loading'
					className='h-[20px] w-[20px] animate-spin-1000'
				/>
			) : variant === 'login' ? (
				'ПРОДОЛЖИТЬ'
			) : (
				'СОЗДАТЬ АККАУНТ'
			)}
		</Button>
	)
}
