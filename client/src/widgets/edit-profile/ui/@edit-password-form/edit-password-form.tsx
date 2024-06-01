import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import {
	TEditPassword,
	useEditPassword,
	EditPasswordSchema
} from '@/features/edit-profile'
import { Button, Icon, Input, Typography } from '@/shared'
import { editPasswordFieldsArr } from '../../model'

const { Text } = Typography

export const EditProfilePasswordForm = () => {
	const { mutate, isPending, error } = useEditPassword()

	const form = useForm<TEditPassword>({
		resolver: zodResolver(EditPasswordSchema)
	})
	const { handleSubmit, control } = form

	const onSubmit = (data: TEditPassword) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { confirmPassword, ...profile } = data
		mutate(profile)
	}

	return (
		<FormProvider {...form}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col gap-y-[20px] mb-[30px]'>
					{editPasswordFieldsArr.map(i => (
						<Controller
							name={i.name}
							key={i.name}
							control={control}
							render={({ field }) => (
								<Input variant='profile' {...i} {...field} />
							)}
						/>
					))}
				</div>
				<Button variant='primary' className='!py-[18px] uppercase'>
					{isPending ? (
						<Icon
							name='Loading'
							className='w-[21px] h-[21px] animate-spin-1000'
						/>
					) : (
						'Сменить'
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
