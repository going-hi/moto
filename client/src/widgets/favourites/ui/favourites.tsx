import { useFavouritesStore } from '@/entities/favourites'
import { Typography } from '@/shared'
import { FavouritesEmpty } from './@empty'
import { FavouritesList } from './@list'
import { Container } from '@/layout'

const { Title } = Typography

export const Favourites = () => {
	const {
		data: { items },
		isLoading
	} = useFavouritesStore()

	return (
		<section className='mb-[30px] mt-[50px]'>
			<Container>
				<div className='flex items-end gap-x-[8px] mb-[40px]'>
					<Title variant='h2' className='text-white leading-[95px]'>
						Избранное
					</Title>
					{!!items.length && (
						<span className='text-[35px] font-normal inter block pb-[6px] text-white'>
							({items.length})
						</span>
					)}
				</div>
				{!!items && !isLoading ? (
					<FavouritesEmpty />
				) : (
					<FavouritesList
						list={isLoading ? [...new Array(9)] : items}
					/>
				)}
			</Container>
		</section>
	)
}
