import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Typography, CategoriesRuMap } from '@/shared'
import { Container } from '@/layout'

const { Title } = Typography

export const CatalogHeader = ({ name }: { name: string }) => {
	return (
		<Container className='mb-[60px] pl-[400px]'>
			<div className='text-white'>
				<Title className='leading-[120px]' variant='h1'>
					{CategoriesRuMap[name]}
				</Title>
				<nav>
					<ul className='flex gap-x-[30px]'>
						{Object.keys(CategoriesRuMap).map(i => {
							const label = CategoriesRuMap[i]

							return (
								<li key={i}>
									<Link
										className={clsx(
											'font-medium text-[18px]',
											name === label && 'bg-black'
										)}
										to={`/catalog/${i}`}
									>
										{label}
									</Link>
								</li>
							)
						})}
					</ul>
				</nav>
			</div>
		</Container>
	)
}
