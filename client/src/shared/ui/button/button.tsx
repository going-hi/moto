import { Link } from 'react-router-dom'

export const Button = ({
	variant,
	path
}: {
	variant: 'more'
	path?: string
}) => {
	switch (variant) {
		case 'more':
			return (
				<Link
					className='absolute bg-red-light font-extrabold text-[20px] top-[50%] -translate-y-[55%] right-[20%] w-[220px] h-[220px] flex items-center justify-center text-beige rounded-[50%]'
					to={path ?? ''}
				>
					БОЛЬШЕ
				</Link>
			)
		default:
			return <></>
	}
}
