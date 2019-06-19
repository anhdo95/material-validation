import React from 'react'
import { Button, TextField } from '@material-ui/core'

export const Form = (props) => {
	const {
		values: { name, email, password, confirmPassword, phoneNumber, birthDate },
		errors,
		touched,
		handleChange,
		handleSubmit,
		isValid,
		setFieldTouched,
	} = props

	const change = (name, e) => {
		e.persist()
		handleChange(e)
		setFieldTouched(name, true, false)
	}

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				name="name"
				helperText={touched.name ? errors.name : ''}
				error={touched.name && Boolean(errors.name)}
				label="Name"
				value={name}
				onChange={change.bind(null, 'name')}
				fullWidth
			/>

			<TextField
				name="email"
				helperText={touched.email ? errors.email : ''}
				error={touched.email && Boolean(errors.email)}
				label="Email"
				fullWidth
				type="email"
				value={email}
				onChange={change.bind(null, 'email')}
			/>

			<TextField
				name="password"
				helperText={touched.password ? errors.password : ''}
				error={touched.password && Boolean(errors.password)}
				label="Password"
				fullWidth
				type="password"
				value={password}
				onChange={change.bind(null, 'password')}
			/>

			<TextField
				name="confirmPassword"
				helperText={touched.confirmPassword ? errors.confirmPassword : ''}
				error={touched.confirmPassword && Boolean(errors.confirmPassword)}
				label="Confirm Password"
				fullWidth
				type="password"
				value={confirmPassword}
				onChange={change.bind(null, 'confirmPassword')}
			/>

			<TextField
				name="phoneNumber"
				helperText={touched.phoneNumber ? errors.phoneNumber : ''}
				error={touched.phoneNumber && Boolean(errors.phoneNumber)}
				label="Phone Number"
				fullWidth
				value={phoneNumber}
				onChange={change.bind(null, 'phoneNumber')}
			/>

			<TextField
				name="birthDate"
				helperText={touched.birthDate ? errors.birthDate : ''}
				error={touched.birthDate && Boolean(errors.birthDate)}
				label="Birth Date"
				fullWidth
				type="date"
				value={birthDate}
				onChange={change.bind(null, 'birthDate')}
				InputLabelProps={{
					shrink: true,
				}}
			/>

			<Button type="submit" fullWidth color="primary" disabled={!isValid}>
				Submit
			</Button>
		</form>
	)
}
