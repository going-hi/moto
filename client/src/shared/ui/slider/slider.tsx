import clsx from 'clsx'
import { type ReactNode, useCallback } from 'react'
import { useSlider, Button } from '@/shared'

export const Slider = ({
	children,
	type,
	classNameBody
}: {
	children: ReactNode
	type: 'more' | 'default'
	classNameBody?: string
}) => {
	const { sliderApi, sliderRef } = useSlider()

	const onClickMore = useCallback(() => {
		if (!sliderApi) return

		sliderApi.scrollNext()
	}, [sliderApi])

	return (
		<div className='relative'>
			<div ref={sliderRef} className='overflow-hidden '>
				<div className={clsx('flex', classNameBody)}>{children}</div>
			</div>
			{type === 'more' && <Button variant='more' onClick={onClickMore} />}
		</div>
	)
}
