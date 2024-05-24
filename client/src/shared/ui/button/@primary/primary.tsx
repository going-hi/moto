import { ReactNode } from 'react'

export const Primary = ({ children, ...props }: { children: ReactNode }) => {
	return (
		<button
			{...props}
			className='py-[23px] w-full bg-black text-beige font-bold'
		>
			{children}
		</button>
	)
}
