import React, { useEffect, useState } from 'react'
import { CardItems, Nav } from '../component'
import { getReq, remote_url } from '../config/request'
import { data } from '../config/sampleData'

export const Home = () => {
	const [items, setItems] = useState(data)
	const [inputs, setInputs] = useState({
		gender: '',
		age_range: '',
		type_of_wears: '',
	})
	useEffect(() => {
		//
		getFashion()
	}, [])

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value

		setInputs((prevVal) => ({ ...prevVal, [name]: value }))
	}

	const getFashion = async () => {
		const fullUrl = `${remote_url}fashion?gender=${inputs.gender}`
		const response = await getReq(fullUrl)
		if (response.status === 'success') {
			//
			setItems(response.data)
		}
	}

	const searchFash = async (e) => {
		e.preventDefault()
		const fullUrl = `${remote_url}fashion?gender=${inputs.gender}&age_range=${inputs.age_range}&type_of_wears=${inputs.type_of_wears}&title=${inputs.title}`
		const response = await getReq(fullUrl)
		if (response.status === 'success') {
			//
			setItems(response.data)
		}
	}
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
					<div
						className=' py-5 px-1'
						style={{ background: '#FBFBFB', borderRadius: '15px' }}
					>
						<div className='row'>
							<form className='px-5 ' onSubmit={searchFash}>
								<div className='d-flex justify-content-between'>
									<input
										type='text'
										className=' py-2 '
										onChange={handleChange}
										name='title'
										placeholder='enter the event you are going to: eg funeral, birthday'
										style={{
											borderLeft: '0px',
											borderRight: '0px',
											borderTop: '0',
											borderBottom: '0.05rem solid gray',
											width: '85%',
											background: '#FBFBFB',
										}}
									/>
									<input
										type='submit'
										className='btn btn-outline-primary px-3'
										value='search'
									/>
								</div>
								{/*  */}
								<div className='d-flex justify-content-between mt-1 mr-5 py-3'>
									<div className='row'>
										<div className='col'>
											<select
												className='form-select'
												name='gender'
												onChange={handleChange}
											>
												<option value=''>select gender</option>
												<option value='0'>male</option>
												<option value='1'>female</option>
											</select>
										</div>
										<div className='col'>
											<select
												className='form-select'
												onChange={handleChange}
												name='age_range'
											>
												<option value=''> select your age range</option>
												<option value='0'> less than 50</option>
												<option value='1'> greater than 50</option>
											</select>
										</div>
										<div className='col'>
											<select
												name='type_of_wears'
												onChange={handleChange}
												className='form-select rounded'
											>
												<option value=''>type of wears</option>
												<option value='1'>english</option>
												<option value='0'>native</option>
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
					</div>
				</div>
				{/*end of header section  */}
				{/*  */}
				<div className='container'>
					<h2 className='py-4'>Suggestions</h2>
					<div className='shadow'>
						<CardItems items={items} />
					</div>
				</div>

				{/*  */}
			</div>
		</>
	)
}
