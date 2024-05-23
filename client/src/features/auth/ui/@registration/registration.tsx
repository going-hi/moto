import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { Typography } from '@/shared'
import { useRegistration } from '../../libs'
import {
	RegistrationSchema,
	TRegistration,
	registrationFieldsArr
} from '../../model'
import { AuthButton } from '../@button'
import { AuthConfirmRules } from '../@confirm-rules'
import { AuthInput } from '../@input'

const { Text } = Typography

export const AuthRegistration = () => {
	const { error, mutate: registrationMutation, isPending } = useRegistration()

	const form = useForm<TRegistration>({
		resolver: zodResolver(RegistrationSchema),
		defaultValues: {
			confirmRules: false
		}
	})

	const {
		handleSubmit,
		control,
		formState: { errors }
	} = form

	const onSubmit = (data: TRegistration) => {}

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
				<AuthButton isPending={isPending} variant='registration' />
				{error?.message && (
					<Text className='text-red-700 mt-[5px]'>
						{error?.message}
					</Text>
				)}
			</form>
		</FormProvider>
	)
}
