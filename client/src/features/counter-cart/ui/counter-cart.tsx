import debounce from 'lodash.debounce'
import { Dispatch, SetStateAction, useCallback } from 'react'
import { Icon, Typography, formatCount } from '@/shared'
import { useCounterCart } from '../libs'

const { Text } = Typography

export const CounterCartButton = ({
	count,
	id,
	price,
	setCount
}: {
	count: number
	id: number
	price: number
	setCount: Dispatch<SetStateAction<number>>
}) => {
	const { mutate } = useCounterCart()

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedCounter = useCallback(
		debounce((count: number) => {
			mutate({ count, id })
		}, 1000),
		[]
	)

	const onClick = (type: 'add' | 'remove') => {
		setCount(prev => {
			const count = type === 'add' ? ++prev : --prev
			debouncedCounter(prev)
			return count
		})
	}

	return (
		<>
			<div className='border-gray-light border px-[15px] py-[4px] flex gap-x-[15px] w-[110px] items-center mb-[10px] '>
				<button disabled={count < 2} onClick={() => onClick('remove')}>
					<Icon name='Minus' className='w-[15px] h-[15px]' />
				</button>
				<span className='text-[20px] -tracking-2per leading-[20px]'>
					{formatCount(count)}
				</span>
				<button onClick={() => onClick('add')}>
					<Icon name='Plus' className='w-[15px] h-[15px]' />
				</button>
			</div>
			{count > 1 && <Text className='text-[16px]'>{price} ₽ / шт</Text>}
		</>
	)
}
