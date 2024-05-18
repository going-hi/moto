import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'
import { Typography } from '../../typography'
import { UnderlineWave } from '../../underline-wave'
import cl from '../button.module.css'

const { Text } = Typography

export const More = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			{...props}
			className={clsx(
				'absolute bg-red-light font-extrabold text-[20px] top-[50%] -translate-y-[55%] right-[13%] w-[220px] h-[220px] flex items-center justify-center text-beige rounded-[50%] dhover:hover:scale-95 duration-700',
				cl.underline
			)}
		>
			<UnderlineWave>
				<Text>БОЛЬШЕ</Text>
			</UnderlineWave>
		</button>
	)
}
