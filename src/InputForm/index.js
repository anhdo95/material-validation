import React, { Component } from 'react'
import { Formik } from 'formik'
import withStyles from '@material-ui/core/styles/withStyles'
import { Form } from './form'
import * as Yup from 'yup'

const validationSchema = Yup.object({
	name: Yup.string('Enter a name')
		.required('Name is required')
		.min(4, 'Your name must be at least 4 characters'),
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
		.matches(/(09|01[2|6|8|9])+([0-9]{8})\b/, 'Your phone number is invalid'),
	birthDate: Yup.date()
		.min(new Date(1900, 0, 0), "You're too old to live in the world!")
		.max(new Date(), "You're too childish to become a membership!"),
})

const styles = (theme) => ({
	container: {
		maxWidth: '400px',
		padding: `${theme.spacing(5)}`,
	},
})

class InputForm extends Component {
	state = {
		membership: {
			name: '',
			email: '',
			phoneNumber: '',
			birthDate: '',
		},
	}

	async componentDidMount() {
		const membership = await new Promise((resolve) => {
			setTimeout(() => {
				return resolve({
					name: 'AnhDo',
					email: 'anhdo@gmail.com',
					phoneNumber: '0999999999',
					birthDate: "1900-01-01",
				})
			})
		})

		this.setState({
			membership,
		})
	}

	handleSubmit = (values, actions) => {
		console.log('values :', JSON.stringify(values, null, 2))
		console.log('actions', actions)
	}

	render() {
		const { container } = this.props
		const { membership } = this.state

		return (
			<React.Fragment>
				<div className={container}>
					<Formik
						enableReinitialize={true}
						render={(props) => <Form {...props} />}
						onSubmit={this.handleSubmit}
						initialValues={membership}
						validationSchema={validationSchema}
					/>
					{/* {(props) => <Form {...props} />}
					</Formik> */}
				</div>
			</React.Fragment>
		)
	}
}

export default withStyles(styles)(InputForm)
