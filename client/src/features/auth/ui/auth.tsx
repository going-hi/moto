import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Switch } from '@/shared'
import { authNavigationItemsArr } from '../model'
import { AuthLogin } from './@login'
import { AuthModal } from './@modal'
import { AuthRegistration } from './@registration'
import { AuthReset } from './@reset'

export const Auth = () => {
	const [activeValue, setActiveValue] = useState<string>(
		authNavigationItemsArr[0].value
	)

	const { pathname } = useLocation()

	if (!['/auth', '/auth/reset'].includes(pathname)) return

	if (pathname === '/auth/reset') {
		return <AuthReset />
	}

	return (
		<>
			<AuthModal variant='large'>
				<Switch
					options={authNavigationItemsArr}
					activeValue={activeValue}
					setActiveValue={setActiveValue}
					className='mb-[50px]'
				/>
				{activeValue === 'login' ? <AuthLogin /> : <AuthRegistration />}
			</AuthModal>
		</>
	)
}
