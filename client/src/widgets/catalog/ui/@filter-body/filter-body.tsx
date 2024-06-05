import { Checkbox, Typography } from '@/shared'
import { TGetFiltersDto, useSearchFiltersStore } from '../../model'
import { CatalogTypeRadio } from '../@type-radio'

const { Title, Text } = Typography

export const CatalogFilterBody = ({ filters }: { filters: TGetFiltersDto }) => {
	const { data } = useSearchFiltersStore()

	return (
		<>
			<CatalogTypeRadio />
			<ul className='flex flex-wrap'>
				{Object.keys(filters).map(key => (
					<li
						className='basis-[20%] border border-black p-[20px]'
						key={key}
					>
						<Title
							variant='h5'
							className='uppercase -tracking-2per mb-[15px]'
						>
							{key}
						</Title>
						{key !== 'цена' ? (
							<ul>
								{filters[key].map(i => {
									return (
										<li
											className='mb-[10px] last:mb-0 flex gap-x-[10px]'
											key={i}
										>
											<Checkbox
												field={{
													value: [data[key]]
												}}
												id={key + i}
												icon={
													<span className='block w-[10px] h-[10px] bg-black' />
												}
											/>
											<label htmlFor={key + i}>{i}</label>
										</li>
									)
								})}
							</ul>
						) : (
							<></>
						)}
					</li>
				))}
			</ul>
		</>
	)
}
