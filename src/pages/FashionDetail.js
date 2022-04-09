import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Nav } from '../component'
import { LoadingBtn } from '../component/LoadingBtn'
import { getReq, remote_url, postReq } from '../config/request'
import { singleData } from '../config/sampleData'

export const FashionDetail = () => {
	let { id } = useParams()
	const [fashion, setFashionData] = useState(singleData)
	const [isLoadind, setIsLoading] = useState(false)
	//
	useEffect(() => {
		//
		getFashionDetail(id)
	}, [])

	const getFashionDetail = async (id) => {
		//
		const response = await getReq(`${remote_url}fashion/${id}`)
		if (response.status === 'success') {
			setFashionData(response.data)
		}
	}

	const makeOrder = async () => {
		setIsLoading(true)
		const data = {
			fashion_id: id,
		}

		const response = await postReq(`${remote_url}order`, data)
		if (response.status) {
			setFashionData(response.data)
			setIsLoading(false)
		} else {
			setIsLoading(false)
		}
	}
	return (
		<>
			<Nav />
			<div>
				{/* header section */}
				<div
					style={{
						backgroundImage: `url(${fashion.cover_img})`,
						backgroundSize: '100%',
						backgroundRepeat: 'no-repeat',
						padding: '200px',
					}}
				>
					<h1 className='text-primary'>{fashion.title}</h1>
					<p>
						find your next outfit for your outings like{' '}
						<span className='text-primary px-1'>birthday</span>,
						<span className='text-primary px-1'>weeding</span>,
						<span className='text-primary px-1'>bridal shower</span>
					</p>
					<div>
						<Link to='/' className='text-muted'>
							go back
						</Link>
						{isLoadind ? (
							<div style={{ width: '10%' }}>
								<LoadingBtn />
							</div>
						) : fashion.is_ordered ? (
							<Link to='#0' className='btn btn-primary mx-4'>
								ordered
							</Link>
						) : (
							<Link
								to='#0'
								className='btn btn-outline-primary mx-4'
								onClick={() => makeOrder()}
							>
								order now
							</Link>
						)}
						{/*  */}
					</div>
				</div>
				{/*end of header section  */}
				{/*  */}
				<div className='container'>
					<div className=' p-5' style={{ lineHeight: '40px' }}>
						{fashion.desc}

						<div className='row p-5'>
							<div className='col-3'>
								<div class='card' style={{ width: '10rem' }}>
									<img src={fashion.cover_img} alt='...' />
								</div>
							</div>
							{fashion.images.length > 0 &&
								fashion.images.map((img) => (
									<div className='col-3'>
										<div class='card' style={{ width: '10rem', height: '10rem' }}>
											<img src={img.image} alt='...' />
										</div>
									</div>
								))}
						</div>
						{fashion.desc_long}
					</div>
				</div>

				{/*  */}
			</div>
		</>
	)
}
