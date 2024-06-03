import { Skeleton } from '@/shared'

export const MyOrdersItemSkeleton = () => {
	return (
		<li className='h-[214px]'>
			<Skeleton className='max-h-full w-full' />
		</li>
	)
}
