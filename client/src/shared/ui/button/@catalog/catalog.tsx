import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Typography } from '../../typography'
import { UnderlineWave } from '../../underline-wave'
import cl from '../button.module.css'

const { Text } = Typography

export const Catalog = () => {
	return (
		<Link
			className='absolute font-extrabold text-[20px] top-[15%] right-[35%] w-[230px] h-[230px] border-beige border-[1px] text-beige rounded-[50%] dhover:hover:scale-95 duration-700 will-change-transform p-[8px]'
			to='/catalog'
		>
			<div
				className={clsx(
					'bg-black flex items-center justify-center h-full rounded-[50%]',
					cl.underline
				)}
			>
				<UnderlineWave>
					<Text>КАТАЛОГ</Text>
				</UnderlineWave>
			</div>
		</Link>
	)
}
