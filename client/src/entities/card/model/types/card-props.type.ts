import { FC, ReactNode } from 'react'
import type { TCard } from '../types'

export type TCardProps = TCard & {
	variant: 'primary' | 'catalog' | 'basket'
	className?: string
	classNameImageBody?: string
	textColor?: string
	children?: ReactNode
	BodyComponent?: FC
}
