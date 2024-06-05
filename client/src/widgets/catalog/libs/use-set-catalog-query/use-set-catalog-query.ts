import qs from 'qs'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchQueryStore } from '../../model'

export const useSetCatalogQuery = (isSet: boolean) => {
	const navigate = useNavigate()

	useEffect(() => {
		useSearchQueryStore.subscribe(state => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { enabled, price, ...data } = state.data

			const params: { [key: string]: unknown } = { ...data }

			if (price.state[0] !== '0' || price.state[1] !== '0') {
				params['price[0]'] = price.state[0]
				params['price[1]'] = price.state[1]
			}

			if (isSet) {
				navigate(`?${qs.stringify(params)}`)
			}
		})
	}, [navigate, isSet])
}
