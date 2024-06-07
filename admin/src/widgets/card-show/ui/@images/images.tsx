import { Image } from '@/shared'
import { useRecordContext } from 'react-admin'

export const CardShowImages = () => {
	const record: { images: string[] } = useRecordContext()

	const { images } = record

	if (!images.length) {
		return <></>
	}

	return (
		<div className='flex gap-x-[20px] my-[30px]'>
			{images.map(i => (
				<div key={i} className='relative pb-[100px] basis-[10%]'>
					<Image
						src={i}
						className='absolute top-0 left-0 object-cover max-h-full max-w-full'
					/>
				</div>
			))}
		</div>
	)
}
