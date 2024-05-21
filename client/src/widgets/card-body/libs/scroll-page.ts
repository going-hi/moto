import type { MutableRefObject } from 'react'

export const scrollPage = (
	e: WheelEvent,
	ref: MutableRefObject<HTMLDivElement | null>
) => {
	if (!ref.current) return
	ref.current.scroll({
		top: ref.current.scrollTop + e.deltaY
	})
}
