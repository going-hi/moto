import { Outlet } from 'react-router-dom'
import { ProfileMenu } from '@/widgets/profile-menu'
import { Typography } from '@/shared'
import { Header, Footer, Wrapper, Container } from '@/layout'

const { Title } = Typography

export const ProfilePage = () => {
	return (
		<Wrapper>
			<Header />
			<Container>
				<Title className='mb-[20px] text-white' variant='h2'>
					Личный кабинет
				</Title>
				<div className='bg-beige p-[15px] flex gap-x-[200px]'>
					<ProfileMenu />
					<div className='basis-[53%] shrink-0 grow-0'>
						<Outlet />
					</div>
				</div>
			</Container>
			<Footer />
		</Wrapper>
	)
}
