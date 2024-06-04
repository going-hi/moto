import { forwardRef } from 'react'
import { BoxRadio } from './@box'
import type { TRadioProps } from './@model'
import { PrimaryRadio } from './@primary'

// eslint-disable-next-line react/display-name
export const Radio = forwardRef<
	HTMLInputElement,
	TRadioProps & {
		variant: 'box' | 'primary'
		value: string
		onChange: (e: unknown) => void
	}
>(({ variant, ...props }, ref) => {
	switch (variant) {
		case 'box':
			return <BoxRadio {...props} />
		case 'primary':
			return <PrimaryRadio ref={ref} {...props} />
		default:
			return <></>
	}
})
