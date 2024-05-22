import { ReactNode } from 'react'
import type { TCard } from '../model'

export type TCardProps = TCard & {
	type: 'small' | 'large'
	className?: string
	classNameImageBody?: string
	textColor?: string
	children?: ReactNode
}
