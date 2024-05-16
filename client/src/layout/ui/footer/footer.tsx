import { Link } from 'react-router-dom'
import { Typography } from '@/shared'
import { Container } from '../container'
import { Layout } from '../layout'
import { List } from './@list'
import {
	socialItemsArr,
	cardItemsArr,
	chapterItemsArr,
	profileItemsArr
} from './@model'

const { Title } = Typography

export const Footer = () => {
	return (
		<footer className='text-beige'>
			<Container bodyClassName='bg-black pt-[25px] pb-[15px]'>
				<Layout variant='full' type='multi'>
					<div className='flex flex-col justify-between'>
						<img
							src='/logo.png'
							alt='logo'
							className='w-[120px] h-[120px]'
						/>
						<Link
							to='/'
							className='opacity-70 text-beige hover:underline leading-[30px] self-start'
						>
							ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
						</Link>
					</div>
					<div className='flex flex-col justify-between gap-y-[90px]'>
						<nav className='flex justify-between'>
							<div className='flex gap-x-[50px]'>
								<List list={cardItemsArr} />
								<List list={chapterItemsArr} />
								<List list={profileItemsArr} />
							</div>
							<div>
								<List
									className='gap-y-[20px]'
									list={socialItemsArr}
								/>
							</div>
						</nav>
						<Title
							className='text-beige font-extrabold leading-[85px]'
							variant='h2'
						>
							+7 (920) 909-58-24
						</Title>
					</div>
				</Layout>
			</Container>
		</footer>
	)
}
