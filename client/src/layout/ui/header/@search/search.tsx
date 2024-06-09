import { FormEvent, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchQueryStore } from '@/widgets/catalog'
import { Icon } from '@/shared'

export const Search = () => {
	const inputRef = useRef<HTMLInputElement | null>(null)
	const { setData } = useSearchQueryStore()

	const navigate = useNavigate()

	const search = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const q = inputRef.current?.value
		setData({
			q
		})
		navigate(`/catalog/all?q=${q}`)
	}

	return (
		<form className='relative group self-start pb-[4px]' onSubmit={search}>
			<input
				ref={inputRef}
				className='absolute right-0 bottom-0 w-0 dhover:group-hover:w-[200px] focus:w-[200px] bg-transparent py-[5px] border-beige text-extrabold border-b-[2px] peer duration-700 pr-[40px] opacity-0 focus:opacity-70 dhover:group-hover:opacity-70 text-[20px] font-medium text-white'
			/>
			<Icon
				onClick={() => inputRef.current?.focus()}
				name='Search'
				color='white'
				className='cursor-pointer dhover:group-hover:scale-125 duration-700 peer-focus:scale-125'
			/>
		</form>
	)
}
