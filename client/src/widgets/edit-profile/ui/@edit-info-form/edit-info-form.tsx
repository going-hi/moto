import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import {
	EditInfoSchema,
	TEditProfileInfo,
	useEditInfo
} from '@/features/edit-profile'
import { useProfileStore } from '@/entities/profile'
import { Button, Icon, Input, Typography } from '@/shared'
import { editInfoFieldsArr } from '../../model'

const { Text } = Typography

export const EditProfileInfoForm = () => {
	const { profile } = useProfileStore()
	const { mutate, isPending, error } = useEditInfo()

	const form = useForm<TEditProfileInfo>({
		resolver: zodResolver(EditInfoSchema),
		defaultValues: {
			name: profile?.name,
			surname: profile?.surname,
			email: profile?.email,
			phone: profile?.phone
		}
	})

	const { handleSubmit, control } = form

	const onSubmit = (data: TEditProfileInfo) => {
		mutate(data)
	}

	return (
		<FormProvider {...form}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-wrap gap-x-[30px] gap-y-[20px] mb-[30px]'>
					{editInfoFieldsArr.map(i => (
						<Controller
							name={i.name}
							key={i.name}
							control={control}
							render={({ field }) => (
								<Input
									className='basis-[48%]'
									variant='profile'
									{...i}
									{...field}
								/>
							)}
						/>
					))}
				</div>
				<Button variant='primary' className='!py-[18px] uppercase'>
					{isPending ? (
						<Icon name='Loading' className='w-[21px] h-[21px]' />
					) : (
						'Сохранить'
					)}
				</Button>
				{error?.message && (
					<Text className='text-red-700 mt-[5px]'>
						{error?.message}
					</Text>
				)}
			</form>
		</FormProvider>
	)
}
