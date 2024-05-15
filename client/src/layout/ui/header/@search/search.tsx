import { useRef } from 'react'
import { Icon } from '@/shared'

export const Search = () => {
	const inputRef = useRef<HTMLInputElement | null>(null)

	return (
		<div className='relative group self-start pb-[4px]'>
			<input
				ref={inputRef}
				className='absolute right-0 bottom-0 w-0 group-hover:w-[200px] focus:w-[200px] bg-transparent py-[5px] border-beige text-beige text-extrabold border-b-[2px] peer duration-700 pr-[40px] opacity-0 focus:opacity-70 group-hover:opacity-70'
			/>
			<Icon
				onClick={() => inputRef.current?.focus()}
				name='Search'
				className='cursor-pointer group-hover:scale-125 duration-700 peer-focus:scale-125'
			/>
		</div>
	)
}
