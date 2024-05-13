import { Icon } from '@/shared'

export const Search = () => {
	return (
		<div className='relative group'>
			<input className='w-[200px] bg-transparent border-b-[1px] py-[5px] border-beige opacity-70 text-beige text-extrabold pr-[35px] pl-[5px] focus:border-b-[2px] peer' />
			<Icon
				name='Search'
				className='absolute right-0 top-0 cursor-pointer group-hover:scale-125 duration-700 peer-focus:scale-125'
			/>
		</div>
	)
}
