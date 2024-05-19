import clsx from 'clsx'
import { Accordion, Button } from '@/shared'
import type { TCatalogAccordionItem } from '../model'
import cl from './item.module.css'

export const CatalogItem = ({
	title,
	image,
	text,
	index,
	link
}: TCatalogAccordionItem & { index: number }) => {
	return (
		<Accordion title={title} variant='catalog' index={index}>
			<div className='flex justify-between w-full pt-[10px]'>
				<div className='basis-[900px]'>
					<ul className='flex flex-col gap-y-[8px] mb-[34px] w-full'>
						{text.split('\n').map(i => (
							<li className={cl.item} key={i}>
								{i}
							</li>
						))}
					</ul>
					<Button
						variant='parentheses-link'
						path={`/catalog/${link}`}
						className={clsx(cl.button, 'w-[270px]')}
					>
						ПЕРЕЙТИ В КАТАЛОГ
					</Button>
				</div>
				<div className='relative w-full'>
					<img
						className='absolute -top-[10%] right-0 w-70% h-full object-cover '
						src={image}
						alt={title}
					/>
				</div>
			</div>
		</Accordion>
	)
}
