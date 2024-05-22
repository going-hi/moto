import { ReactNode } from 'react'

export const Primary = ({ children }: { children: ReactNode }) => {
	return (
		<button className='py-[23px] w-full bg-black text-beige font-bold'>
			{children}
		</button>
	)
}
