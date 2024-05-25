import { useState } from 'react'
import { Switch } from '@/shared'
import { authNavigationItemsArr } from '../model'
import { AuthLogin } from './@login'
import { AuthModal } from './@modal'
import { AuthRegistration } from './@registration'

export const Auth = () => {
	const [activeValue, setActiveValue] = useState<string>(
		authNavigationItemsArr[0].value
	)

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
