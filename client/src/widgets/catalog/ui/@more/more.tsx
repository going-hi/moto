import { Button } from '@/shared'
import { useSearchQueryStore } from '../../model'

export const CatalogMore = ({ isLoading }: { isLoading: boolean }) => {
	const { incrementPage } = useSearchQueryStore()

	return (
		<div className='flex justify-center mb-[50px]'>
			<Button
				disabled={isLoading}
				onClick={incrementPage}
				variant='parentheses-button'
				isMain
			>
				ПОКАЗАТЬ ЕЩЕ
			</Button>
		</div>
	)
}
