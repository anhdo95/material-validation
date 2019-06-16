import React, { Component } from 'react'
import { Box, Typography } from '@material-ui/core'
import InputForm from '../InputForm'

export default class RegistrationForm extends Component {
	render() {
		return (
			<Box borderColor="grey.500" border={1} borderRadius="borderRadius" m={2} p={2}>
				<Box display="flex" justifyContent="center">
					<Typography variant="h4" component="h1" gutterBottom>
						Registration Form
					</Typography>
				</Box>
				<Box display="flex" justifyContent="center">
					Complete the form below to sign up for our membership service.
				</Box>

				<Box mt={4}>
					<InputForm />
				</Box>
			</Box>
		)
	}
}
