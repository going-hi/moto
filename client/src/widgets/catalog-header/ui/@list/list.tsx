import { CategoriesRuMap } from '@/shared'
import { CatalogHeaderItem } from '../@item'

export const CatalogHeaderList = () => {
	return (
		<nav>
			<ul className='flex gap-x-[30px]'>
				{Object.keys(CategoriesRuMap).map(i => (
					<CatalogHeaderItem key={i} keyMap={i} />
				))}
			</ul>
		</nav>
	)
}
