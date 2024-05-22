import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Switch } from '@/shared'
import { authNavigationItemsArr } from '../model'
import { AuthLogin } from './@login'
import { AuthModal } from './@modal'
import { AuthRegistration } from './@registration'

export const Auth = () => {
	const [activeValue, setActiveValue] = useState<string>(
		authNavigationItemsArr[0].value
	)

	const { pathname } = useLocation()

	if (pathname !== '/auth') return

	return (
		<>
			<AuthModal>
				<Switch
					options={authNavigationItemsArr}
					activeValue={activeValue}
					setActiveValue={setActiveValue}
				/>
				{activeValue === 'login' ? <AuthLogin /> : <AuthRegistration />}
			</AuthModal>
		</>
	)
}
