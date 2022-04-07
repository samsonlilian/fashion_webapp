import React, { useState } from 'react'

import { postReq, remote_url } from '../../config/request'

export const SignUp = () => {
	const [formInputs, setFormInputs] = useState({})

	//
	const handleInputChange = (event) => {
		//
		const name = event.target.name
		const value = event.target.value
		setFormInputs((values) => ({ ...values, [name]: value }))
	}
	const createNewAccount = async (e) => {
		e.preventDefault()
		//
		console.log(formInputs)
		// const response = await postReq()
	}
	return (
		<>
			<div className='row'>
				<div className='col'>
					<div className='d-flex justify-content-center'>
						<form onSubmit={createNewAccount}>
							<h4 className='text-center'>Join 12 million others</h4>
							<p className='text-center'>
								Lorem ipsum dolor sit amet consectetur adipisicing.
							</p>
							{/*  */}
							<div className='row px-5 py-3'>
								<input
									type='text'
									name='fullname'
									required
									onChange={handleInputChange}
									value={formInputs.fullname}
									className='form-control py-2'
									placeholder='fullname'
								/>
							</div>
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
								<button className='form-control btn btn-outline-primary'>
									{' '}
									Sign Up{' '}
								</button>
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
