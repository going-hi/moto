import { Typography } from '@/shared'
import { reasonsItemsArr, reasonsListItemsArr } from '../model'
import { Container, Layout } from '@/layout'

const { Title } = Typography

export const Advantages = () => {
	return (
		<Container className='mb-[80px]'>
			<Layout variant='part' type='single'>
				<div className='-ml-[20px]'>
					<Title className='leading-[115px]' variant='h2'>
						ПОЧЕМУ ПОКУПАТЕЛИ
					</Title>
					<Title
						className='text-red-light leading-[115px]'
						variant='h2'
					>
						ВЫБИРАЮТ НАС
					</Title>
				</div>
			</Layout>
			<ul className='flex justify-between mb-[58px]'>
				{reasonsItemsArr.map(i => (
					<li
						className='aspect-square bg-black basis-[19%] grow-0 shrink-0 flex items-center justify-center rounded-[50%] font-medium text-[32px] leading-[36px] -tracking-2per uppercase text-beige'
						key={i}
					>
						<div className='text-center'>{i}</div>
					</li>
				))}
			</ul>
			<Layout variant='part' type='single'>
				<div>
					<ul className='flex flex-col max-w-[480px] gap-y-[10px]'>
						{reasonsListItemsArr.map(i => (
							<li className='leading-[20px] font-medium' key={i}>
								{i}
							</li>
						))}
					</ul>
				</div>
			</Layout>
		</Container>
	)
}
