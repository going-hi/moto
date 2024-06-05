import clsx from 'clsx'
import { useParamNameStore } from '@/entities/catalog'
import { CatalogCardsTypesMap } from '@/shared'
import { useSearchQueryStore } from '../../model'

export const CatalogTypeRadio = () => {
	const {
		data: { type },
		setData
	} = useSearchQueryStore()
	const { name } = useParamNameStore()

	const list = CatalogCardsTypesMap[name]

	if (!(list ?? []).length) {
		return <></>
	}

	return (
		<ul className='flex gap-x-[30px]'>
			{list.map(({ value, label }) => (
				<li
					className={clsx(
						'px-[10px] py-[15px] bebas text-[40px] -tracking-2per font-bold leading-[40px] pb-[5px]',
						value === type
							? 'text-beige bg-black'
							: 'text-black bg-beige cursor-pointer border-black border'
					)}
					key={value}
					onClick={() => setData({ type: value })}
				>
					{label}
				</li>
			))}
		</ul>
	)
}
