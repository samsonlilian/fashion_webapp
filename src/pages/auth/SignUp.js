import React from 'react'

export const SignUp = () => {
	return (
		<>
			<div className='row'>
				<div className='col p-5 '>
					<div className='container p-5'>
						<form>
							<h4 className='text-center'>Join 12 million others</h4>
							<p className='text-center'>
								Lorem ipsum dolor sit amet consectetur adipisicing.
							</p>
							{/*  */}
							<div className='row px-5 py-3'>
								<div className='col'>
									<input
										type='text'
										className='form-control py-2'
										placeholder='first name'
									/>
								</div>
								<div className='col'>
									<input
										type='text'
										className='form-control py-2'
										placeholder='last name'
									/>
								</div>
							</div>
							{/*  */}
							<div className='row px-5 py-3'>
								<input type='text' className='form-control py-2' placeholder='email' />
							</div>
							{/*  */}
							<div className='row form-group px-5 py-3'>
								<input
									type='text'
									className='form-control py-2'
									placeholder='password'
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
									<div class='card' style={{ width: '25rem' }}>
										<img
											src='https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
											class='card-img-top'
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
									<div class='card' style={{ width: '25rem' }}>
										<img
											src='https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
											class='card-img-top'
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

//
