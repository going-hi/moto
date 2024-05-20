import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { CategoriesRuMap, UnderlineWave } from '@/shared'
import { useParamNameStore } from '../../model'

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
