import { useGetCards } from '@/entities/card'
import { List } from './@list'
import { Container } from '@/layout'

export const NewProducts = () => {
	const { data: krostekData, isLoading: isKrostekLoading } = useGetCards(
		{},
		encodeURI(
			JSON.stringify({
				Бренд: ['KROSTEK']
			})
		)
	)

	const { data: motolandData, isLoading: isMotolandLoading } = useGetCards(
		{},
		encodeURI(
			JSON.stringify({
				Бренд: ['Motoland']
			})
		)
	)

	return (
		<section>
			<Container bodyClassName='bg-beige flex flex-col gap-y-[100px] py-[50px] '>
				<List
					list={
						isMotolandLoading
							? [...new Array(10)]
							: motolandData?.items ?? []
					}
					title='MOTOLAND'
					mainTitle='НОВИНКИ'
				/>
				<List
					list={
						isKrostekLoading
							? [...new Array(10)]
							: krostekData?.items ?? []
					}
					title='KROSTEK'
				/>
			</Container>
		</section>
	)
}
