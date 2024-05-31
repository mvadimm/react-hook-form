import { Autocomplete } from '@mui/material'

import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form'

import { Option } from '../types/option'

type Props<T extends FieldValues> = {
	name: Path<T>
	options: Option[]
}

export function RHFAutocomplete<T extends FieldValues>({
	name,
	options,
}: Props<T>) {
	const { control } = useFormContext()

	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { value, onChange, ref } }) => (
				<Autocomplete options={options} value={value} />
			)}
		/>
	)
}
