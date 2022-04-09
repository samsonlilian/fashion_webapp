import React, { useState } from 'react'
import { Nav } from '../component'
import { LoadingBtn } from '../component/LoadingBtn'
import { postWithFileReq, remote_url } from '../config/request'

export const AddNewItem = () => {
	//
	const [inputs, setInputs] = useState({})
	const [coverImg, setCoverImg] = useState('')
	const [imgs, setImgs] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	const [message, setMessage] = useState('')
	//::::::::::

	const handleCoverImg = (event) => {
		setCoverImg(event.target.files[0])
	}

	const handleImages = (event) => {
		const name = event.target.name
		const value = event.target.files[0]
		setImgs((prevImages) => ({ ...prevImages, [name]: value }))
	}
	const handleChange = (event) => {
		//
		const name = event.target.name
		const value = event.target.value
		setInputs((prevVal) => ({ ...prevVal, [name]: value }))
	}

	const onSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)

		const formVal = new FormData()
		formVal.append('gender', inputs.gender)
		formVal.append('age_range', inputs.age_range)
		formVal.append('title', inputs.title)
		formVal.append('keywords', inputs.keywords)
		formVal.append('cover_img', coverImg)
		formVal.append('desc', inputs.desc)
		formVal.append('desc_long', inputs.desc_long)
		formVal.append('type_of_wears', inputs.type_of_wears)
		formVal.append('file_one', imgs.file_one)
		formVal.append('file_two', imgs.file_two)
		formVal.append('file_three', imgs.file_three)

		const response = await postWithFileReq(`${remote_url}fashion`, formVal)
		if (response.status === 'success') {
			setIsLoading(false)
			//
		} else {
			setIsLoading(false)
			//
		}
	}
	return (
		<>
			<Nav />
			<div className='container p-5'>
				<div className='card shadow p-5'>
					<h6 className='text-center'>Add New Fashion</h6>
					<form onSubmit={onSubmit}>
						<div className='row'>
							<div className='col-6'>
								<div className='form-group'>
									<input
										className='form-control'
										type='text'
										name='title'
										vzlue={inputs.title || ''}
										onChange={handleChange}
										placeholder='give this outfit a title '
									/>
								</div>
							</div>
							<div className='col-6'>
								<div className='form-group'>
									<input
										className='form-control'
										type='text'
										placeholder='keywords:eg fashion'
										name='keywords'
										vzlue={inputs.keywords || ''}
										onChange={handleChange}
									/>
								</div>
							</div>
						</div>
						{/*  */}
						<div className='row my-4'>
							<div className='col-12'>
								<div className='form-group'>
									<input
										className='form-control'
										type='file'
										onChange={handleCoverImg}
									/>
								</div>
							</div>
						</div>
						{/* age and  */}
						<div className='row my-4'>
							{/*  */}
							<div className='col-4'>
								<div className='form-group'>
									<select
										className='form-select'
										name='age_range'
										onChange={handleChange}
										required
									>
										<option value=''>select age range</option>
										<option value='0'>{'< 50'}</option>
										<option value='1'> {'>50'} </option>
									</select>
								</div>
							</div>
							{/*  */}
							<div className='col-4'>
								<div className='form-group'>
									<select
										className='form-select'
										name='gender'
										required
										onChange={handleChange}
									>
										<option value=''>select gender</option>
										<option value='0'>male</option>
										<option value='1'>female</option>
									</select>
								</div>
							</div>
							{/*  */}
							<div className='col-4'>
								<div className='form-group'>
									<select
										className='form-select'
										name='type_of_wears'
										required
										onChange={handleChange}
									>
										<option value=''>select type of wears</option>
										<option value='0'>native</option>
										<option value='1'>english</option>
									</select>
								</div>
							</div>
						</div>
						{/* additional images */}
						<div className='row'>
							<div className='col-4'>
								<input
									className='form-control'
									name='file_one'
									type='file'
									onChange={handleImages}
								/>
							</div>
							<div className='col-4'>
								<input
									className='form-control'
									name='file_two'
									type='file'
									onChange={handleImages}
								/>
							</div>
							<div className='col-4'>
								<input
									className='form-control'
									name='file_three'
									type='file'
									onChange={handleImages}
								/>
							</div>
						</div>
						{/* desc::: */}
						<div className='row my-4'>
							{/*  */}
							<div className='col-6'>
								<div className='form-group'>
									<textarea
										className='form-control'
										rows='10'
										name='desc'
										vzlue={inputs.desc || ''}
										onChange={handleChange}
									></textarea>
								</div>
							</div>
							{/*  */}
							<div className='col-6'>
								<div className='form-group'>
									<textarea
										className='form-control'
										rows='10'
										name='desc_long'
										vzlue={inputs.desc_long || ''}
										onChange={handleChange}
									></textarea>
								</div>
							</div>
						</div>
						{/*  */}
						<div>
							{isLoading ? (
								<LoadingBtn />
							) : (
								<button
									type='submit'
									className='d-flex pull-right float-right btn btn-primary'
								>
									Add Fashion
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
