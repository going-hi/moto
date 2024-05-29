import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import {
	AuthButton,
	AuthInput,
	useRegistration,
	type TRegistration,
	RegistrationSchema
} from '@/features/auth-user'
import { Typography } from '@/shared'
import { registrationFieldsArr } from '../../model'
import { AuthConfirmRules } from '../@confirm-rules'

const { Text } = Typography

export const AuthRegistration = () => {
	const { error, mutate: registrationMutation, isPending } = useRegistration()

	const form = useForm<TRegistration>({
		resolver: zodResolver(RegistrationSchema),
		defaultValues: {
			confirmRules: false
		}
	})

	const { handleSubmit, control } = form

	const onSubmit = (data: TRegistration) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { confirmPassword, confirmRules, ...user } = data
		registrationMutation(user)
	}

	return (
		<FormProvider {...form}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col gap-y-[30px] mb-[20px]'>
					{registrationFieldsArr.map(i => (
						<Controller
							name={i.name}
							key={i.name}
							control={control}
							render={({ field }) => (
								<AuthInput {...i} {...field} />
							)}
						/>
					))}
					<Controller
						name={'confirmRules'}
						control={control}
						render={({ field }) => (
							<AuthConfirmRules field={field} />
						)}
					/>
				</div>
				<AuthButton isPending={isPending} variant='create' />
				{error?.message && (
					<Text className='text-red-700 mt-[5px]'>
						{error?.message}
					</Text>
				)}
			</form>
		</FormProvider>
	)
}
