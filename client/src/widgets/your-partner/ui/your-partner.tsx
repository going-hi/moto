import { Typography } from '@/shared'
import { Layout } from '@/layout'

const { Title, Text } = Typography

export const YourPartner = () => {
	return (
		<div>
			<Layout variant='part' type='single'>
				<Title className='uppercase leading-[120px]' variant='h2'>
					Магазин &quot;Технарь 33&quot; —
					<span className='text-red-light'>ваш надежный партнер</span>
				</Title>
			</Layout>
			<Text className='uppercase text-[115px] leading-[115px] font-bold bebas -tracking-2per'>
				в мире мототехники и велотехники. С нами вы получите не только
				отличную технику,
			</Text>
			<Text className='uppercase text-[115px] leading-[115px] font-bold bebas -tracking-2per text-red-light max-w-[70%]'>
				но и профессиональное обслуживание и поддержку.
			</Text>
		</div>
	)
}
