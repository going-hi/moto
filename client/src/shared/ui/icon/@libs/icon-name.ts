/// <reference types="vite-plugin-svgr/client" />

import Minus from '@assets/minus.svg?react'
import Plus from '@assets/plus.svg?react'

export const iconNames = {
	Minus,
	Plus
}

export type TIconName = keyof typeof iconNames
export const getIcon = (name: TIconName) => iconNames[name]
