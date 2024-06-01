import { Icon } from '@/shared'
import { useLogout } from '../../libs'

export const AuthLogout = () => {
	const { mutate, isPending } = useLogout()

	if (isPending) {
		return <Icon name='Loading' className='w-[20px] h-[20px]' />
	}

	return (
		<button onClick={mutate}>
			<span className='text-[18px] mb-[5px]'>ВЫЙТИ</span>
			<Icon name='Logout' />
		</button>
	)
}
