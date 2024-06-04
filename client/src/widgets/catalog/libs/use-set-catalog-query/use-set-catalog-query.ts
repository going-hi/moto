import qs from 'qs'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchQueryStore } from '../../model'

export const useSetCatalogQuery = (isSet: boolean) => {
	const navigate = useNavigate()

	useEffect(() => {
		useSearchQueryStore.subscribe(state => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { enabled, ...data } = state.data
			if (isSet) {
				navigate(`?${qs.stringify(data)}`)
			}
		})
	}, [navigate, isSet])
}
