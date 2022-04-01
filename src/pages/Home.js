import React from 'react'
import { CardItem, CardItems, Nav } from '../component'

export const Home = () => {
	return (
		<>
			<Nav />
			<div>
				{/* header section */}
				<div
					style={{
						backgroundImage: `url('https://images.pexels.com/photos/295771/pexels-photo-295771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
						backgroundSize: '100%',
						backgroundRepeat: 'no-repeat',
						padding: '200px',
					}}
				>
					<h1 className='text-primary'>Fashion Style</h1>
					<p>
						find your next outfit for your outings like{' '}
						<span className='text-primary px-1'>birthday</span>,
						<span className='text-primary px-1'>weeding</span>,
						<span className='text-primary px-1'>bridal shower</span>
					</p>
					<form
						className=' py-5 px-1'
						style={{ background: '#FBFBFB', borderRadius: '15px' }}
					>
						<div className='row'>
							<form className='px-5'>
								<div className='d-flex justify-content-between'>
									<input
										type='text'
										className=' py-2 '
										placeholder='enter the event you are going to'
										style={{
											borderLeft: '0px',
											borderRight: '0px',
											borderTop: '0',
											borderBottom: '0.05rem solid gray',
											width: '85%',
											background: '#FBFBFB',
										}}
									/>
									<button className='btn btn-outline-primary px-3'>search</button>
								</div>
								{/*  */}
								<div className='d-flex justify-content-between mt-1 mr-5 py-3'>
									<div className='row'>
										<div className='col'>
											<select className='form-select'>
												<option>select gender</option>
											</select>
										</div>
										<div className='col'>
											<select className='form-select'>
												<option> select your age range</option>
											</select>
										</div>
										<div className='col'>
											<select className='form-select rounded'>
												<option>type of wears</option>
											</select>
										</div>
									</div>
									{/*  */}
									<div>
										<a href='#0' style={{ textDecoration: 'none' }}>
											{' '}
											Clear all
										</a>
									</div>
								</div>
							</form>
						</div>
					</form>
				</div>
				{/*end of header section  */}
				{/*  */}
				<div className='container'>
					<h2 className='py-4'>Suggestions</h2>
					<div className='shadow'>
						<CardItems />
						<CardItems />
						<CardItems />
					</div>
				</div>

				{/*  */}
			</div>
		</>
	)
}
