import { forwardRef } from 'react'
import { TInputProps } from './@model'
import { OrderInput } from './@order'
import { ProfileInput } from './@profile'

// eslint-disable-next-line react/display-name
export const Input = forwardRef<
	HTMLInputElement,
	TInputProps & { variant: 'profile' | 'order' }
>(({ variant, ...props }, ref) => {
	switch (variant) {
		case 'profile':
			return <ProfileInput {...props} ref={ref} />
		case 'order':
			return <OrderInput {...props} ref={ref} />
		default:
			return <></>
	}
})
