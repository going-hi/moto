import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import { editProfileSwitchItemsArr } from '../../model'

export const EditProfileSwitch = ({
	value,
	setValue
}: {
	value: string
	setValue: Dispatch<SetStateAction<string>>
}) => {
	return (
		<div className='mb-[30px] relative after:absolute after:bottom after:right-0 after:bg-[#9F9C91] after:w-full after:h-[1px] w-[48%]'>
			<ul className='flex justify-between items-center'>
				{editProfileSwitchItemsArr.map(i => (
					<li
						onClick={() => setValue(i.value)}
						className={clsx(
							'text-[24px] -tracking-2per leading-[28px]',
							value === i.value
								? 'font-extrabold relative after:absolute after:bottom-0 after:right-0 after:bg-black after:w-full after:h-[1px] cursor-default'
								: 'text-[#9F9C91] cursor-pointer font-medium'
						)}
						key={i.value}
					>
						{i.label}
					</li>
				))}
			</ul>
		</div>
	)
}
