import clsx from 'clsx'
import { ToggleCartButton } from '@/features/toggle-cart'
import { ToggleFavourites } from '@/features/toggle-favourites'
import { Typography, SliderProvider, specifications, Skeleton } from '@/shared'
import { useGetCard } from '../libs'
import { CardGalleryBody } from './@body'
import { CardBodyDelivery } from './@delivery'
import { CardBodyDescription } from './@description'
import { CardBodyPaymentMethod } from './@payment-method'
import { CardGallerySlider } from './@slider'
import { Specifications } from './@specifications'

const { Title, Text } = Typography

export const CardBody = ({ id }: { id: number }) => {
	const { data, isLoading } = useGetCard(id)

	return (
		<section
			className={clsx('flex h-[874px]', isLoading && 'gap-x-[20px]')}
		>
			<>
				<div className='basis-[50%] bg-white py-[65px] px-[12px]'>
					<SliderProvider
						options={{
							loop: true,
							align: 'start',
							containScroll: false
						}}
					>
						<div className='flex flex-col'>
							<CardGalleryBody
								images={data ? data.images : []}
								isLoading={isLoading}
							/>
							<CardGallerySlider
								isLoading={isLoading}
								{...(data
									? data
									: {
											name: 'any',
											images: [...new Array(10)]
										})}
							/>
						</div>
					</SliderProvider>
				</div>
				{isLoading ? (
					<Skeleton className='h-full' />
				) : (
					<div className='basis-[50%] bg-beige p-[20px] flex flex-col gap-y-[50px] overflow-y-auto max-h-full'>
						<div className='relative after:content-[""] after:w-full after:h-[1px] after:bottom-0 after:left-0 after:bg-black after:absolute pb-[20px]'>
							<Title variant='h2' className='leading-[100px]'>
								{data?.name}
							</Title>
							<Text className='font-extrabold text-[24px] -tracking-2per'>
								{data?.price} ₽
							</Text>
						</div>
						<CardBodyDescription description={data?.description} />
						<div className='flex gap-x-[15px]'>
							<ToggleFavourites id={id} variant='button' />
							<ToggleCartButton
								variant='parentheses-button'
								id={id}
							/>
						</div>
						<div>
							<Specifications list={specifications} />
							<CardBodyPaymentMethod />
							<CardBodyDelivery />
						</div>
					</div>
				)}
			</>
		</section>
	)
}
