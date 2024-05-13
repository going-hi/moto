/// <reference types="vite-plugin-svgr/client" />

import Cart from '@assets/cart.svg?react'
import Favourite from '@assets/favourite.svg?react'
import Minus from '@assets/minus.svg?react'
import Plus from '@assets/plus.svg?react'
import Profile from '@assets/profile.svg?react'

export const iconNames = {
	Minus,
	Plus,
	Cart,
	Profile,
	Favourite
}

export type TIconName = keyof typeof iconNames
export const getIcon = (name: TIconName) => iconNames[name]
