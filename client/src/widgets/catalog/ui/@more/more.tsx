import { Dispatch, SetStateAction } from 'react'
import { Button } from '@/shared'

export const CatalogMore = ({
	isLoading,
	setPage
}: {
	isLoading: boolean
	setPage: Dispatch<SetStateAction<number>>
}) => {
	return (
		<div className='flex justify-center mb-[50px]'>
			<Button
				disabled={isLoading}
				onClick={() => setPage(prev => prev + 1)}
				variant='parentheses-button'
			>
				ПОКАЗАТЬ ЕЩЕ
			</Button>
		</div>
	)
}
