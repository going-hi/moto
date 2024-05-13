import { formatCount } from '../@utils'

export const Badge = ({ count }: { count: number }) => {
	return (
		<span className='absolute h-[20px] bg-beige text-black rounded-[50%] flex items-center justify-center w-[20px] text-[10px] top-0 -right-[10px]'>
			{formatCount(count)}
		</span>
	)
}
