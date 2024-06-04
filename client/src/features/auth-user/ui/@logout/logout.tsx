import { Icon } from '@/shared'
import { useLogout } from '../../libs'

export const AuthLogout = () => {
	const { mutate, isPending } = useLogout()

	if (isPending) {
		return <Icon name='Loading' className='w-[20px] h-[20px]' />
	}

	return (
		<button onClick={mutate} className='flex items-center gap-x-[5px]'>
			<span className='text-[18px]'>ВЫЙТИ</span>
			<Icon name='Logout' />
		</button>
	)
}
