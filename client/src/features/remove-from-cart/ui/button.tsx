import { useRemoveFromCart } from '../libs'
import type { TContext } from '../model'

export const RemoveFromCardButton = ({
	id,
	ctx
}: {
	id: number
	ctx: TContext
}) => {
	const { mutate } = useRemoveFromCart(ctx)

	return (
		<button
			onClick={() => mutate(id)}
			className='relative after:absolute after:bottom-0 after:left-0 after:bg-black after:content-[""] after:w-full after:h-[2px] self-end hover:text-gray-dark hover:after:bg-gray-dark duration-700 after:duration-700'
		>
			Удалить
		</button>
	)
}
