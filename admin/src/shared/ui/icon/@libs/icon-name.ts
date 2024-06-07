/// <reference types="vite-plugin-svgr/client" />

import Close from '@assets/close.svg?react'

export const iconNames = {
	Close
}

export type TIconName = keyof typeof iconNames
export const getIcon = (name: TIconName) => iconNames[name]
