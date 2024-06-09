import type { CreateParams, DataProvider } from 'react-admin'
import { $api } from '../axios'
import { errorHandler } from '../error-handler'
import { ListSchema, formatProductImages } from '@/shared'
import qs from 'qs'
import { removeRelation } from '../removeRelation'
import { CreateProductSchema } from '@/features/create-product'
import { z } from 'zod'
import { EditProductSchema } from '@/features/edit-product'

type TCreateCardParams = Omit<z.infer<typeof CreateProductSchema>, 'images'> & {
	images: [
		{
			rawFile: File
			src?: string
			title: string
		}
	]
}

const createCardFormData = (params: CreateParams<TCreateCardParams>) => {
	const formData = new FormData()
	params.data.images?.forEach(i => {
		if (i.rawFile) {
			formData.append('images', i.rawFile, i.title)
		}
	})

	params.data.characteristics?.forEach((i, index) => {
		formData.append(`characteristics[${index}][key]`, i.key)
		formData.append(`characteristics[${index}][value]`, i.value)
	})
	Object.keys(params.data).forEach(key => {
		// @ts-expect-error
		if (!['images', 'characteristics'].includes(key) && params.data[key]) {
			// @ts-expect-error
			formData.append(key, params.data[key])
		}
	})

	return formData
}

type TUpdateCardParams = Omit<
	z.infer<typeof EditProductSchema>,
	'newImages'
> & {
	newImages: [
		{
			rawFile: File
			src?: string
			title: string
		}
	]
}

const editCardFormData = (params: CreateParams<TUpdateCardParams>) => {
	const formData = new FormData()

	params.data.newImages?.forEach(i => {
		if (i.rawFile) {
			formData.append('newImages', i.rawFile, i.title)
		}
	})

	params.data.characteristics?.forEach((i, index) => {
		formData.append(`characteristics[${index}][key]`, i.key)
		formData.append(`characteristics[${index}][value]`, i.value)
	})

	params.data.images?.forEach((i, index) => {
		// @ts-expect-error
		formData.append(`images[${index}]`, i.url?.split('/files/')[1])
	})

	Object.keys(params.data).forEach(key => {
		if (
			!['newImages', 'characteristics', 'images'].includes(key) &&
			// @ts-expect-error
			params.data[key]
		) {
			// @ts-expect-error
			formData.append(key, params.data[key])
		}
	})

	return formData
}

// @ts-ignore. don't need to use updateMany / getManyReference
export const dataProvider: DataProvider = {
	getOne: async (res, par) => {
		try {
			const url = `/${res}/${par.id}`

			const { data } = await $api.get(url)

			let obj

			switch (res) {
				case 'review':
					obj = removeRelation(data, 'product')
					break
				case 'order':
					obj = {
						...data,
						// @ts-expect-error
						items: data.items.map(i => removeRelation(i, 'product'))
					}
					break
				case 'product':
					obj = formatProductImages(data)
					break
				default:
					obj = data
			}

			return { data: obj }
		} catch (e) {
			return errorHandler(e)
		}
	},

	// @ts-expect-error
	getMany: async (res, par) => {
		try {
			const { ids } = par

			const url = `/${res}/many?${qs.stringify({
				filters: decodeURI(
					JSON.stringify({
						// @ts-expect-error
						ids: ids.map(i => (typeof i === 'object' ? i.id : i))
					})
				)
			})}`

			const data = await $api
				.get(url)
				.then(res => ListSchema.parse(res.data))

			return { data: data.items }
		} catch (e) {
			return errorHandler(e)
		}
	},

	// @ts-expect-error
	getList: async (res, par) => {
		try {
			const query = {
				page: par.pagination.page,
				count: par.pagination.perPage,
				sortBy: par.sort.field,
				sortOrder: par.sort.order,
				q: par.filter.q
			}

			const url = `/${res}?${qs.stringify(query)}`

			const data = await $api
				.get(url)
				.then(res => ListSchema.parse(res.data))

			const {
				meta: { total }
			} = data

			const items =
				res === 'review'
					? // @ts-expect-error
					  data.items.map(i => removeRelation(i, 'product'))
					: data.items

			return { data: [...items], total }
		} catch (e) {
			return errorHandler(e)
		}
	},

	create: async (res, par) => {
		try {
			const url = `/${res}/`

			const data = res === 'product' ? createCardFormData(par) : par.data

			const { data: result } = await $api.post(url, data, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})

			return { data: result }
		} catch (e) {
			return errorHandler(e)
		}
	},

	update: async (res, par) => {
		try {
			let data = par.data

			let url = ''

			if (res === 'user') {
				data = {
					user: +par.id,
					...data
				}
			}

			if (res === 'product') {
				data = editCardFormData(par)
			}

			switch (res) {
				case 'order':
					url = `/${res}/${par.id}/status`
					break
				case 'user':
					url = '/role'
					break
				default:
					url = `/${res}/${par.id}`
			}

			const { data: result } = await $api({
				method: res === 'order' ? 'PATCH' : 'PUT',
				url,
				data
			})

			return { data: result }
		} catch (e) {
			return errorHandler(e)
		}
	},

	// @ts-expect-error
	delete: async (res, par) => {
		try {
			const url = `/${res}/${par.id}`

			await $api.delete(url)

			return { data: par.id }
		} catch (e) {
			return errorHandler(e)
		}
	},

	deleteMany: async (res, par) => {
		try {
			const { ids } = par

			const url = `/${res}/many?${qs.stringify({
				filters: decodeURI(JSON.stringify({ ids }))
			})}`

			// @ts-expect-error
			await $api.delete(url, { ids })

			return { data: ids }
		} catch (e) {
			return errorHandler(e)
		}
	}
}
