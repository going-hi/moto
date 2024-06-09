import { envConfig } from '@/shared/config'

export const formatProductImages = (product: { images: []; name: string }) => ({
	...product,
	images: product.images.map(i => ({
		url: envConfig.getValue('VITE_IMAGES_URL') + i,
		desc: product.name
	}))
})
