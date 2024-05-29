import { Card, TCard } from '@/entities/card'
import { Typography } from '@/shared'
import { More } from '../@more'
import { Layout } from '@/layout'

const { Title } = Typography

export const List = ({
	mainTitle,
	list,
	title
}: {
	list: TCard[]
	mainTitle?: string
	title: string
}) => {
	return (
		<div>
			{mainTitle ? (
				<Layout variant='full' type='multi'>
					<Title variant='h2' className='opacity-10 text-black'>
						{mainTitle}
					</Title>
					<Title variant='h2'>{title}</Title>
				</Layout>
			) : (
				<Layout variant='part' type='single'>
					<Title variant='h2'>{title}</Title>
				</Layout>
			)}
			<div className='flex flex-wrap gap-x-[50px] gap-y-[30px]'>
				{list.slice(0, 9).map(i => (
					<Card {...i} key={i.id} variant='primary' />
				))}
				<More />
			</div>
		</div>
	)
}
