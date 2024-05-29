import { ReactNode } from 'react'
import type { TCard } from '../types'

export type TCardProps = TCard & {
	variant: 'primary' | 'catalog'
	className?: string
	classNameImageBody?: string
	textColor?: string
	children?: ReactNode
}
