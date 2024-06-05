import { Button } from '@/shared'
import { useGetQuerySearchCards } from '../../libs'

export const CatalogMore = ({ isLoading }: { isLoading: boolean }) => {
	const { fetchNextPage, isFetching } = useGetQuerySearchCards()

	if (isLoading || isFetching) {
		return <></>
	}

	return (
		<div className='flex justify-center mb-[50px]'>
			<Button
				onClick={() => fetchNextPage()}
				variant='parentheses-button'
				isMain
			>
				ПОКАЗАТЬ ЕЩЕ
			</Button>
		</div>
	)
}
