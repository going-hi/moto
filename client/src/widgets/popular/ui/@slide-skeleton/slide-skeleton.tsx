import { Skeleton, Slide } from '@/shared'

export const PopularSlideSkeleton = () => {
	return (
		<Slide className='basis-[660px]'>
			<Skeleton className='aspect-[2/1.4]' />
		</Slide>
	)
}
