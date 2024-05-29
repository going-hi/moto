import { useState } from 'react'
import { Icon, Typography, formatCount } from '@/shared'

const { Text } = Typography

export const CounterCartButton = ({
	count,
	id,
	price
}: {
	count: number
	id: number
	price: number
}) => {
	const [counter, setCounter] = useState<number>(count)

	return (
		<>
			<div className='border-gray-light border px-[15px] py-[4px] flex gap-x-[15px] w-[110px] items-center mb-[10px] '>
				<button>
					<Icon name='Minus' className='w-[15px] h-[15px]' />
				</button>
				<span className='text-[20px] -tracking-2per leading-[20px]'>
					{formatCount(counter)}
				</span>
				<button>
					<Icon name='Plus' className='w-[15px] h-[15px]' />
				</button>
			</div>
			<Text className='text-[16px]'>{price} ₽ / шт</Text>
		</>
	)
}
