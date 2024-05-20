/// <reference types="vite-plugin-svgr/client" />

import ArrowDown from '@assets/arrow-down.svg?react'
import ArrowLeft from '@assets/arrow-left.svg?react'
import ArrowRight from '@assets/arrow-right.svg?react'
import Cart from '@assets/cart.svg?react'
import Favourite from '@assets/favourite.svg?react'
import Heart from '@assets/heart.svg?react'
import Minus from '@assets/minus.svg?react'
import Plus from '@assets/plus.svg?react'
import Profile from '@assets/profile.svg?react'
import Search from '@assets/search.svg?react'

export const iconNames = {
	Minus,
	Plus,
	Cart,
	Profile,
	Favourite,
	Search,
	ArrowDown,
	ArrowLeft,
	ArrowRight,
	Heart
}

export type TIconName = keyof typeof iconNames
export const getIcon = (name: TIconName) => iconNames[name]
