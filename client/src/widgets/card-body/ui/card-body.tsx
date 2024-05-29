import clsx from 'clsx'
import { ToggleCartButton } from '@/features/toggle-cart'
import { ToggleFavouritesButton } from '@/features/toggle-favourites'
import { Typography } from '@/shared'
import { specifications } from '@/shared'
import { SliderProvider } from '@/shared'
import { useGetCard } from '../libs'
import { CardGalleryBody } from './@body'
import { CardBodyDelivery } from './@delivery'
import { CardBodyDescription } from './@description'
import { CardBodyLoader } from './@loader'
import { CardBodyPaymentMethod } from './@payment-method'
import { CardGallerySlider } from './@slider'
import { Specifications } from './@specifications'
import cl from './card-body.module.css'

const { Title, Text } = Typography

export const CardBody = ({ id }: { id: number }) => {
	const { data, isLoading } = useGetCard(id)

	if (isLoading) {
		return <CardBodyLoader />
	}

	if (!data) {
		return <></>
	}

	return (
		<section className='flex h-[874px]'>
			<div className='basis-[50%] bg-white py-[65px] px-[12px]'>
				<SliderProvider
					options={{
						loop: true,
						align: 'start',
						containScroll: false
					}}
				>
					<div className='flex flex-col'>
						<CardGalleryBody images={data.images} />
						<CardGallerySlider {...data} />
					</div>
				</SliderProvider>
			</div>
			<div
				className={clsx(
					'basis-[50%] bg-beige p-[20px] flex flex-col gap-y-[50px] overflow-y-scroll max-h-full',
					cl.root
				)}
			>
				<div className='relative after:content-[""] after:w-full after:h-[1px] after:bottom-0 after:left-0 after:bg-black after:absolute pb-[20px]'>
					<Title variant='h2' className='leading-[100px]'>
						{data.name}
					</Title>
					<Text className='font-extrabold text-[24px] -tracking-2per'>
						{data.price} ₽
					</Text>
				</div>
				<CardBodyDescription description={data.description} />
				<div className='flex gap-x-[15px]'>
					<ToggleFavouritesButton variant='button' isActive={false} />
					<ToggleCartButton />
				</div>
				<div>
					<Specifications list={specifications} />
					<CardBodyPaymentMethod />
					<CardBodyDelivery />
				</div>
			</div>
		</section>
	)
}
