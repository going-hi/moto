import type { DataProvider } from 'react-admin'
import { $api } from '../axios'
import { errorHandler } from '../error-handler'
import { ListSchema } from '@/shared'
import qs from 'qs'
import { removeRelation } from '../removeRelation'

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

			const { data } = await $api.post(url, par.data)

			return { data }
		} catch (e) {
			return errorHandler(e)
		}
	},

	update: async (res, par) => {
		try {
			const url =
				res === 'order'
					? `/${res}/${par.id}/status`
					: `/${res}/${par.id}`

			const { data } = await $api({
				method: res === 'order' ? 'PATCH' : 'PUT',
				url,
				data: par.data
			})

			return { data }
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
