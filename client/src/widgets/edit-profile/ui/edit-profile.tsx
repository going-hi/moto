import { useState } from 'react'
import { editProfileSwitchItemsArr } from '../model'
import { EditProfileInfoForm } from './@edit-info-form'
import { EditProfilePasswordForm } from './@edit-password-form'
import { EditProfileSwitch } from './@switch'

export const EditProfile = () => {
	const [switchOption, setSwitchOption] = useState(
		editProfileSwitchItemsArr[0].value
	)

	return (
		<div className='w-full'>
			<EditProfileSwitch
				value={switchOption}
				setValue={setSwitchOption}
			/>
			{switchOption === 'edit-profile' ? (
				<EditProfileInfoForm />
			) : (
				<EditProfilePasswordForm />
			)}
		</div>
	)
}
