import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import {
	EditInfoSchema,
	TEditProfileInfo,
	useEditInfo
} from '@/features/edit-profile'
import { useProfileStore } from '@/entities/profile'
import { Input, Typography } from '@/shared'
import { editInfoFieldsArr } from '../../model'
import { EditProfileInfoButton } from '../@edit-info-button'

const { Text } = Typography

export const EditProfileInfoForm = () => {
	const { profile } = useProfileStore()
	const { mutate, isPending, error } = useEditInfo()

	const form = useForm<TEditProfileInfo>({
		resolver: zodResolver(EditInfoSchema),
		defaultValues: {
			name: '',
			surname: '',
			email: '',
			phone: ''
		}
	})

	const { handleSubmit, control, reset } = form

	useEffect(() => {
		if (profile) {
			const { name, surname, phone, email } = profile
			reset({ name, surname, email, phone })
		}
	}, [profile, reset])

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
									disabled
								/>
							)}
						/>
					))}
				</div>
				<EditProfileInfoButton isPending={isPending} />
				{error?.message && (
					<Text className='text-red-700 mt-[5px]'>
						{error?.message}
					</Text>
				)}
			</form>
		</FormProvider>
	)
}
