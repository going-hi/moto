import { Button } from '@/shared'
import { Header } from '@/layout'

export const Banner = () => {
	return (
		<section className='min-h-[100dvh] bg-red-light bg-[url("/banner.png")] bg-cover bg-no-repeat bg-banner-sz bg-banner-ps '>
			<Header />
			<Button variant='catalog' />
		</section>
	)
}
