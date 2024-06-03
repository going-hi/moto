import { forwardRef } from 'react'
import { TInputProps } from './@model'
import { ProfileInput } from './@profile'

// eslint-disable-next-line react/display-name
export const Input = forwardRef<
	HTMLInputElement,
	TInputProps & { variant: 'profile' }
>(({ variant, ...props }, ref) => {
	switch (variant) {
		case 'profile':
			return <ProfileInput {...props} ref={ref} />
		default:
			return <></>
	}
})
