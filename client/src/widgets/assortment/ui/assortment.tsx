import { Typography } from '@/shared'
import { assortmentItemsArr } from '../model/data'
import { Layout } from '@/layout'

const { Title, Text } = Typography

export const Assortment = () => {
	return (
		<Layout variant='full' type='multi' className='mb-[80px]'>
			<div className='relative'>
				<img
					className='absolute top-0 left-0 w-[95%] h-full'
					src='/assortment.png'
					alt='assortment'
				/>
			</div>
			<div>
				<Title className='leading-[115px] mb-[20px]' variant='h2'>
					АССОРТИМЕНТ
				</Title>
				<ul className='flex flex-col gap-y-[16px] max-w-[600px]'>
					{assortmentItemsArr.map(({ text, title }) => (
						<li key={title}>
							<Text className='bg-red-light inline text-beige text-[20px] mr-[5px]'>
								{title}:
							</Text>
							<Text className='inline text-[20px] font-medium leading-[18px]'>
								{text}
							</Text>
						</li>
					))}
				</ul>
			</div>
		</Layout>
	)
}
