import { ToastContainer, Bounce } from 'react-toastify'
import { Icon } from '../icon'

export const Toast = () => {
	return (
		<ToastContainer
			toastStyle={{
				background: 'var(--beige)'
			}}
			position='bottom-left'
			autoClose={10000}
			hideProgressBar
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable={false}
			pauseOnHover={false}
			theme='light'
			transition={Bounce}
			icon={false}
			closeButton={
				<Icon
					name='Close'
					className='w-[25px] h-[25px] p-[5px] cursor-pointer'
					color='black'
				/>
			}
		/>
	)
}
