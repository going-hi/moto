import { Button } from '@/shared'
import { useParamsStore } from '../../model'

export const CatalogMore = ({ isLoading }: { isLoading: boolean }) => {
	const { incrementPage } = useParamsStore()

	return (
		<div className='flex justify-center mb-[50px]'>
			<Button
				disabled={isLoading}
				onClick={incrementPage}
				variant='parentheses-button'
			>
				ПОКАЗАТЬ ЕЩЕ
			</Button>
		</div>
	)
}
