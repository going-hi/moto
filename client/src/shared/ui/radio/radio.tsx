import { BoxRadio } from './@box'
import type { TRadioProps } from './@model'
import { PrimaryRadio } from './@primary'

export const Radio = ({
	variant,
	...props
}: TRadioProps & {
	variant: 'box' | 'primary'
}) => {
	switch (variant) {
		case 'box':
			return <BoxRadio {...props} />
		case 'primary':
			return <PrimaryRadio {...props} />
		default:
			return <></>
	}
}
