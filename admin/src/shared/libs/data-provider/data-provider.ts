import type { DataProvider } from 'react-admin'
import { $api } from '../axios'
import { errorHandler } from '../error-handler'
import { ListSchema } from '@/shared'
import qs from 'qs'
import { removeRelations } from '../removeRelations'

// @ts-ignore. don't need to use updateMany / getManyReference
export const dataProvider: DataProvider = {
	getOne: async (res, par) => {
		try {
			const url = `/${res}/${par.id}`

			const { data } = await $api.get(url)

			return { data }
		} catch (e) {
			return errorHandler(e)
		}
	},

	// @ts-expect-error
	getMany: async (res, par) => {
		try {
			const { ids } = par

			const url = `/${res}/many?${qs.stringify({
				filters: decodeURI(JSON.stringify({ ids }))
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
				sortOrder: par.sort.order
			}

			const url = `/${res}?${qs.stringify(query)}`

			const data = await $api
				.get(url)
				.then(res => ListSchema.parse(res.data))

			const {
				meta: { total }
			} = data

			// @ts-expect-error
			const items = removeRelations(data.items, 'product')

			return { data: [...items], total }
		} catch (e) {
			return errorHandler(e)
		}
	},

	create: async (res, par) => {
		try {
			const url = `/${res}/`

			const { data } = await $api.post(url, par.data)

			return { data }
		} catch (e) {
			return errorHandler(e)
		}
	},

	update: async (res, par) => {
		return Promise.reject()
	},

	delete: async (res, par) => {
		return Promise.reject()
	},

	deleteMany: async (res, par) => {
		return Promise.reject()
	}
}
