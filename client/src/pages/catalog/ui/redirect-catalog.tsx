import { Navigate } from 'react-router-dom'
import { ECategories } from '@/shared'

export const RedirectCatalogPage = () => {
	return <Navigate to={`/catalog/${ECategories.all}`} />
}
