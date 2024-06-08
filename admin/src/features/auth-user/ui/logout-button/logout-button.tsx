import { forwardRef } from 'react'

import MenuItem from '@mui/material/MenuItem'
import ExitIcon from '@mui/icons-material/PowerSettingsNew'

import { logout } from '../../api'

export const LogoutButton = forwardRef((props, ref: any) => {
	const handleClick = () =>
		logout().then(() => {
			window.location.reload()
		})
	return (
		<MenuItem onClick={handleClick} ref={ref} {...props}>
			<ExitIcon /> <p className='ml-2'>Logout</p>
		</MenuItem>
	)
})
