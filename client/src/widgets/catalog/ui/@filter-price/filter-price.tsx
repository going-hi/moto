import clsx from 'clsx'
import debounce from 'lodash.debounce'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useCallback } from 'react'
import { Typography } from '@/shared'
import { useGetCatalogFilter } from '../../libs'
import { useSearchQueryStore } from '../../model'
import cl from './filter-price.module.css'

const { Text } = Typography

export const CatalogFilterPrice = () => {
	const { data, isFetching } = useGetCatalogFilter()
	const {
		data: {
			price: {
				state: [minPrice, maxPrice]
			}
		},
		changePrice
	} = useSearchQueryStore()

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedChange = useCallback(
		debounce((price: number | number[]) => {
			changePrice(
				(price as [number, number]).map(i => String(i)) as [
					string,
					string
				]
			)
		}, 1000),
		[]
	)

	if (!data || isFetching) {
		return <></>
	}

	const priceDefault = data['цена'] as [number, number]

	return (
		<div className='select-none'>
			<Slider
				range
				min={priceDefault[0]}
				max={priceDefault[1]}
				onChangeComplete={debouncedChange}
				className={clsx(cl.root, 'mb-[10px]')}
				styles={{
					track: {
						backgroundColor: 'black',
						height: '2px'
					},
					handle: {
						width: '17px',
						height: '17px',
						borderRadius: '2px',
						border: 'none',
						backgroundColor: 'black',
						opacity: '100%',
						marginTop: '-7px'
					},
					rail: {
						backgroundColor: 'black',
						height: '2px'
					}
				}}
				draggableTrack={false}
				allowCross={false}
				defaultValue={[
					minPrice !== '0' ? +minPrice : priceDefault[0],
					maxPrice !== '0' ? +maxPrice : priceDefault[1]
				]}
			/>
			<div className='flex justify-between font-medium text-[18px]'>
				<div className='-ml-[10px] flex gap-x-[3px] items-end'>
					<Text>{priceDefault[0]}</Text>
					<span className='text-[16.5px]'>₽</span>
				</div>
				<div className='-mr-[10px] flex gap-x-[3px] items-end'>
					<Text>{priceDefault[1]}</Text>
					<span className='text-[16.5px]'>₽</span>
				</div>
			</div>
		</div>
	)
}
