export const CardBodyDescription = ({
	description
}: {
	description?: string
}) => {
	return (
		<div className='max-w-[500px]'>
			<ul className='flex flex-col gap-y-[10px]'>
				{description?.split('\n').map(i => (
					<li
						className='font-medium text-[18px] leading-[20px]'
						key={i}
					>
						{i}
					</li>
				))}
			</ul>
		</div>
	)
}
