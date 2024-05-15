import { Link } from 'react-router-dom'

export const More = () => {
	return (
		<Link
			className='border-2 border-black basis-[17%] shrink-0 grow-0 aspect-square self-start flex items-center justify-center duration-700 hover:scale-105 group'
			to={'/cards'}
		>
			<div className='bg-black text-white font-bold text-[18px] flex p-[4px] will-change-transform'>
				<span>[</span>
				<div className='mx-[28px] group-hover:mx-[20px] duration-700'>
					<span>СМОТРЕТЬ ВСЕ</span>
					<span className='w-full bg-white h-[2px] block' />
				</div>
				<span>]</span>
			</div>
		</Link>
	)
}
