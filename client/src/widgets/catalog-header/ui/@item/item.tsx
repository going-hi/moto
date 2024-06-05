import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useParamNameStore } from '@/entities/catalog'
import { CategoriesRuMap, UnderlineWave } from '@/shared'

export const CatalogHeaderItem = ({ keyMap }: { keyMap: string }) => {
	const { name } = useParamNameStore()

	const label = CategoriesRuMap[keyMap]

	return (
		<li>
			<UnderlineWave>
				<Link
					className={clsx(
						'font-medium text-[18px] px-[3px]',
						name === keyMap && 'bg-black'
					)}
					to={`/catalog/${keyMap}`}
				>
					{label}
				</Link>
			</UnderlineWave>
		</li>
	)
}
