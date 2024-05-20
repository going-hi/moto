import { Typography } from '@/shared'
import { CardBodyAccordion } from '../@accordion'

type TSpecification = {
	name: string
	value: string
}

const { Text } = Typography

export const Specifications = ({ list }: { list: TSpecification[] }) => {
	return (
		<CardBodyAccordion type='full' title='Характеристики'>
			<ul className='pb-[10px]'>
				{list.map(({ name, value }) => (
					<li
						key={name}
						className='flex pb-[5px] mb-[20px] last:mb-0 border-b border-[#b8b4a8] last:border-0'
					>
						<Text className='basis-[50%]'>{name}</Text>
						<Text className='basis-[50%]'>{value}</Text>
					</li>
				))}
			</ul>
		</CardBodyAccordion>
	)
}
