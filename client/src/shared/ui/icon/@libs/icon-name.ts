/// <reference types="vite-plugin-svgr/client" />

import ArrowDown from '@assets/arrow-down.svg?react'
import ArrowLeft from '@assets/arrow-left.svg?react'
import ArrowRight from '@assets/arrow-right.svg?react'
import Cart from '@assets/cart.svg?react'
import Check from '@assets/check.svg?react'
import Close from '@assets/close.svg?react'
import Favourite from '@assets/favourite.svg?react'
import FullHeart from '@assets/full-heart.svg?react'
import Heart from '@assets/heart.svg?react'
import Loading from '@assets/loading.svg?react'
import Logout from '@assets/logout.svg?react'
import Minus from '@assets/minus.svg?react'
import Pencil from '@assets/pencil.svg?react'
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
	Heart,
	FullHeart,
	Close,
	Check,
	Loading,
	Logout,
	Pencil
}

export type TIconName = keyof typeof iconNames
export const getIcon = (name: TIconName) => iconNames[name]
