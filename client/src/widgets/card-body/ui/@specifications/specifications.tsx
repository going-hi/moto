import type { TCardCharacteristic } from '@/entities/card'
import { Typography } from '@/shared'
import { CardBodyAccordion } from '../@accordion'

const { Text } = Typography

export const Specifications = ({ list }: { list: TCardCharacteristic[] }) => {
	return (
		<CardBodyAccordion type='full' title='Характеристики'>
			<ul className='pb-[10px]'>
				{list.map(({ key, value }) => (
					<li
						key={key}
						className='flex pb-[5px] mb-[20px] last:mb-0 border-b border-[#b8b4a8] last:border-0'
					>
						<Text className='basis-[50%]'>{key}</Text>
						<Text className='basis-[50%]'>{value}</Text>
					</li>
				))}
			</ul>
		</CardBodyAccordion>
	)
}
