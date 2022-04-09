import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LoadingBtn } from '../../component/LoadingBtn'

import { postReq, remote_url, token } from '../../config/request'

export const SignIn = () => {
	const [formInputs, setFormInputs] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	const [success, setSuccess] = useState(false)

	//
	const handleInputChange = (event) => {
		//
		const name = event.target.name
		const value = event.target.value
		setFormInputs((values) => ({ ...values, [name]: value }))
	}
	const createNewAccount = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		//

		const data = {
			email: formInputs.email,
			password: formInputs.password,
		}
		const response = await postReq(`${remote_url}login`, data)
		if (response.status === 'success') {
			setIsLoading(false)
			setSuccess(true)
			//store token
			localStorage.setItem('token', response.data.api_token)
			window.location.href = '/'
		} else {
			setIsLoading(false)
		}
	}
	if (token) {
		window.location.href = '/'
	}
	return (
		<>
			<div className='row'>
				<div className='col-6'>
					<div className=''>
						<form onSubmit={createNewAccount}>
							<div className='pt-5'>
								<h6 className='text-center'>
									Dont have an account? <Link to='/sign-up'>Sign up</Link>
								</h6>
								<h4 className='text-center'>Join 12 million others</h4>
								<p className='text-center'>
									Lorem ipsum dolor sit amet consectetur adipisicing.
								</p>
							</div>

							{success && <p className='alert alert-success'>Login Successfully</p>}
							{/*  */}
							<div className='px-5'>
								{/*  */}
								<div className='row px-5 py-3'>
									<input
										type='text'
										name='email'
										required
										onChange={handleInputChange}
										value={formInputs.email}
										className='form-control py-2'
										placeholder='email'
									/>
								</div>
								{/*  */}
								<div className='row form-group px-5 py-3'>
									<input
										type='password'
										name='password'
										required
										value={formInputs.password}
										onChange={handleInputChange}
										className='form-control py-2'
										placeholder='******'
									/>
								</div>
								<div className='px-5'>
									{isLoading ? (
										<LoadingBtn />
									) : (
										<button className='form-control btn btn-outline-primary'>
											{' '}
											Sign Up{' '}
										</button>
									)}
								</div>
							</div>
						</form>
					</div>
				</div>

				{/*  */}
				<div className='col'>
					<div className='row'>
						<div className='col'>
							<div className='row'>
								<div className='col py-2'>
									<div className='card' style={{ width: '25rem' }}>
										<img
											src='https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
											className='card-img-top'
											alt='...'
										/>

										<div
											className='py-5 text-center text-white'
											style={{ background: '#AA2230' }}
										>
											Use Fashion style to ....lorem4 Use Fashion style to ....lorem4 Use
											Fashion style to ....lorem4
										</div>
									</div>
								</div>
								{/*  */}
								<div className='col py-2'>
									<div className='card' style={{ width: '25rem' }}>
										<img
											src='https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
											className='card-img-top'
											alt='...'
										/>

										<div
											className='py-5 text-center text-white'
											style={{ background: '#AA2230' }}
										>
											Use Fashion style to ....lorem4 Use Fashion style to ....lorem4 Use
											Fashion style to ....lorem4
										</div>
									</div>
								</div>
								{/*  */}
							</div>
						</div>
						{/*  */}
						<div
							className='col'
							style={{
								backgroundImage: `url('https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
							}}
						></div>
					</div>
				</div>
			</div>
		</>
	)
}

//schmea
