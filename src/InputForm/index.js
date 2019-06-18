import React, { Component } from 'react'
import { Formik } from 'formik'
import withStyles from '@material-ui/core/styles/withStyles'
import { Form } from './form'
import * as Yup from 'yup'

const validationSchema = Yup.object({
	name: Yup.string('Enter a name').required('Name is required'),
	email: Yup.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	password: Yup.string('')
		.min(8, 'Password must contain at least 8 characters')
		.required('Enter your password'),
	confirmPassword: Yup.string('Enter your password')
		.required('Confirm your password')
		.oneOf([Yup.ref('password')], 'Password does not match'),
	phoneNumber: Yup.string('Enter your phone number')
		.required('Phone number is required')
})

const styles = (theme) => ({
	container: {
		maxWidth: '400px',
		padding: `${theme.spacing(5)}`,
	},
})

class InputForm extends Component {
	static INITIAL_VALUES = { name: '', email: '', confirmPassword: '', password: '', phoneNumber: '' }
	state = {}

	render() {
		const classes = this.props

		return (
			<React.Fragment>
				<div className={classes.container}>
					<Formik
						// render={(props) => <Form {...props} />}
						initialValues={InputForm.INITIAL_VALUES}
						validationSchema={validationSchema}
					>
						{(props) => <Form {...props} />}
					</Formik>
				</div>
			</React.Fragment>
		)
	}
}

export default withStyles(styles)(InputForm)
