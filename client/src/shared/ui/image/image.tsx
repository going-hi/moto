import { ImgHTMLAttributes } from 'react'
import { envConfig } from '@/shared'

export const Image = ({
	src,
	...props
}: ImgHTMLAttributes<HTMLImageElement>) => {
	return <img {...props} src={envConfig.getValue('VITE_IMAGES_URL') + src} />
}
